import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-templatedrivenform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './templatedrivenform.html',
  styleUrls: ['./templatedrivenform.css']
})
export class TemplatedrivenformComponent {

  username: string = '';
  password: string = '';

  handleSubmit(form: NgForm) {
    console.log("Form Submitted");
    console.log(form.value);
  }

}
