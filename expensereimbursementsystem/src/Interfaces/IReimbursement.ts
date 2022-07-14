import { IReimbrusementType } from "./IReimbursementType";
import { IReimbrusementStatus } from "./IReimbursemnetStatus";
import { IUser } from "./IUser";

export interface IReimbrusement{
    reimbursementId?: number,
    userPair: IUser,
    amount: number,
    description: string,
    submittedDate: string,
    reimbursement_status?: IReimbrusementStatus
    reimbursement_type?: IReimbrusementType,
    resolvedDate?:string,
    userResolver_ticket?: IUser
    
}
