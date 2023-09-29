import validator from '../model/validator/userValidator';
import UserRepository from '../model/repositories/userRepository';
import User from '../entities/user';

class CreateUser{
    public create(name: string, address: string){
        const valid = validator.validateUser(name,address);
        if(valid.status){
            const userRepository = new UserRepository();
            const newUser = new User(name,address);
            userRepository.addUser(newUser);
        }
        return valid;
    }
}
export default CreateUser;
