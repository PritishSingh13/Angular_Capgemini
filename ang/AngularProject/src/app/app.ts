import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent';
import { FormsComponent } from './forms/forms';
import { DataService } from './data-service/data-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, FormsComponent, DataService],
  template: `
    <app-parent></app-parent>
    <hr>
    <app-forms></app-forms>
    <hr>
    <app-data-service></app-data-service>
  `
})
export class AppComponent {}
