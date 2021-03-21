import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monaco-tombola';
  numeroEstratto: number;
  addNum(num: HTMLInputElement): boolean {
    console.log(num.value);
    return false;
  }
}
