import { IUser } from "./IUser";

export interface IReimbrusement{
    reimbursementId?: number,
    employeeId: number,
    amount: number,
    description: string,
    submittedDate: Date,
    status: number,
    type: number,
    managerId?: number,
    resolvedDate?: Date
}
