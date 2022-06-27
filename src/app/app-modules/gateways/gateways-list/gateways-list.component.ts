import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AddEditGatewaysComponent } from '../add-edit-gateways/add-edit-gateways.component';
import { MatDialog } from '@angular/material/dialog';
import { GatewaysService } from 'src/app/@AppService/services/gateways.service';
import { AddEditDeviceComponent } from '../add-edit-device/add-edit-device.component';
import { BaseComponent } from 'src/app/@core/Component/base-component/BaseComponent';
import { PeriodicElement } from 'src/app/@AppService/models/gateways.model';
import { ConfirmActionComponent } from 'src/app/@core/Component/confirm-action/confirm-action.component';

@Component({
  selector: 'app-gateways-list',
  templateUrl: './gateways-list.component.html',
  styleUrls: ['./gateways-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class GatewaysListComponent extends BaseComponent implements OnInit {

  columnsToDisplay = ['serialnumber', 'humanName', 'IPv4', "length", "expand"];
  expandedElement!: PeriodicElement | null;
  constructor(public dialog: MatDialog,
    public Gateways: GatewaysService,
  ) { super() }
  dataSource!: PeriodicElement[]
  ngOnInit(): void {
    this.getGateway()
  }
  getGateway() {
    this.Gateways.getGateway().subscribe(res => {
      console.log(res);
      this.dataSource = res
    }, err => {
      this.showMessage({
        result: 0,
        message: err.message,
      });
    })
  }

  openAddGateways() {
    const dialogRef = this.dialog.open(AddEditGatewaysComponent, {
      width: '440px',

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == "done") {
        this.getGateway()
      }
    });
  }

  openAddDevice(data: PeriodicElement) {

    const dialogRef = this.dialog.open(AddEditDeviceComponent, {
      width: '440px',
      data: { ...data }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == "done") {
        this.getGateway()
      }
    });
  }
  OpenEditGateways(data: PeriodicElement) {
    const dialogRef = this.dialog.open(AddEditGatewaysComponent, {
      width: '440px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == "done") {
        this.getGateway()
      }
    });
  }


  OpenDeleteGateways(data: PeriodicElement) {
    const dialogRef = this.dialog.open(ConfirmActionComponent);
    dialogRef.afterClosed().subscribe(result => {

      if (result == "Confirm") {

        this.Gateways.deleteGateway(data.id).subscribe(res => {
          this.getGateway()

        }, err => {
          console.log(err);
          this.showMessage({
            result: 0,
            message: err.message,
          });
        })
      }
    });
  }


  OpenDeleteDeviceGateways(id: string, deviceId: string) {
    const dialogRef = this.dialog.open(ConfirmActionComponent);
    dialogRef.afterClosed().subscribe(result => {

      if (result == "Confirm") {

        this.Gateways.deleteDeviceGateway(id, deviceId).subscribe(res => {
          this.getGateway()

        }, err => {
          console.log(err);
          this.showMessage({
            result: 2,
            message: err.message,
          });
        })
      }
    });
  }






}
