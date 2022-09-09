/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Mimi', pet_type_id: 2},
    {id: 2, name: 'Romad', pet_type_id: 2},
    {id: 3, name: 'Suki', pet_type_id: 3},
    {id: 4, name: 'Luigi', pet_type_id: 1},
  ]);
};
