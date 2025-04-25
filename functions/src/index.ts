import * as functions from 'firebase-functions';
import {crawlerBeach} from './crawler/beach';
import {crawlerBusinessDirectory} from './crawler/business-directory';
import {crawlerLocalEvents} from './crawler/local-events';
import {crawlerTop10SeeTodo} from './crawler/top10seetodo';

import { app } from './api';

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.update_beach = functions.https.onRequest((request, response) => {
  if (request.query.secret === undefined || request.query.secret !== 'chameleon-isb-mini-site') {
    response.status(403).json({error: 'forbidden'});
    return;
  }
  crawlerBeach()
  response.json({success: true});
});

exports.update_business_directory = functions.https.onRequest((request, response) => {
  if (request.query.secret === undefined || request.query.secret !== 'chameleon-isb-mini-site') {
    response.status(403).json({error: 'forbidden'});
    return;
  }
  crawlerBusinessDirectory()
  response.json({success: true});
});

exports.update_local_events = functions.https.onRequest((request, response) => {
  if (request.query.secret === undefined || request.query.secret !== 'chameleon-isb-mini-site') {
    response.status(403).json({error: 'forbidden'});
    return;
  }
  // eslint-disable-next-line promise/always-return
  crawlerLocalEvents().then(() => {
    response.json({success: true});
  }).catch();

});

exports.update_top10 = functions.https.onRequest((request, response) => {
  if (request.query.secret === undefined || request.query.secret !== 'chameleon-isb-mini-site') {
    response.status(403).json({error: 'forbidden'});
    return;
  }
  crawlerTop10SeeTodo()
  response.json({success: true});
});

exports.tester = functions.https.onRequest((request, response) => {
  let promises = [];
  for (let item of [1, 2, 3]) {
    promises.push(
        new Promise(((resolve, reject) => {
          let i = item;
          setTimeout(() => {
            resolve(i);
          }, i * 1000);
        }))
    );
  }

  console.log(promises);
  Promise.all(promises).then((result) => {
    console.log(result);
    response.json({success: true});
    return result;
  }).catch();

});


// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);