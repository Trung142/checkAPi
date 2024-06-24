const { handleUserlogin } = require("../service/urlUser");
const { urlRead, ulrupdate_User, urlDelete, urlcreate } = require("../service/urlcreateUser");

const controller_login = async (req,res) => {
    try {
        const message = await handleUserlogin(req.body.email, req.body.password);
        return res.status(200).json({
            errCode: 0,
            message: message
        })
    } catch (error) {
        return res.status(404).json({
            errCode: 4,
            error
        })
    }
}

/// USER
const controllerReadUser = async (req, res) => {
	try {
		const message = await urlRead();
		return res.status(201).json({
			errCode: 0,
			message: "ok",
			message: message,
		});
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			error,
		});
	}
};
// create with method post
const controllerCreateUser = async (req, res) => {
	try {
		const message = await urlcreate(req.body);
		return res.status(201).json({
			errCode: 0,
			message: "ok",
			message: message,
		});
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			error,
		});
	}
};
// create with method put
const controllerUpdateUser = async(req, res) => {
	try {
		const message = await ulrupdate_User(req); 
		return res.status(200).json({
			errCode: 0,
			messager: "ok",
			message: message,
		});
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			error,
		});
	}
};
// create with method delete
const controllerDeleteUser = async(req, res) => {
	try {
		const message = await urlDelete(req); 
		return res.status(200).json({
			errCode: 0,
			messager: "ok",
			message: message,
		});
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			error,
		});
	}
};
module.exports = {
	controllerCreateUser,
	controllerUpdateUser,
	controllerDeleteUser,
     controller_login,
     controllerReadUser
};