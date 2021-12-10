import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {

  calculateNumbers:string = "";

  dis(val:string) {

    this.calculateNumbers+= val;
    console.log(this.calculateNumbers);

  }

  result = () => {
    let targetResult:string = this.calculateNumbers;
    let solved:number = eval(targetResult);
    this.calculateNumbers = solved.toFixed(2).toString();
  }

  clear = ()  => {
    this.calculateNumbers = "";
  }

}
