import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component'; // Correct import path

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  constructor(){
    setTimeout(()=>{
      this.title = "Changed title"
    },2000);
  }
}
