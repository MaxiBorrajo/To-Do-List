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

}
