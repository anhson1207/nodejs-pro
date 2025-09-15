import {Request,Response} from "express";
import { getAllUsers, handleCreateUser } from "services/user.services";
import { get } from "http";

const getHomePage = async (req: Request, res: Response) => {
    const users=await getAllUsers();
    console.log(users);
   return res.render("home.ejs",{
    users:users
   });
};
const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user.ejs");
};
const postCreateUser = async(req: Request, res: Response) => {
    const {fullName,email,address}=req.body;
    await handleCreateUser(fullName,email,address);
    return res.redirect("/");
};
export { getHomePage, getCreateUserPage,postCreateUser };