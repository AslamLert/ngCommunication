import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrls: ['./com2.component.css']
})
export class Com2Component implements OnInit {
  @Input("count2") count = 0;
  @Output("reset2") reset = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }

  onClickReset(){
    this.reset.emit();
  }

}
