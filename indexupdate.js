const tmi = require('tmi.js');
const { channel, channelbot, channel1, channelbot1, channel2, channelbot2, username, password, username1, password1, username2, password2, username3, password3, username4, password4, username5, password5, username6, password6, username7, password7} = require('./settings.json') ;

const znoobisoptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
        },
    identity : {
        username: username,
        password: password     
        },
    
        channels: [channel, channel1, channel2],
    };
    
    const znoobis = new tmi.Client(znoobisoptions);
    znoobis.connect().catch(console.error);

    cartmanz_znoobis.on('connected', () => {
        cartmanz_znoobis.say(channel, `Noob squad here!`);
    
});
    
cartmanz_znoobis.on('message', (chan, user, message) => {

    let isSub = user.subscriber;
    let isVIP = false;
    try    {
        if(user.badges.vip)
        {
            isVIP = true;
        }
    }    catch(error){}
    let isMod = user.mod || user['user-type'] === 'mod';
    let isBroadcaster = channel.slice(1) === user.username;
    let isSubUp = isSub || isVIP || isMod || isBroadcaster;
    let isVIPUp = isVIP || isMod || isBroadcaster;
    let isModUp = isMod || isBroadcaster;
 

    //My Channel
    if (chan == channel) {
        
        if (message == "!ds") {
            cartmanz_znoobis.say(channel, "!dungeon start");
        }

        if(message.startsWith(`cartmanz_znoobis, You do not have any Dungeon Scrolls!`)){
            blm.say(channel, `!dungeon start`);
        }
        if(message.startsWith(`blm_blacklivesmatterstill, You do not have any Dungeon Scrolls!`)){
            danoobiist.say(channel, `!dungeon start`);
        }
        if(message.startsWith(`danoobiist, You do not have any Dungeon Scrolls!`)){
            majicnoobz.say(channel, `!dungeon start`);
        }
        if(message.startsWith(`maicnoobz, You do not have any Dungeon Scrolls!`)){
            noobzrange.say(channel, `!dungeon start`);
        }
        if(message.startsWith(`noobzrange, You do not have any Dungeon Scrolls!`)){
            sweetestcandii.say(channel, `!dungeon start`);
        }
        if(message.startsWith(`sweestcandii, You do not have any Dungeon Scrolls!`)){
            zainab.say(channel, `!dungeon start`);
        }
        if(message.startsWith(`zainaborz, You do not have any Dungeon Scrolls!`)){
            cartmanz_znoobis.say(channel, `looks like you are going to have to use your own scrolls, because I'm out :(`);
        }
        if (message == "!rs") {
            cartmanz_znoobis.say(channel, "!raid start");
        }

        if(message.startsWith(`cartmanz_znoobis, You do not have any Raid Scrolls!`)){
            blm.say(channel, `!raid start`);
        }
        if(message.startsWith(`blm_blacklivesmatterstill, You do not have any Raid Scrolls!`)){
            danoobiist.say(channel, `!raid start`);
        }
        if(message.startsWith(`danoobiist, You do not have any Raid Scrolls!`)){
            majicnoobz.say(channel, `!raid start`);
        }
        if(message.startsWith(`maicnoobz, You do not have any Raid Scrolls!`)){
            noobzrange.say(channel, `!raid start`);
        }
        if(message.startsWith(`noobzrange, You do not have any Raid Scrolls!`)){
            sweetestcandii.say(channel, `!raid start`);
        }
        if(message.startsWith(`sweestcandii, You do not have any Raid Scrolls!`)){
            zainab.say(channel, `!raid start`);
        }
        if(message.startsWith(`zainaborz, You do not have any Raid Scrolls!`)){
            cartmanz_znoobis.say(channel, `looks like you are going to have to use your own scrolls, because I'm out :(`);
        }

        if (message == "!d") {
            cartmanz_znoobis.say(channel, "!dungeon");
        }
        if (message == "!r") {
            cartmanz_znoobis.say(channel, "!raid");
        }
        if (user.username.toLowerCase() == channelbot.toLowerCase() || user.username.toLowerCase() == "ravenfallofficial"){
            if (message.startsWith("cartmanz_znoobis, You have joined the dungeon")){
                setTimeout(function(){blm.say(channel,"!dungeon")},500);
                setTimeout(function(){danoobiist.say(channel,"!dungeon")},1000);
                setTimeout(function(){majicnoobz.say(channel,"!dungeon")},1500);
                setTimeout(function(){noobzrange.say(channel,"!dungeon")},2000);
                setTimeout(function(){sweetestcandii.say(channel,"!dungeon")},2500);
                setTimeout(function(){zainab.say(channel,"!dungeon")},3000);
            } 
        
            if (message.startsWith("cartmanz_znoobis, You have joined the raid")){
                setTimeout(function(){blm.say(channel,"!raid")},500);
                setTimeout(function(){danoobiist.say(channel,"!raid")},1000);
                setTimeout(function(){majicnoobz.say(channel,"!raid")},1500);
                setTimeout(function(){noobzrange.say(channel,"!raid")},2000);
                setTimeout(function(){sweetestcandii.say(channel,"!raid")},2500);
                setTimeout(function(){zainab.say(channel,"!raid")},3000);
            }
        }
    }

    //Raven Channel
    else if (chan == channel1){
        if (message == "!d") {
            cartmanz_znoobis.say(channel1, "!dungeon");
        }
        if (message == "!r") {
            cartmanz_znoobis.say(channel1, "!raid");
        }
        if (message.startsWith("cartmanz_znoobis, You have joined the dungeon")){
            setTimeout(function(){blm.say(channel1,"!dungeon")},500);
            setTimeout(function(){danoobiist.say(channel,"!dungeon")},1000);
            setTimeout(function(){majicnoobz.say(channel1,"!dungeon")},1500);
            setTimeout(function(){noobzrange.say(channel1,"!dungeon")},2000);
            setTimeout(function(){sweetestcandii.say(channel1,"!dungeon")},2500);
            setTimeout(function(){zainab.say(channel1,"!dungeon")},3000);
            setTimeout(function(){noobizbot.say(channel1,"!dungeon")},3500);
        }
        if (message.startsWith("cartmanz_znoobis, You have joined the raid")){
            setTimeout(function(){blm.say(channel1,"!raid")},500);
            setTimeout(function(){danoobiist.say(channel1,"!raid")},1000);
            setTimeout(function(){majicnoobz.say(channel1,"!raid")},1500);
            setTimeout(function(){noobzrange.say(channel1,"!raid")},2000);
            setTimeout(function(){sweetestcandii.say(channel1,"!raid")},2500);
            setTimeout(function(){zainab.say(channel1,"!raid")},3000);
            setTimeout(function(){noobizbot.say(channel1,"!raid")},3500);
        }
    }

    //BigTwo Channel
    else if (chan == channel2){
        if (message == "!d") {
            cartmanz_znoobis.say(channel2, "!dungeon");
        }
        if (message == "!r") {
            cartmanz_znoobis.say(channel2, "!raid");
        }
        if (message.startsWith("cartmanz_znoobis, You have joined the dungeon")){
            setTimeout(function(){blm.say(channel2,"!dungeon")},500);
            setTimeout(function(){danoobiist.say(channel2,"!dungeon")},1000);
            setTimeout(function(){majicnoobz.say(channel2,"!dungeon")},1500);
            setTimeout(function(){noobzrange.say(channel2,"!dungeon")},2000);
            setTimeout(function(){sweetestcandii.say(channel2,"!dungeon")},2500);
            setTimeout(function(){zainab.say(channel2,"!dungeon")},3000);
            setTimeout(function(){noobizbot.say(channel2,"!dungeon")},3500);
        }
        if (message.startsWith("cartmanz_znoobis, You have joined the raid")){
            setTimeout(function(){blm.say(channel2,"!raid")},500);
            setTimeout(function(){danoobiist.say(channel2,"!raid")},1000);
            setTimeout(function(){majicnoobz.say(channel2,"!raid")},1500);
            setTimeout(function(){noobzrange.say(channel2,"!raid")},2000);
            setTimeout(function(){sweetestcandii.say(channel2,"!raid")},2500);
            setTimeout(function(){zainab.say(channel2,"!raid")},3000);
            setTimeout(function(){noobizbot.say(channel2,"!raid")},3500);
        }
    }
});

const blmoptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
        },
    identity : {
        username: username1,
        password: password1      
        },
    
        channels: [channel, channel1, channel2],
    };
    
    const blm = new tmi.Client(blmoptions);
    blm.connect().catch(console.error);

const danoobiistoptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
        },
    identity : {
        username: username2,
        password: password2      
        },
    
        channels: [channel, channel1, channel2],
    };
    
    const danoobiist = new tmi.Client(danoobiistoptions);
    danoobiist.connect().catch(console.error);

const majicnoobzoptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
        },
    identity : {
        username: username3,
        password: password3      
        },
    
        channels: [channel, channel1, channel2],
    };
    
    const majicnoobz = new tmi.Client(majicnoobzoptions);
    majicnoobz.connect().catch(console.error);

const noobzrangeoptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
        },
    identity : {
        username: username4,
        password: password4      
        },
    
        channels: [channel, channel1, channel2],
    };
    
    const noobzrange = new tmi.Client(noobzrangeoptions);
    noobzrange.connect().catch(console.error);

const sweetestcandiioptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
        },
    identity : {
        username: username5,
        password: password5      
        },
    
        channels: [channel, channel1, channel2],
    };
    
    const sweetestcandii = new tmi.Client(sweetestcandiioptions);
    sweetestcandii.connect().catch(console.error);

const zainaboptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
        },
    identity : {
        username: username6,
        password: password6      
        },
    
        channels: [channel, channel1, channel2],
    };
    
    const zainab = new tmi.Client(zainaboptions);
    zainab.connect().catch(console.error);

const noobizbotoptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
        },
    identity : {
        username: username7,
        password: password7      
        },
    
        channels: [channel, channel1, channel2],
    };
    
    const noobizbot = new tmi.Client(noobizbotoptions);
    noobizbot.connect().catch(console.error);
    
    