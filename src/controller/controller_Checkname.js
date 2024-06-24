const db = require("../models");

// Hàm truy vấn giá trị của một ký tự từ cơ sở dữ liệu
const getCharValue = async (char) => {
	let user = await db.Alphabet.findOne({
		where: {
			alphabet: char,
		},
		raw: true,
	});
	if (user) {
		return user;
	}
};
// Hàm tính toán giá trị cuối của một tên sử dụng dữ liệu từ cơ sở dữ liệu
let getvalueAlphabet = async (event) => {
	if (event) {
		let totalend = event.toString();
		let total = 0;
		for (let i = 0; i < totalend.length; i++) {
			total += +totalend[i];
		}
		if (total > 9) {
			let totalend = total.toString();
			return await getvalueAlphabet(totalend);
		} else {
			return total;
		}
	}
};

const listdata = async (str) => {
	let myarr = str.split(" ");
	let name = myarr.join("");
	let listData = [];
	let totalValue = 0;
	let count = 0;
	for (let i = 0; i < name.length; i++) {
		let char = name.charAt(i).toUpperCase();
		let user = await getCharValue(char);
		totalValue += user.value;
		count++;
		listData.push(user);
	}
	let totalend = await getvalueAlphabet(totalValue);
	let value = {
		data:listData,
		name: str,
		total: totalValue.toString(),
		totalend: totalend
	};
	return value;
};
const ValueFromDB = async (req, res) => {
	try {
		//let name = req.body.name;
		let str = req.body.name;
		if (str) {
			let message = await listdata(str);
			return res.status(200).json({
				errCode: 0,
				message: "ok",
				message
			});
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
	ValueFromDB,
};
