const webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BAFcP-c-yybzzHJgFc16CT8jFGxjMmiXx1I4rAGgSjz74G7mRM7A8PnWswjbbBEIkBbunAkCmMNdKvvUCTJz59c",
   "privateKey": "3tQgHS7iRop3pmzMSDhv81zSOFXqN0HvewGzJooF1Y8"
};
 
 
webPush.setVapidDetails(
   'mailto:ima54a@gmail.com',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
const pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/dUmgdoBE3KU:APA91bERwF-LdsZTDYFFHVnHyZaS5vZ2_psDK7Xg17VoEpGrJOeu0O8Sc-_k-QzSkvlP4oIXivGXTPugkTLJ_lT4KEIlGEkmRnBSrDseJT1j8bwqoonO1nee9Exw19Vtyu1CQWwWoe5N",
   "keys": {
       "p256dh": "BFQ4OKULI3JsjMpNRVlIWU+wBDtEhtxoxZ0OaF1/TxDyefjC5PD1oZzVqZJz1GL9kNxBLnoleq2agksir+5u7Cc=",
       "auth": "BfGvSNjFFy/94oWCJMcwvA=="
   }
};
const payload = 'Hi! Welcome to 2018 FIFA World Cup!';
 
const options = {
   gcmAPIKey: '340785569797',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);