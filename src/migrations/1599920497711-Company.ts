import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Company1599920497711 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "companies",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                   name: "users",
                   type: "int[]"
                },
                {
                  name: "createdAt",
                  type: "timestamp without time zone",
                  default: "CURRENT_TIMESTAMP",
                },
                {
                  name: "updatedAt",
                  type: "timestamp without time zone",
                  default: "CURRENT_TIMESTAMP",
                  onUpdate: "CURRENT_TIMESTAMP",
                },
              ],
            }),
            true
          );
       /*   await queryRunner.createForeignKey(
            "companies",
            new TableForeignKey({
              columnNames: ["users"],
              referencedTableName: "users",
              referencedColumnNames: ["id"],
            })
          );  */ 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable(
        new Table({
          name: "companies",
        })
      );
    }

}
