import { Book } from './book.model';
import { Injectable } from "@angular/core";

@Injectable()
export class Admin{

    public id:number;
    public title: string;
    public author: string;
    public price: number;
    public noInStock: number;
    public stopOrder: number;
    public reorderingThreshold: number;
    
    constructor(public book:Book){

    }
    
}