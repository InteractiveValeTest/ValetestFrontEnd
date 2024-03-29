import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookAndFeelRoutingModule } from './look-and-feel-routing.module';
import { SystemDesignComponent } from './system-design/system-design.component';


@NgModule({
  declarations: [
    SystemDesignComponent
  ],
  imports: [
    CommonModule,
    LookAndFeelRoutingModule
  ]
})
export class LookAndFeelModule { }
