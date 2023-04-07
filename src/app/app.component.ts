import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textInput:any=""
  todoList=[{"id":1,"task":"Sample Task"}]
   change(value:any) {
     this.textInput = value
  }
  update() {
    this.todoList.push({"id":this.todoList.length+1,"task":this.textInput})
    this.textInput = ""
  }
  modifyList(id:any){
      this.todoList.splice(id-1,1)
  }
}
