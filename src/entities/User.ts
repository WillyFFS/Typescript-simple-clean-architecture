class User{
    private name: string;
    private address: string
    
    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    };

    getName(){
        return this.name;
    };

    getAddress(){
        return this.address;
    }

    setName(name: string){
        this.name = name;
    }

    setAddress(address: string){
        this.address = address;
    }
}
export default User;
