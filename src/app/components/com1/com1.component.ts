import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.css']
})
export class Com1Component implements OnInit {
  @Input() count =0
  @Output() change = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.change.emit(Date.now())
    }, 1000)
  }

}
