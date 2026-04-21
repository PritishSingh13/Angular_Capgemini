import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule],
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
}
