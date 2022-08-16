import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/task';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task = TASKS[0];
  constructor(private renderer: Renderer2, private router:Router) { 
  }
  ngOnInit(): void {
  }
  faTrashCan = faTrashCan

  public isChecked = false;

  // @ViewChild('Task')
  // Task!: ElementRef;
  // @ViewChild('checkbox')
  // checkbox!: ElementRef;

  checked(){
    this.isChecked = !this.isChecked;
  }

  editTask(){
    this.router.navigate(['/editTask'])
  }

 }
