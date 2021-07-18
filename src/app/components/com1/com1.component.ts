import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.css']
})
export class Com1Component implements OnInit {
  @Input() count =0
  constructor() { }

  ngOnInit(): void {
  }

}
