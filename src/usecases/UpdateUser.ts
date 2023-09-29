import validator from '../model/validator/userValidator';
import UserRepository from '../model/repositories/userRepository';
import User from '../entities/user';

class UpdateUser{
    public updateUser(id: string, name: string, address: string){
        const validUser = validator.validateId(id);
        const validId = validator.validateUser(name,address);
        if(validUser.status && validId.status){
            const userRepository = new UserRepository();
            const newUser = new User(name,address);
            userRepository.updateUser(id,newUser);
            return {status: true};
        }
        if(!validId.status && validUser.status){
            return {status: false, message1: validUser.message, message2: validId.message};
        }
        else if(!validId.status){
            return validId;
        }
        else{
            return validUser;
        }

    }
}

export default UpdateUser;