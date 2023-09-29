import validator from '../model/validator/userValidator';
import UserRepository from '../model/repositories/userRepository';

class GetOneUser{
    public getOneUser(name: string){
        const valid = validator.validateName(name);
        const userRepository = new UserRepository();
        if(valid){
            const data = userRepository.getOneUser(name);
            return {status: true, data};
        }
        return {status: false}
    }
}
export default GetOneUser;