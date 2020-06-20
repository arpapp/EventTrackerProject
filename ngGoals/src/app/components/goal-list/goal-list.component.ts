import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/services/goal.service';
import { Router } from '@angular/router';
import { Goal } from 'src/app/models/goal';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  goals: Goal[] = [];

  selected = null;

  editGoal = null;

  constructor(
    private service: GoalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadGoals();
  }

  loadGoals(){
    console.log('in load goals');
    this.service.index().subscribe(
      yippee => {this.goals = yippee},
      err => {console.error('oopsie poopsie in load goals')}
    )
  }

  createGoal(form: NgForm){
    const newGoal: Goal = form.value;
    this.service.create(newGoal).subscribe(
      data => {
        console.log('create goal success');
        this.loadGoals();
      },
      err => {
        console.error('alert alert goal creation failure');
      }
    )
  }

  updateGoal(updateGoal){
    this.service.update(updateGoal).subscribe(
      data => {console.log('update success');
        this.loadGoals();
    },
    err => {
      console.error('update fucked in component')
    }
    )
    this.editGoal = null;
  }

  destroy(id: number){
    this.service.delete(id).subscribe(
      data =>{
        console.log('delte success');
        this.loadGoals();
      },
      err => {
        console.error('you activated my trap card');
      }
    )
    this.selected = null;
  }

  displayGoal(goal: Goal){
    this.selected = goal;
  }
  displayAllGoals(){
    this.selected = null;
  }

  setEditGoal(goal: Goal){
    this.editGoal = goal;
  }
}
