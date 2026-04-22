import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true,   // ✅ VERY IMPORTANT
  imports: [FormsModule, CommonModule],
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
