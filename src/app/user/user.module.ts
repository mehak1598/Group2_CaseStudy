import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { ModelModule } from './../model/model.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [UserComponent],
    imports: [
      CommonModule,
      ModelModule,
      RouterModule,
      FormsModule
    ],
    exports:[UserComponent]
  })
  export class UserModule { }