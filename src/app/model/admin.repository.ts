import { Observable } from 'rxjs';
import { Book } from './book.model';
import { RestDataSource } from './rest.datasource';
import { Injectable } from "@angular/core";
import { Admin } from './admin.model';


@Injectable()
export class AdminRepository{

    // private books: Book[] = [];

    constructor(private dataSource: RestDataSource){}

    saveBook(book: Admin): Observable<Admin>{
        return this.dataSource.saveBook(book);
    }
}