import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { BooksRepository } from './books.repository';

@NgModule({
    providers: [BooksRepository,RestDataSource],
    imports: [HttpClientModule]
})
export class ModelModule{

}