import { MatSnackBar } from '@angular/material/snack-bar';
import { HostListener } from '@angular/core';
import { AppInjector } from '../../Injector/Injector/app-injectore';
import { BaseResult } from 'src/app/@AppService/models/common.model';
import { MessageType } from 'src/app/@AppService/Enums/common';

export abstract class BaseComponent {

  private snackBar: MatSnackBar;


  constructor() {
    const injector = AppInjector.getInjector();
    this.snackBar = injector.get(MatSnackBar);

    console.log(this.snackBar);

  }




  /////////////////////////////////////////////////////////////////////////////
  //////////// Toster

  showMessage(messageModel: BaseResult): void {
    this.showMessageWithType(messageModel.result, messageModel.message);
  }

  showMessageWithType(messageType: MessageType, message: string): void {
    if (messageType === MessageType.Success) {
      status = 'success';
      this.opensucssSnackBar(message);
    } else if (messageType === MessageType.Error) {
      status = 'danger';
      this.openerroSnackBar(message);
    }
  }



  private opensucssSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  private openerroSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }







}
