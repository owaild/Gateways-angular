import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { themeModule } from 'src/app/@theme/theme.module';
import { GatewaysRoutingModule } from './gateways-routing.module';
import { GatewaysComponent } from './gateways.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddEditGatewaysComponent } from './add-edit-gateways/add-edit-gateways.component';
import { GatewaysListComponent } from './gateways-list/gateways-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { AddEditDeviceComponent } from './add-edit-device/add-edit-device.component';
import { CoreModule } from 'src/app/@core/core.module';

@NgModule({
  declarations: [
    GatewaysComponent,
    GatewaysListComponent,
    AddEditGatewaysComponent,
    AddEditDeviceComponent
  ],
  imports: [
    CommonModule,
    themeModule,
    MatInputModule,
    CoreModule,
    MatIconModule,
    MatSelectModule,
    GatewaysRoutingModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule
  ]
})
export class GatewaysModule { }
