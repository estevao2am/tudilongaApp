import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1655879278667 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "users",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true,
              },
              {
                name: "name",
                type: "varchar",
              },
              {
                name: "username",
                type: "varchar",
                isUnique:true
              },
    
              {
                name: "email",
                type: "varchar",
                isUnique:true
              },
              {
                name: "password",
                type: "varchar",
              },
              {
                name: "data_nascimento",
                type: "varchar",
              },
              {
                name: "provincia",
                type: "varchar",
              },
              {
                name: "bairro",
                type: "varchar",
              },
              {
                name: "phone",
                type: "int",
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "now()",
              },
    
              {
                name: "update_at",
                type: "timestamp",
                default: "now()",
              },
    
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
      }
    }
    