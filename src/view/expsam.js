
const mysql = require('mysql');
// Tạo kết nối đến cơ sở dữ liệu
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

// Kết nối đến cơ sở dữ liệu
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});

// Hàm tính toán giá trị cuối của một tên
function calculateNameValue(name) {
    let totalValue = 0;
    for (let i = 0; i < name.length; i++) {
        let char = name.charAt(i).toUpperCase();
        totalValue += char.charCodeAt(0) - 64; // Chuyển ký tự thành giá trị số dựa trên bảng mã ASCII
    }
    return totalValue;
}

// Hàm truy vấn giá trị của một ký tự từ cơ sở dữ liệu
function getCharValue(char, callback) {
    connection.query('SELECT value FROM letters WHERE letter = ?', [char], (error, results, fields) => {
        if (error) {
            return callback(error, null);
        }
        if (results.length > 0) {
            callback(null, results[0].value);
        } else {
            callback(null, 0); // Trả về 0 nếu không tìm thấy ký tự
        }
    });
}

// Hàm tính toán giá trị cuối của một tên sử dụng dữ liệu từ cơ sở dữ liệu
function calculateNameValueFromDB(name, callback) {
    let totalValue = 0;
    let count = 0;
    for (let i = 0; i < name.length; i++) {
        let char = name.charAt(i).toUpperCase();
        getCharValue(char, (error, value) => {
            if (error) {
                return callback(error, null);
            }
            totalValue += value;
            count++;
            if (count === name.length) {
                callback(null, totalValue);
            }
        });
    }
}

// Sử dụng hàm tính toán giá trị cuối của một tên
const name = 'Phạm Nhật Vượng';
calculateNameValueFromDB(name, (error, value) => {
    if (error) {
        console.error('Error calculating name value: ' + error);
        return;
    }
    console.log('Total value of name ' + name + ': ' + value);
});

// Đóng kết nối đến cơ sở dữ liệu sau khi sử dụng xong
connection.end();