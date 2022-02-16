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

  const id = setInterval(() => {
    subscriber.next(count);
    count += 1;
  }, 1000);

  return () => {
    console.log('called');
    clearInterval(id);
  };
});

const subscription = observable.subscribe(observer);
const subscriptionTwo = observable.subscribe(observer);

/*
 * Subscriptions can be added together using the add method,
 * you can then unsubscribe to multiple at the same time.
 * This is simply personal preference, unsubscribing individually
 * will produce the same result. Also, in future lessons, we will see how
 * to automate this unsubscribe process with operators.
 */
subscription.add(subscriptionTwo);

setTimeout(() => {
  subscription.unsubscribe();
}, 3500);

// setTimeout(() => {
//   /*
//    * Note: Calling unsubscribe will not fire your complete callback,
//    * but the returned function will be invoked cleaning up any
//    * resources that were created by the subscription - in this
//    * case the interval.
//    */
//   subscription.unsubscribe();
//   subscriptionTwo.unsubscribe();
// }, 3500);

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
