import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive.html',
  styleUrl: './reactive.css',
})
export class Reactive {

username = new FormControl('');
password = new FormControl('');

handleSubmit(){
  console.log("Username:", this.username.value);
  console.log("Password:",this.password.value);
}
}
