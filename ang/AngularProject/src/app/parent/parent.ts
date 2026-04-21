// // import { Component } from '@angular/core';
// // import { ChildComponent } from '../child/child';
// // import { CommonModule } from '@angular/common';

// // @Component({
// //   selector: 'app-parent',
// //   standalone: true,
// //   imports: [ChildComponent, CommonModule],
// //   templateUrl: './parent.html'
// // })
// // export class ParentComponent {

// //   messageToChild = "Hello Child";

// //   receivedArray: string[] = [];

// //   getDataFromChild(data: string[]) {
// //     this.receivedArray = data;
// //   }
// // }
// import { Component } from '@angular/core';
// import { ChildComponent } from '../child/child';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-parent',
//   standalone: true,
//   imports: [ChildComponent, CommonModule],
//   templateUrl: './parent.html',
//   styleUrls: ['./parent.css']
// })
// export class ParentComponent {

//   messageToChild = "Hello Child";

//   receivedArray: string[] = [];

//   isActive = false;

//   getDataFromChild(data: string[]) {
//     this.receivedArray = data;
//   }

//   toggleClass() {
//     this.isActive = !this.isActive;  // toggle true/false
//   }
// }
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
}
