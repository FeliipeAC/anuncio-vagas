import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogNotificationModel } from '../../models/dialog-notification-model';

@Component({
  selector: 'app-dialog-notification',
  templateUrl: './dialog-notification.component.html',
  styleUrls: ['./dialog-notification.component.scss'],
})
export class DialogNotificationComponent implements OnInit {
  data!: DialogNotificationModel;

  constructor(private dialogRef: MatDialogRef<DialogNotificationComponent>) {}

  ngOnInit(): void {}

  close(param?: boolean): void {
    this.dialogRef.close(param);
  }
}
