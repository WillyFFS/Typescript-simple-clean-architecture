import express from "express";
import UserControl from "./control/UserControl";
import UserRepository from "../model/repositories/UserRepository";
import CreateUser from "../usecases/CreateUser";
import DeleteUser from "../usecases/DeleteUser";
import GetAllUser from "../usecases/GetAllUser";
import GetOneUser from "../usecases/GetOneUser";
import UpdateUser from "../usecases/UpdateUser";

const router = express.Router();

const userRepository = new UserRepository();
const createUser = new CreateUser(userRepository);
const deleteUser = new DeleteUser(userRepository);
const getAllUser = new GetAllUser(userRepository);
const getOneUser = new GetOneUser(userRepository);
const updateUser = new UpdateUser(userRepository);
const userControl = new UserControl(createUser, deleteUser, getAllUser, getOneUser, updateUser) ;

router.post("/",(req,res)=> { userControl.createUserControl(req,res) });
router.get("/",(req,res)=> { userControl.getAllUserControl(req,res) });
router.get("/:name",(req,res)=> { userControl.getOneUserControl(req,res) });
router.put("/:id",(req,res)=> { userControl.updateUserControl(req,res) });
router.delete("/:id",(req,res)=> { userControl.deleteUserControl(req,res) });


export default router;