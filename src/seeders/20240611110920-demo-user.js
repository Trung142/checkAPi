'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Alphabets', [
        {
          alphabet: 'A',
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'B',
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'C',
          value: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'D',
          value: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'E',
          value: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'F',
          value: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'G',
          value: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'H',
          value: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'I',
          value: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'J',
          value: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'K',
          value: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'L',
          value: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'M',
          value: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'N',
          value: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'O',
          value: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'P',
          value: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'Q',
          value: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'R',
          value: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'S',
          value: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'T',
          value: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'U',
          value: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'V',
          value: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'W',
          value: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'X',
          value: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'Y',
          value: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          alphabet: 'Z',
          value: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
    await queryInterface.bulkDelete('Alphabets', null, {});
  }
};
