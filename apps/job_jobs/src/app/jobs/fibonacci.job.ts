import { Job } from '../decorators/job.decorator';
import { AbstractJob } from './job';

@Job({
  name: 'Fibonacci',
  description: 'Generate a Fibonacci sequence and store it in a database',
})
export class FibonacciJob extends AbstractJob {}
