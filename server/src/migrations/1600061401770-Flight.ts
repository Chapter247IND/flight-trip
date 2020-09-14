import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Flight1600061401770 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "flights",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "flightName",
            type: "varchar",
          },
          {
            name: "carrier",
            type: "varchar",
          },
          {
            name: "users",
            type: "int[]",
          },
          {
            name: "trips",
            type: "int[]",
          },
          {
            name: "updates",
            type: "int[]",
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(
        new Table({
          name: "flights",
        })
      );
  }
}
