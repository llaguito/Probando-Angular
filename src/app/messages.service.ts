import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  message: string[] = [];

  constructor() { }

  sendingText(text: string) {
    this.message.push(text);
  }

}
