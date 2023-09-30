import UserRepository from '../model/repositories/UserRepository';

class DeleteUser {
    private userRepository : UserRepository;
    constructor(userRepository : UserRepository){
        this.userRepository = userRepository; 
    };
    public delete(id: string){
        return this.userRepository.deleteUser(id);
    }
}
export default  DeleteUser;