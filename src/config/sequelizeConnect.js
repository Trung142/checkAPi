const { Sequelize } = require('sequelize');// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
	"beebpobbvhjwfyhjmy1x",
	"ux2tiqpc65zlyljc",
	"g0tvvZbo0IETZN7sgJ2o",
	{
		host: "beebpobbvhjwfyhjmy1x-mysql.services.clever-cloud.com",
		dialect: "mysql",
		port: 3306,
	}
);
const connection = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = connection;