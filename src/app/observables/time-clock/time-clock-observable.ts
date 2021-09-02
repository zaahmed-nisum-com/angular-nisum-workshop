import { Observable } from 'rxjs'

const timeclock = new Observable((observer) => {
    let watchId: any;

    watchId = setInterval(() => {
        observer.next(new Date())
    }, 1000)
    return {
        unsubscribe() {
            clearInterval(watchId)
        }
    };
});

export default timeclock