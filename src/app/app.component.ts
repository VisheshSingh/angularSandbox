import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ['jared', 'jane', 'nathan'];
  title = 'app';
  name:string = '';

  eventFromOuter(passed:string){
    this.name = passed;
  }
}
