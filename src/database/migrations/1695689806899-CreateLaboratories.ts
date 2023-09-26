import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateLaboratories1695689806899 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'laboratories',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'type',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'number',
            type: 'int',
            isUnique: true,
          },
          {
            name: 'capacity',
            type: 'int',
            isUnique: true,
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'idResponsible',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'idResponsible',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['idResponsible'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('laboratories');
  }
}
