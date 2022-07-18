import { IReimbrusement } from "./IReimbursement";
import { IUserRole } from "./IUserRole";

export interface IUser{
    userId?: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    userPair_role?: IUserRole
}