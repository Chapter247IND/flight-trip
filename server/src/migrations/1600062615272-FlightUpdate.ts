import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class FlightUpdate1600062615272 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "flightupdates",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "created",
            type: "date",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "message",
            type: "varchar",
          },
          {
            name: "flight",
            type: "int",
          },
        ],
      }),
      true
    );
    await queryRunner.createForeignKey(
        "flightupdates",
        new TableForeignKey({
          columnNames: ["flight"],
          referencedTableName: "flights",
          referencedColumnNames: ["id"],
        })
      );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(
        new Table({
          name: "flightupdates",
        })
      );
  }
}
