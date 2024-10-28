import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularProject';
  a = 10;
  b = 5;
  ans = this.a + this.b;

  imgSrc = '/assets/Fink_Profile.png'
  display(msg:string){
    alert(msg)
  }

  isShift(event:any){
    if (event.shiftKey && event.key === 'Y'){
      console.log("Shift + Y is pressed", event);
    }
  }

  inputVal:string = '';
  dynamicVal:string = '';
  show(){
    this.dynamicVal = this.inputVal;
  }

  count = 0;
  counter(type:string){
    type==='incr'? this.count++ : this.count--;
  }

  displayElement:boolean = false;
  showNgIf(){
    this.displayElement = !this.displayElement;
  }

  listItems = [{
    name : 'Alex',
    age : 23
  },
  {
    name : 'Mike',
    age : 24 
  },
  {
    name : 'Paul',
    age : 25 
  },
  {
    name : 'Jack',
    age : 23 
  },
  ]
}
