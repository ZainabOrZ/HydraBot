# HydraBot
My programming NoobStruggles
This is the same project from https://github.com/ZainabOrZ/MultiUserBot . This was created to better document the changes I will try to implement from now on. I attempted to create this bot using Chris Riot's YouTube video (https://www.youtube.com/watch?v=hoiWxlZ6xHw) and his coding template found here https://github.com/ChrisRiot/simple-twitch-bot

# What I ultimately want: 
One central bot that will respond to a particular channel on twitch using several different user accounts. I would like to automate my part in the stream by haing the "bots" respond for me. For example when the phase "Help fight him by typing !raid" is entered in the chat, I want to bot to recognize it then respond with !raid from all six profiles

# What is happening so far: 
The code and program works exactly the way it is supposed to when one user is in the code. After I add the other 5 profiles i run node index.js again and I receive an error stating that the bot can not send anonymous messages that I will post for you.

# The error:
PS C:\Users\Owner\OneDrive\Desktop\MultiBot Take 2> node index.js
[06:48] info: Connecting to irc-ws.chat.twitch.tv on port 443..
[06:48] info: Sending authentication to server..
[06:48] info: Connected to server.
[06:48] info: Executing command: JOIN #cartmanz_znoobis
node:internal/process/promises:246
          triggerUncaughtException(err, true /* fromPromise */);
          ^

[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Cannot send anonymous messages.".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
