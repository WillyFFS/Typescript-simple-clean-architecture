import CreateUser from "../../usecases/CreateUser";
import DeleteUser from "../../usecases/DeleteUser";
import GetAllUser from "../../usecases/GetAllUser";
import GetOneUser from "../../usecases/GetOneUser";
import UpdateUser from "../../usecases/UpdateUser";
import validator from "../../model/validator/userValidator";
import { Request, Response } from "express";

class UserControl {
    private createUser : CreateUser;
    private deleteUser : DeleteUser;
    private getAllUser : GetAllUser;
    private getOneUser: GetOneUser;
    private updateUser : UpdateUser;

    constructor(
        createUser : CreateUser, 
        deleteUser : DeleteUser,
        getAllUser : GetAllUser,
        getOneUser: GetOneUser,
        updateUser : UpdateUser,
        ){
            this.createUser = createUser;
            this.deleteUser = deleteUser;
            this.getAllUser =getAllUser;
            this.getOneUser = getOneUser;
            this.updateUser = updateUser; 
    }

    public createUserControl (req: Request, res: Response) {
        try{
            const { name, address } = req.body;
            const valid = validator.validateUser(name,address);
            if(!valid.status){
                res.status(400).json(valid);
            }
            const data = this.createUser.create(name, address);
            const response = {
                status: valid.status,
                data : data
            }
            res.status(200).json(response);
        } catch(error){
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    public deleteUserControl(req: Request, res:Response){
        try{
            const { id } = req.params;
            const valid = validator.validateId(id);
            if(!valid.status){
                res.status(400).json(valid);
            }
            const data = this.deleteUser.delete(id);
            const response = {
                status: valid.status,
                data : data
            }
            res.status(200).json(response);
        } catch(error){
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    public getAllUserControl(req: Request, res:Response){
        try{
            const data = this.getAllUser.getAll();
            const response = {
                data : data
            }
            res.status(200).json(response);
        } catch(error){
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    public getOneUserControl(req: Request, res: Response){try{
        const { name } = req.params;
        const valid = validator.validateName(name);
        if(!valid.status){
            res.status(400).json(valid);
        }
        const data = this.getOneUser.getOneUser(name);
        const response = {
            status: valid.status,
            data : data
        }
        res.status(200).json(response);
    } catch(error){
        res.status(500).json({ error: "Internal Server Error" });
    }}

    public updateUserControl(req: Request, res: Response){
        try{
            const { id } = req.params;
            const valid = validator.validateId(id);
            const { name, address } = req.body;
            const validUser = validator.validateUser(name,address);
            if(!valid.status ){
                res.status(400).json(valid);
            }
            else if(!validUser.status){
                res.status(400).json(validUser);
            }
            const exist = this.getOneUser.getOneUser(id);
            const data = this.updateUser.updateUser(id,name,address);
            if(data == null || data == undefined){
                res.status(400).json("user not found");
            }
            const response = {
                status: valid.status,
                data : data
            }
            res.status(200).json(response);
        } catch(error){
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
export default UserControl;