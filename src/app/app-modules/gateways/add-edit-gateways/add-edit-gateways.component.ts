import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GatewaysService } from 'src/app/@AppService/services/gateways.service';
import { BaseComponent } from 'src/app/@core/Component/base-component/BaseComponent';

@Component({
  selector: 'app-add-edit-gateways',
  templateUrl: './add-edit-gateways.component.html',
  styleUrls: ['./add-edit-gateways.component.scss']
})
export class AddEditGatewaysComponent extends BaseComponent implements OnInit {
  GateForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public Gateways: GatewaysService,
    public dialogRef: MatDialogRef<AddEditGatewaysComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { super() }

  ngOnInit(): void {
    this.buildForm()
    if (this.data) {
      this.GateForm.patchValue({
        serialNumber: this.data.serialNumber,
        humanName: this.data.humanName,
        IPv: this.data.IPv
      })
    }
  }
  get fc() {
    return this.GateForm.controls;
  }
  buildForm() {
    this.GateForm = this.formBuilder.group({
      serialNumber: [
        '',
        Validators.required
      ],
      humanName: ['', Validators.required],
      IPv: [''],
    });
  }

  GateFormSubmit() {
    if (this.GateForm.valid) {
      if (!this.data) {

        this.Gateways.postGateway(this.GateForm.value).subscribe(res => {
          if (res) {
            this.showMessage({
              result: 1,
              message: 'gateways was add successfully',
            });
            this.dialogRef.close('done');
          }
        }, err => {
          console.log(err);
          this.showMessage({
            result: 0,
            message: err.message,
          });
        })
      } else {
        this.Gateways.editGateway(this.data.id, this.GateForm.value).subscribe(res => {
          if (res) {
            this.dialogRef.close('done');
            this.showMessage({
              result: 1,
              message: 'Device was edit successfully',
            });
          }
        }, err => {
          console.log(err);
          this.showMessage({
            result: 0,
            message: err.message,
          });
        })
      }
    } else {
      this.GateForm.markAllAsTouched()
    }
  }


  cancelModel() {
    this.dialogRef.close();
  }


}
