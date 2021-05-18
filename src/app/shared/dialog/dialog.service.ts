import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogNotificationModel } from '../models/dialog-notification-model';
import { DialogNotificationComponent } from './dialog-notification/dialog-notification.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  public notification(params: DialogNotificationModel): Observable<boolean> {
    let dialogRef: MatDialogRef<DialogNotificationComponent>;
    let config = {
      width: '360px',
      maxWidth: '90vw',
      maxHeight: '480px',
      autoFocus: false,
    };

    dialogRef = this.dialog.open(DialogNotificationComponent, config);
    dialogRef.disableClose = params.disableClose;
    dialogRef.componentInstance.data = params;

    return dialogRef.afterClosed();
  }
}
