import { MaterialDesignModule } from './../material-design/material-design.module';
import { DialogService } from './dialog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogNotificationComponent } from './dialog-notification/dialog-notification.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [DialogNotificationComponent],
  imports: [CommonModule, MaterialDesignModule, FlexLayoutModule],
  providers: [DialogService],
  exports: [DialogNotificationComponent],
})
export class DialogModule {}
