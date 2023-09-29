import user from '../../entities/user';
import Database from '../Database';
import {ObjectId} from 'mongodb';

class UserRepository{
    private db: Database;

    constructor(){
        this.db = Database.getInstance();
    }
    public getAllUser(){
        return this.db.collection.find().toArray();
    };

    public getOneUser(name: string){
        return this.db.collection.find({name: name});
    };

    public addUser(user: user){
        return this.db.collection.insertOne(user);
    };

    public deleteUser(id : string){
        return this.db.collection.findOneAndDelete({_id : new ObjectId(id)});
    };

    public updateUser(id: string, user: user){
        return this.db.collection.updateOne(
            {_id : new ObjectId(id)},
            {$set : user});
    };
}

export default UserRepository;