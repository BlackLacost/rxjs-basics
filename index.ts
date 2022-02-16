import './style.css';
console.clear();

// begin lesson code
import { Observable } from 'rxjs';

const observer = {
  next: (value) => console.log('next', value),
  error: (error) => console.log('error', error),
  complete: () => console.log('complete!'),
};

const observable = new Observable((subscriber) => {
  let count = 0;
  // Observables can deliver 0:M values synchronous or asynchronously
  const id = setInterval(() => {
    subscriber.next(count);
    // calling complete also invokes the cleanup function you return
    subscriber.complete();
    count += 1;
  }, 1000);

  /*
   * You can return a function to clean up any resources that were
   * created with subscription. In this case, we need to clear
   * the active interval. When using RxJS's built in creation operators
   * this will be handled for us.
   */
  return () => {
    console.log('called');
    clearInterval(id);
  };
});

// adding logs to show observable emitting asynchronously
console.log('before');
observable.subscribe(observer);
console.log('after');

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
