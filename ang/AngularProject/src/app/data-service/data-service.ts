import { Component } from '@angular/core';
import { Count } from '../service/count';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-service.html',
  styleUrl: './data-service.css',
})
export class DataService {
  constructor (public data:Count){

  }
}
