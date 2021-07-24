import { Observable } from 'rxjs'

// Create an Observable that will start listening to geolocation updates
// when a consumer subscribes.
const timeclock = new Observable((observer) => {
    let watchId: any;

    // Simple geolocation API check provides values to publish
    // if ('geolocation' in navigator) {
    // watchId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
    //     observer.next(position);
    // }, (error: GeolocationPositionError) => {
    //     observer.error(error);
    // });
    watchId = setInterval(() => {
        observer.next(new Date())
    }, 1000)
    // } else {
    //     observer.error('Geolocation not available');
    // }

    // When the consumer unsubscribes, clean up data ready for next subscription.
    return {
        unsubscribe() {
            clearInterval(watchId)
            // navigator.geolocation.clearWatch(watchId);
        }
    };
});

export default timeclock