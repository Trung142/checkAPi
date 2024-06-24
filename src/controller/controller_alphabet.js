const db = require("../models");
//read
const readAlphabet = async (req, res) => {
  try {
    let message = await db.Alphabet.findAll();
    return res.status(200).json({
      errCode: 0,
      message,
    });
  } catch (error) {
    return res.status(400).json({
      errCode: 4,
      error,
    });
  }
};
//update
const updateAlphabet = async (req, res) => {
  try {
    let userid = req.query.id;
    if (req.body.alphabet && req.body.value && userid) {
      let user = await db.Alphabet.findOne({
        where: {
          id: +userid,
        },
      });

      if (user) {
        let message = await db.Alphabet.update(
          {
            alphabet: req.body.alphabet.toUpperCase(),
            value: req.body.value,
          },
          {
            where: {
              id: +userid,
            },
          }
        );
        return res.status(200).json({
          errCode: 0,
          message: "ok",
          message,
        });
      } else {
        return res.status(200).json({
          errCode: 2,
          message: "please input orther id",
        });
      }
    } else {
      return res.status(200).json({
        errCode: 1,
        message: "not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      errCode: 4,
      error,
    });
  }
};
module.exports = {
  readAlphabet,
  updateAlphabet,
};
