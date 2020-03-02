import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { BooksRepository } from './books.repository';
import { UserRepository } from './user.repository';

@NgModule({
    providers: [BooksRepository,RestDataSource,UserRepository],
    imports: [HttpClientModule]
})
export class ModelModule{

}