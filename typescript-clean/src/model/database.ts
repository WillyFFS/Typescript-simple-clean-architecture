import { Collection, Db, MongoClient } from 'mongodb';
import User from './instance/user';

export default class Database {
  private url: string = 'mongodb://127.0.0.1:27017/userDB';
  private dbName: string = 'Users';
  public db!: Db;
  private client: MongoClient;
  public collection!: Collection<User>;

  private constructor() {
    this.client = new MongoClient(this.url);
  }

  public async connected() {
    if (!this.collection) {
      try {
        await this.client.connect();
        this.db = this.client.db();
        this.collection = this.db.collection<User>("Users");
        console.log("Connected to MongoDB");
      } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
      }
    }

    
  }
}

