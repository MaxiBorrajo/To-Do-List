import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TASKS } from '../mock-task';
import { Task } from '../task';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private httpClient:HttpClient) {}
  private apiUrl = 'http://localhost:5000/tasks'
  getTasks():Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.apiUrl)
  }

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.httpClient.delete<Task>(url)
  }

  addTask(task:Task):Observable<Task>{
    return this.httpClient.post<Task>(this.apiUrl, task)
  }

  editTask(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.httpClient.put<Task>(url, task)
  }

}
