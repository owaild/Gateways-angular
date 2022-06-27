import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GatewaysService } from 'src/app/@AppService/services/gateways.service';
import { BaseComponent } from 'src/app/@core/Component/base-component/BaseComponent';
import { AddEditGatewaysComponent } from '../add-edit-gateways/add-edit-gateways.component';

@Component({
  selector: 'app-add-edit-device',
  templateUrl: './add-edit-device.component.html',
  styleUrls: ['./add-edit-device.component.scss']
})
export class AddEditDeviceComponent extends BaseComponent implements OnInit {
  GateForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public Gateways: GatewaysService,
    public dialogRef: MatDialogRef<AddEditGatewaysComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { super(); }

  ngOnInit(): void {
    this.buildForm()

  }
  get fc() {
    return this.GateForm.controls;
  }
  buildForm() {
    this.GateForm = this.formBuilder.group({
      vendor: [
        '',
        Validators.required
      ],
      status: ['', Validators.required],

    });
  }

  GateFormSubmit() {
    if (this.GateForm.valid) {

      this.Gateways.postDevice(this.data.id, this.GateForm.value).subscribe(res => {
        if (res) {
          this.dialogRef.close('done');
          this.showMessage({
            result: 1,
            message: 'Device was add successfully',
          });
        }
      }, err => {
        console.log(err);
        this.showMessage({
          result: 0,
          message: err.message,
        });
      })

    } else {
      this.GateForm.markAllAsTouched()

    }
  }


  cancelModel() {
    this.dialogRef.close();
  }
}