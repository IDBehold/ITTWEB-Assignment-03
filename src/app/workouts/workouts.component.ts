import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Workout} from './workout';
import {WorkoutsService} from '../workouts.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
  providers: [ WorkoutsService ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkoutsComponent implements OnInit {
  workouts: Workout[];


  constructor(
    private workoutService: WorkoutsService,
    private ref: ChangeDetectorRef
  ) {  }

  getWorkouts(): void {
    this.workoutService.getWorkouts()
      .then(response => {
        this.workouts = response;
        this.ref.markForCheck();
      });
  }

  ngOnInit() {
    this.getWorkouts();
  }

  countUp(id: string): void{
    this.workoutService.countUp(id).then(() => this.getWorkouts());
  }

  deleteWorkout(id: string): void{
    this.workoutService.deleteWorkout(id).then(() => this.getWorkouts());
  }

}
