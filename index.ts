import './style.css';
console.clear();

// begin lesson code
import { Observable } from 'rxjs';

/*
 * Observers can register up to 3 callbacks
 * next is called 1:M times to push new values to observer
 * error is called at most 1 time should an error occur
 * complete is called at most 1 time on completion.
 */
const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('complete!')
};

const observable = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('World');
    /*
     * Once complete is called, observable will be cleaned up
     * and no future values delivered.
     */
    subscriber.complete();
    /*
     * These values will not be logged as the observable
     * has already completed.
     */
    subscriber.next('Hello');
    subscriber.next('World');
});

/* 
 * Subscribe hooks observer up to observable, beginning execution.
 * This creates a 1 to 1 relationship between the producer
 * (observable) and the consumer (observer).
 */
observable.subscribe(observer);

/********************
 * Have a question, comment, or just want to chat about RxJS?
 * Ping me on Ultimate Courses slack or on 
 * Twitter https://twitter.com/btroncone
 * I look forward to hearing from you!
 * For additional RxJS info and operator examples check out
 * Learn RxJS (https://www.learnrxjs.io) and
 * the Ultimate Course RxJS blog!
 * (https://ultimatecourses.com/blog/category/rxjs)
 ********************/