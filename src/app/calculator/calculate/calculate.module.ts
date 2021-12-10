import { CalculateComponent } from './calculate.component';
import { ResultComponent } from './../result/result.component';
import { ResultModule } from './../result/result.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    ResultModule
  ],
  exports:[
    ResultComponent
  ]
})
export class CalculateModule { }
