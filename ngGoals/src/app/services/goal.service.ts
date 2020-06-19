import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/goals';

  constructor() { }

  //todo get post put delete
}
