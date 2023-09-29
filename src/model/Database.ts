import { Collection, Db, MongoClient } from 'mongodb';
import User from "../entities/user";

class Database {
    private static instance: Database;
    private url: string = 'mongodb://127.0.0.1:27017/userDB';
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
    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
export default Database;
