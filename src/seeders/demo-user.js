"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Users",
            [
                {
                    userName: "Admin",
                    email: 'admin@gmail.com',
                    password: "admin123",
                    role:'R1'
                }
            ],{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 *
		 */
		await queryInterface.bulkDelete("Users", null, {});
	},
};
