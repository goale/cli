import { QueryInterface } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export async function up(query: QueryInterface) {
    /*
      Add altering commands here.

      Example:
      await query.createTable('users', { id: DataType.INTEGER });
      console.log('Table users created!');
    */
}

export async function down(query: QueryInterface) {
    /*
      Add reverting commands here.

      Example:
      await query.dropTable('users');
      console.log('Table users dropped!');
    */
}