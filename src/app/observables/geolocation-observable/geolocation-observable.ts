import { Observable } from 'rxjs'

// Create an Observable that will start listening to geolocation updates
// when a consumer subscribes.
const locations = new Observable((observer) => {
    let watchId: number;

    // Simple geolocation API check provides values to publish
    if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
            observer.next(position);
        }, (error: GeolocationPositionError) => {
            observer.error(error);
        });
    } else {
        observer.error('Geolocation not available');
    }

    // When the consumer unsubscribes, clean up data ready for next subscription.
    return {
        unsubscribe() {
            navigator.geolocation.clearWatch(watchId);
        }
    };
});

export default locations