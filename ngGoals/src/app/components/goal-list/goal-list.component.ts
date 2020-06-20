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
  goalsAchieved: Goal[] = [];

  selected = null;

  editGoal = null;

  total = null;

  totalAchieved = null;

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
      yippee => {
        this.goals = yippee;
        this.totalGoals();
      },
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
    form.reset();
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
    goal.achievedPic = goal.achieved? "https://i.imgur.com/Z3nQM2X.png" : "https://i.imgur.com/5Rl1NPf.png" ;
    this.selected = goal;
  }
  displayAllGoals(){
    this.selected = null;
    this.editGoal = null;
  }

  setEditGoal(goal: Goal){
    console.log(goal.achievedPic);
    this.editGoal = goal;
  }

  setAchievedPic(event){
    console.log(typeof event.target.value);

    if(event.target.value === "true"){
      this.editGoal.achievedPic = "https://i.imgur.com/Z3nQM2X.png";
    }
    else{
      console.log('inside else');
      this.editGoal.achievedPic = "https://i.imgur.com/5Rl1NPf.png" ;

    }
  }

  totalGoals(){
    this.total = this.goals.length;
  }

  achievedGoals(){
    for(let i = 0; i < this.goals.length; i++){
      if(this.goals[i].achieved === true){
        this.goalsAchieved.push(this.goals[i]);
      }
    }
    this.totalAchieved = this.goalsAchieved.length;
  }
}
