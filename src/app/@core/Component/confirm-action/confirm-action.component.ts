import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseResult } from 'src/app/@AppService/models/common.model';

@Component({
  templateUrl: './confirm-action.component.html',
  styleUrls: ['./confirm-action.component.scss'],
})
export class ConfirmActionComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmActionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() { }

  canecl(): void {
    this.dialogRef.close();
  }
  Confirm(): void {
    this.dialogRef.close('Confirm');
  }
}
