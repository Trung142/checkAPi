const db = require("../models");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
//urlread
const urlRead = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let user = await db.User.findAll({
                attributes: ['id', 'userName', 'email']
            });
            userData.errCode = 0;
            userData.errMessage = "ok";
            userData.User = user;
            resolve(userData);
        } catch (error) {
            reject(error);
        }
    });
};

// create
const urlcreate = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            if (!data.email || !data.password) {
                userData.errCode = 1;
                userData.errMessage = `not found !`;
                resolve(userData);
            } else {
                let isXit = await checkEmail(data.email);
                if (isXit) {
                    userData.errCode = 2;
                    userData.errMessage = `Email already exists! please create other email!`;
                    resolve(userData);
                } else {
                    let password = await Checkpassword(data.password);
                    let user = await db.User.create({
                        userName: data.name,
                        email: data.email,
                        password: password,
                        role: data.role
                    });
                    userData.errCode = 0;
                    userData.errMessage = "ok";
                    userData.User = user.id;
                    resolve(userData);
                }
            }
        } catch (error) {
            reject(error);
        }
    });
};
//check email
let checkEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    email: email,
                },
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};
// hashpassword
let Checkpassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(password, salt);
            if (hash) {
                resolve(hash);
            }
        } catch (error) {
            reject(error);
        }
    });
};
//check ROLE
//update product
const ulrupdate_User = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listData = {};
            let id = await db.User.findOne({
                where: {
                    id: +data.query.id,
                },
            });
            if (id) {
                    let checkpassword = await Checkpassword(data.body.password);
                    await db.User.update(
                        {
                            userName: data.body.name,
                            email: data.body.email,
                            password: data.body.password ? checkpassword : id.password
                        },
                        {
                            where: {
                                id: +data.query.id,
                            },
                        }
                    );
                    listData.errCode = 0;
                    listData.Message = "update avata succsse !";
                    resolve(listData);
            } else {
                listData.errCode = 1;
                listData.errMessage = "not id! please input other id!!";
                resolve(listData);
            }
        } catch (error) {
            reject(error);
        }
    });
};
//upload imager
//delete file
//delete
const checkid = (userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: +userid
                }
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};
const urlDelete = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listData = {};
            if (!data.query.id) {
                userData.errCode = 1;
                userData.errMessage = `not found!`;
                resolve(userData);
            }else{
                let check = await checkid(data.query.id);
                if (!check) {
                    userData.errCode = 2;
                    userData.errMessage = `you can not delete user admin! Go Out..!`;
                    resolve(userData);
                } else {
                    const user = await db.User.destroy({
                        where: {
                            id: +data.query.id,
                        },
                    });
                    listData.errCode = 0;
                    listData.errMessage = "delete success!";
                    listData.User = user;
                    resolve(listData);
                }
            }
                
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {
    urlcreate,
    urlRead,
    ulrupdate_User,
    urlDelete,
};
