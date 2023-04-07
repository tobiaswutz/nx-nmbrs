import { Injectable } from '@nestjs/common';
import mysql from 'mysql2/promise';

@Injectable()
export class DatabaseService {
  private connection: mysql.Connection;

  async connect(): Promise<void> {
    this.connection = await mysql.createConnection(process.env.DATABASE_URL);
  }

  async execute(
    query: string,
    params?: any[] | Record<string, any>
  ): Promise<any> {
    if (!this.connection) {
      await this.connect();
    }
    const [rows, fields] = await this.connection.execute(query, params);
    console.log('rows', rows);
    return rows;
  }
}
