import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../services/database/database.service';

@Injectable()
export class AppService {
  constructor(private databaseService: DatabaseService) {}

  async getData(): Promise<{ message: string }> {
    const query = 'SELECT * FROM weapons';
    const results = await this.databaseService.execute(query);
    return results;
  }
}
