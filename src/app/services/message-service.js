import * as singleSpa from 'single-spa';

export const addMessageReceiver = () => window.addEventListener("message", receiveMessage, false);

const receiveMessage = (event) => {
  if (event.origin !== window.location.origin) {
    return;
  }

  if (event.data) {
    const message = event.data;

    switch (message.type) {
      case 'REDIRECT_ACTION': navigate(message.redirect.target); break;
      case 'NO_ACTION': console.log(`Event was dispatched, but had no action`); break;
      default: console.log(`Function not implemented...`);
    }
  }
}

const navigate = (target) => singleSpa.navigateToUrl(target);