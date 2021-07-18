import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aslam';
  version = 0;
  isProduct = false;
  account = {username: "admin", password: "1234"}

  getReturn(){
    return "A";
  }
  onClick(){
    this.version++;
  }




}
