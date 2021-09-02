import { Observable } from 'rxjs'

const locations = new Observable((observer) => {
    let state: {
        users:[]
    };

    let watchId: any;

    if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
            observer.next(position);
        }, (error: GeolocationPositionError) => {
            observer.error(error);
        });
    } else {
        observer.error('Geolocation not available');
    }

    return {
        unsubscribe() {
            navigator.geolocation.clearWatch(watchId);
        }
    };
});

export default locations