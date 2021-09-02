import { Observable } from 'rxjs'

const usersObs = new Observable((observer) => {
        observer.next(new Date())
    return {
        unsubscribe() {
        }
    };
});

export default usersObs