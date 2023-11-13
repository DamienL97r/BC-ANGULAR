import { DatePipe } from "@angular/common";
import { IArticle } from "./iarticle";
import { IService } from "./iservice";
import { IUser } from "./iuser";

export interface IOrder {
    id?: number;
    userId: any;
    createdDate: Date;
    depositDate: Date;
    retrievalDate: Date;
    totalPrice: number;
    paymentType: string;
}