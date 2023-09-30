import UserRepository from '../model/repositories/UserRepository';

class GetAllUser{
    private userRepository : UserRepository;
    constructor(userRepository : UserRepository){
        this.userRepository = userRepository; 
    };
    public getAll(){
        return this.userRepository.getAllUser();
    }
}
export default GetAllUser;