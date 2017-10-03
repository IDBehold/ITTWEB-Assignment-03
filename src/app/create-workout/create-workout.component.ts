import { Component, OnInit } from '@angular/core';
import {WorkoutsService} from "../workouts.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {

  constructor(private workoutService: WorkoutsService,
              private router: Router) { }

  ngOnInit() {
  }

  createWorkout(name: string): void{
    this.workoutService.createWorkout(name).then(() => this.router.navigate(['/']));
  }
}
