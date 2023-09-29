import UserRepository from '../model/repositories/userRepository';

class GetAllUser{
    public getAll(){
        const userRepository = new UserRepository();
        const data = userRepository.getAllUser();
        return {status: true, data};
    }
}
export default GetAllUser;