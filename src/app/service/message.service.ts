import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<string>();
  private behaviourSubject=new BehaviorSubject<string>('Good day!!');

  constructor() { }

  sendSubjectMessage(message: string) {
    this.subject.next(message)
  }

  receivedSubjectMessage(): Observable<string> {
    return this.subject.asObservable();
  }

  sendBehaviourSubjectMessage(message: string) {
    this.behaviourSubject.next(message)
  }

  receivedBehaviourSubjectMessage(): Observable<string> {
    return this.behaviourSubject.asObservable();
  }
}
