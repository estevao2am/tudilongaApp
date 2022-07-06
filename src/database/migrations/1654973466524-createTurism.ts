import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTurism1654973466524 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "turism",
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
                name: "content",
                type: "varchar",
              },
    
              {
                name: "localizacao",
                type: "varchar",
              },
    
              {
                name: "url",
                type: "varchar",
                isUnique: true,
              },
    
            
    {
      name:"user_id",
      type:"uuid"
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
            foreignKeys: [
              {
                name: "fk_users_turism",
                columnNames: ["user_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
              },
             
            ],
    
            
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("turism");
      }
    }
    
