import UserRepository from '../model/repositories/UserRepository';
import User from '../entities/User';

class CreateUser{
    private userRepository : UserRepository;
    constructor(userRepository : UserRepository){
        this.userRepository = userRepository; 
    };
    public create(name: string, address: string){
        const newUser = new User(name,address);
        return this.userRepository.addUser(newUser); 
    }
}
export default CreateUser;
