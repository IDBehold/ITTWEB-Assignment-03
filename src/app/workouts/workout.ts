import {Exercise} from './exercise';

export class Workout {
  id: string;
  name: string;
  exercises: Array<Exercise>;
  count: number;
}
