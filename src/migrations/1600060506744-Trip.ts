import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Trip1600060506744 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "trips",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "startDate",
            type: "date",
          },
          {
            name: "endDate",
            type: "date",
          },
          {
            name: "userIds",
            type: "int[]",
          },
          {
            name: "flightIds",
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
        name: "trips",
      })
    );
  }
}
