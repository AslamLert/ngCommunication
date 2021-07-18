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
  time1 =0

  getReturn(){
    return "A";
  }
  onClick(){
    this.version++;
  }

  onChange1(event : number){
    this.time1 = event
  }

  onResetVersion(){
    this.version=0
  }




}
