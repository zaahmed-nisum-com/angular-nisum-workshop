import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() { }

  addItem(key: string, data: {}) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }
  removeItem(value: string) {
    window.localStorage.removeItem(value)
  }
  getItem(value: string) {
    const response: any = window.localStorage.getItem(value);
    return JSON.parse(response);
  }
}
