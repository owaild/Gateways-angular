import { HttpClient } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmActionComponent } from './Component/confirm-action/confirm-action.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonModule
  ],

  entryComponents: [
    ConfirmActionComponent
  ],
  declarations: [
    ConfirmActionComponent
  ],
  exports: [],

})
export class CoreModule {
  constructor() { }
}
