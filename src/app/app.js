import * as singleSpa from 'single-spa';
import { fetchApplications, loadApp } from './utilities/handle-applications';
import { convertToActivityFunction, activityFunctionNotFound } from './utilities/activity-functions';
import { addMessageReceiver } from './services/message-service';

let subApps = [];
let started = false;
let error = false;
let notFoundRegistered = false;

export const initialize = async () => {
  try {
    subApps = await fetchApplications();
  } catch (err) {
    error = true;
  }
  if (!error) {
    if (subApps && subApps.length > 0) {
      let appName, bundle, activityFunc;
      for (let app of subApps) {
        appName = app.name;
        bundle = app.bundle;
        await loadApp(bundle)
          .then(
            () => {
              console.log(`Successfully loaded application: ${appName}`);
              activityFunc = convertToActivityFunction(app.activityFunction);
              singleSpa.registerApplication(appName, window[appName].default, activityFunc);
            })
          .catch(
            () => {
              console.error(`Unable to load application: ${appName}`);
            });
      }

      if (!notFoundRegistered) {
        appName = 'not-found';
        bundle = 'not-found/main.js';
        activityFunc = activityFunctionNotFound();
        await loadApp(bundle);
        singleSpa.registerApplication(appName, window[appName].default, activityFunc);

        notFoundRegistered = true;
      }
    }
  } else {
    throw new Error('An error occurred while loading applications');
  }

  if (!error) {
    singleSpa.start();
    addMessageReceiver();
    started = true;
  }
}
