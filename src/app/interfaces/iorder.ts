import { DatePipe } from "@angular/common";
import { IArticle } from "./iarticle";
import { IService } from "./iservice";

export interface IOrder {
    id?: number;
    userId: string;
    createdDate: Date;
    depositDate: Date;
    retrievalDate: Date;
    totalPrice: number;
    paymentType: string;
}