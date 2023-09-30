import UserRepository from '../model/repositories/UserRepository';
import User from '../entities/User';

class UpdateUser{
    private userRepository : UserRepository;
    constructor(userRepository : UserRepository){
        this.userRepository = userRepository; 
    };
    public updateUser(id: string, name: string, address: string){
        const newUser = new User(name,address);
        return this.userRepository.updateUser(id,newUser);

    }
}

export default UpdateUser;