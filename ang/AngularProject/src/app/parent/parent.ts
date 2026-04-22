import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, LowerCasePipe, CurrencyPipe, DatePipe, TitleCasePipe , SlicePipe, JsonPipe],
  templateUrl: './parent.html',
  styleUrls: ['./parent.css']
})
export class ParentComponent {

  act: boolean = true;
  inact: boolean = false;

  handleClass() {
    return {
      active: this.act,
      inactive: this.inact
    };
  }


  css = {
    'background-color': 'black',
    'color': 'red',
    'padding': '10px'
  };

 toggleCss() {
    this.css = {
      'background-color': this.css['background-color'] === 'black' ? 'violet' : 'black',
      'color': this.css['color'] === 'red' ? 'yellow' : 'red',
      'padding': '10px'
    };
  }
arr : string [] = ["Apple","Banana","Mango","Orange"];
  userType: string = "admin";


userName: string = 'Pritish';
date = new Date();
price: number = 100;

userObj = {
  name : "Pritish",
  age : 22,
  city : "Delhi",
  role : "admin"
};

numbers: number []=[1, 2 , 3 , 4 ,5 , 6];


}

