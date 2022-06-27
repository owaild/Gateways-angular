import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneColumnComponent } from './layouts/one-column/one-column.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OneColumnComponent,],
  exports: [OneColumnComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

  ]
})
export class themeModule { }
