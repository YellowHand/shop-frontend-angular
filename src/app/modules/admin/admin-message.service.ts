import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminMessageService {

  messages: Array<string> = [];
  subject = new Subject<Array<string>>();

  constructor() { }

  add(message: string): void {
    this.clear();
    this.messages.push(message);
    this.subject.next(this.messages);
  }

  clear() {
    this.messages = [];
  }

  addSpringErrors(error: any): void {
    this.clear();
    console.log(error);
    this.extrackMessages(error);
    this.subject.next(this.messages);
  }


  private extrackMessages(error: any) {
    if (error.errors?.length > 0) {
      for (let message of error.errors) {
        this.messages.push("Pole: " + message.field + " -> " + message.defaultMessage);
        this.subject.next(this.messages);
      }
    } else {
      this.messages.push(error.message);
    }
  }
}
