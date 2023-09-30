import UserRepository from '../model/repositories/UserRepository';

class GetOneUser{
    private userRepository : UserRepository;
    constructor(userRepository : UserRepository){
        this.userRepository = userRepository; 
    };
    public getOneUser(name: string){
        return this.userRepository.getOneUser(name);
    }
}
export default GetOneUser;