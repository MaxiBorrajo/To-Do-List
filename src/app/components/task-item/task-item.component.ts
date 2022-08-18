import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/task';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task = TASKS[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  constructor(private renderer: Renderer2, private router:Router, private taskService: TaskService) { 
  }
  ngOnInit(): void {
  }
  faTrashCan = faTrashCan
  faPenToSquare = faPenToSquare
  // @ViewChild('Task')
  // Task!: ElementRef;
  // @ViewChild('checkbox')
  // checkbox!: ElementRef;

  isChecked:boolean = false;
  
  checked(){
    // let Task:Task = {
    //   id: task.id,
    //   title:task.title,
    //   text: task.text,
    //   day: task.day,
    //   time: task.time,
    //   reminder: task.reminder,
    //   completed: !task.completed
    // };
    this.isChecked = !this.isChecked;
  }

  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }

 }
