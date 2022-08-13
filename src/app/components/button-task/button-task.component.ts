import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-button-task',
  templateUrl: './button-task.component.html',
  styleUrls: ['./button-task.component.css']
})
export class ButtonTaskComponent implements OnInit {
  @Input() textAdd:string = "";
  @Input() colorAdd:string = "";
  @Output() btnClick = new EventEmitter

  faPlus = faPlus

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnClick.emit();
  }
}


