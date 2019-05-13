import { Injectable, Inject } from '@angular/core';
import { WINDOW } from './window.service';
import { MessageType } from './message-type.enum';

interface MessageData {
  type: MessageType;
}

interface RedirectData extends MessageData {
  redirect: {
    target: string;
  };
}

interface LoginData extends MessageData {
  test: string;
}

@Injectable({
  providedIn: 'root',
})
export class SingleSpaCommunicationService {
  /* tslint:disable:variable-name */
  private _window?: Window;
  /* tslint:enable:variable-name */

  constructor(@Inject(WINDOW) win?: any) {
    this._window = win as Window;
  }

  send(type: MessageType, message: string) {
    switch (type) {
      case MessageType.REDIRECT: this.sendRedirect(message); break;
      case MessageType.LOGIN: this.sendLogin(message); break;
      default: return MessageType.NO_ACTION;
    }
  }

  sendRedirect(message: string) {
    const data: RedirectData = {
      type: MessageType.REDIRECT,
      redirect: {
        target: message
      }
    };

    this.post(data);
  }

  sendLogin(message: string) {
    const data: LoginData = {
      type: MessageType.LOGIN,
      test: message
    }
    this.post(data);
  }

  noAction() {
    const data: MessageData = {
      type: MessageType.NO_ACTION
    };
    this.post(data);
  }

  post(data: MessageData) {
    const top = this._window.top;
    top.postMessage(data, '*');
  }
}
