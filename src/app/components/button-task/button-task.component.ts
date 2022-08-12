import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-task',
  templateUrl: './button-task.component.html',
  styleUrls: ['./button-task.component.css']
})
export class ButtonTaskComponent implements OnInit {
  @Input() text:string = "";
  @Input() color:string = "";
  @Output() btnClick = new EventEmitter


  constructor() { }

  ngOnInit(): void {
  }
 onClick(){
  this.btnClick.emit();
 }
}


