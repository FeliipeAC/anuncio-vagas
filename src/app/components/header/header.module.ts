import { RouterModule } from '@angular/router';
import { MaterialDesignModule } from './../../shared/material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MaterialDesignModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
