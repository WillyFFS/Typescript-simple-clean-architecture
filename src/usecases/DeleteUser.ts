import validator from '../model/validator/userValidator';
import UserRepository from '../model/repositories/userRepository';

class DeleteUser {
    public delete(id: string){
        const valid = validator.validateId(id);
        if(valid.status){
            const userRepository = new UserRepository();
            userRepository.deleteUser(id);
        }
        return valid;
    }
}
export default  DeleteUser;