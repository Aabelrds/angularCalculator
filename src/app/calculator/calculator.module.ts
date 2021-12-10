import { ResultModule } from './result/result.module';
import { CalculateModule } from './calculate/calculate.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateComponent } from './calculate/calculate.component';



@NgModule({
  declarations: [
    CalculateComponent,
  ],
  imports: [
    CommonModule,
    CalculateModule,
  ],
  exports:[
    CalculateComponent
  ]
})
export class CalculatorModule { }
