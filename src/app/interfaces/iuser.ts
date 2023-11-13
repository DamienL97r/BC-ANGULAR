import { IOrder } from "./iorder";

export interface IUser {
    id?:number;
    email: string;
    firstname:string;
    lastname:string;
    birthdate?: Date;
    gender:string;
    adresse:string;
    username:string;
    password?:string;
    plainPassword?:string;
    roles:string;
    orders?: IOrder[];
}

export interface ICredentials{
    username:string,
    password:string
}

export interface IToken {
    token : string;
}