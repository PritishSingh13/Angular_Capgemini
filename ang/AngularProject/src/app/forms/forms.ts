import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform';
import { Reactive } from './reactive/reactive';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, CommonModule,TemplatedrivenformComponent,Reactive],
  templateUrl: './forms.html',
  styleUrls: ['./forms.css']
})
export class FormsComponent {

  val: string = '';

  handleChange() {
    console.log("value changed");
    console.log(this.val);
  }

}
