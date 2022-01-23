const tmi = require('tmi.js');
const { channel1, channelbot1, channel2, channelbot2, channel3, channelbot3, username, password, username1, password1, username2, password2, username3, password3, username4, password4, username5, password5, username6, password6, username7, password7 } = require('./settings.json');

const znoobisoptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username,
        password: password
    },

    channels: [channel1, channel2, channel3],
};

const znoobis = new tmi.Client(znoobisoptions);
znoobis.connect().catch(console.error);

znoobis.on('connected', () => {
    znoobis.say(channel1, `Noob squad is here, RavenMMO and BigTwo_02!`);

});

znoobis.on('message', (channel, user, message) => {

    let isSub = user.subscriber;
    let isVIP = false;
    try {
        if (user.badges.vip) {
            isVIP = true;
        }
    } catch (error) {}
    let isMod = user.mod || user['user-type'] === 'mod';
    let isBroadcaster = channel.slice(1) === user.username;
    let isSubUp = isSub || isVIP || isMod || isBroadcaster;
    let isVIPUp = isVIP || isMod || isBroadcaster;
    let isModUp = isMod || isBroadcaster;


    //My Channel
    if (channel.toLowerCase() == channel1) {

        if (message == "!ds") {
            znoobis.say(channel1, "!dungeon start");
        }

        if (message.startsWith(`cartmanz_znoobis, You do not have any Dungeon Scrolls!`)) {
            blm.say(channel1, `!dungeon start`);
        }
        if (message.startsWith(`blm_blacklivesmatterstill, You do not have any Dungeon Scrolls!`)) {
            danoobiist.say(channel1, `!dungeon start`);
        }
        if (message.startsWith(`danoobiist, You do not have any Dungeon Scrolls!`)) {
            majicnoobz.say(channel1, `!dungeon start`);
        }
        if (message.startsWith(`majicnoobz, You do not have any Dungeon Scrolls!`)) {
            noobzrange.say(channel1, `!dungeon start`);
        }
        if (message.startsWith(`noobzrange, You do not have any Dungeon Scrolls!`)) {
            sweetestcandii.say(channel1, `!dungeon start`);
        }
        if (message.startsWith(`sweestcandii, You do not have any Dungeon Scrolls!`)) {
            zainab.say(channel1, `!dungeon start`);
        }
        if (message.startsWith(`zainaborz, You do not have any Dungeon Scrolls!`)) {
            znoobis.say(channel1, `looks like you are going to have to use your own scrolls, because I'm out :(`);
        }
        if (message == "!rs") {
            znoobis.say(channel1, "!raid start");
        }

        if (message.startsWith(`cartmanz_znoobis, You do not have any Raid Scrolls!`)) {
            blm.say(channel1, `!raid start`);
        }
        if (message.startsWith(`blm_blacklivesmatterstill, You do not have any Raid Scrolls!`)) {
            danoobiist.say(channel1, `!raid start`);
        }
        if (message.startsWith(`danoobiist, You do not have any Raid Scrolls!`)) {
            majicnoobz.say(channel1, `!raid start`);
        }
        if (message.startsWith(`maicnoobz, You do not have any Raid Scrolls!`)) {
            noobzrange.say(channel1, `!raid start`);
        }
        if (message.startsWith(`noobzrange, You do not have any Raid Scrolls!`)) {
            sweetestcandii.say(channel1, `!raid start`);
        }
        if (message.startsWith(`sweestcandii, You do not have any Raid Scrolls!`)) {
            zainab.say(channel1, `!raid start`);
        }
        if (message.startsWith(`zainaborz, You do not have any Raid Scrolls!`)) {
            znoobis.say(channel1, `looks like you are going to have to use your own scrolls, because I'm out :(`);
        }

        if (message == "!d") {
            znoobis.say(channel1, "!dungeon");
        }
        if (message == "!r") {
            znoobis.say(channel1, "!raid");
        }
        if (message == "!tf") {
            znoobis.say(channel1, "!train farming");
            setTimeout(function() { blm.say(channel1, "!train farming") }, 500);
            setTimeout(function() { danoobiist.say(channel1, "!train farming") }, 1000);
            setTimeout(function() { majicnoobz.say(channel1, "!train farming") }, 1500);
            setTimeout(function() { noobzrange.say(channel1, "!train farming") }, 2000);
            setTimeout(function() { sweetestcandii.say(channel1, "!train farming") }, 2500);
            setTimeout(function() { zainab.say(channel1, "!train farming") }, 3000);
            setTimeout(function() { noobizbot.say(channel1, "!train farming") }, 3500);
        }
        if (user.username == channelbot1.toLowerCase() || user.username == "ravenfallofficial") {
            if (message.startsWith("cartmanz_znoobis, You have joined the dungeon")) {
                setTimeout(function() { blm.say(channel1, "!dungeon") }, 500);
                setTimeout(function() { danoobiist.say(channel1, "!dungeon") }, 1000);
                setTimeout(function() { majicnoobz.say(channel1, "!dungeon") }, 1500);
                setTimeout(function() { noobzrange.say(channel1, "!dungeon") }, 2000);
                setTimeout(function() { sweetestcandii.say(channel1, "!dungeon") }, 2500);
                setTimeout(function() { zainab.say(channel1, "!dungeon") }, 3000);
            }

            if (message.startsWith("cartmanz_znoobis, You have joined the raid")) {
                setTimeout(function() { blm.say(channel1, "!raid") }, 500);
                setTimeout(function() { danoobiist.say(channel1, "!raid") }, 1000);
                setTimeout(function() { majicnoobz.say(channel1, "!raid") }, 1500);
                setTimeout(function() { noobzrange.say(channel1, "!raid") }, 2000);
                setTimeout(function() { sweetestcandii.say(channel1, "!raid") }, 2500);
                setTimeout(function() { zainab.say(channel1, "!raid") }, 3000);
            }
        }
        if (user.username == "cartmanz_znoobis") {
            if (message == "!ja") {
                znoobis.say(channel1, "!join 2");
                blm.say(channel1, "!join");
                danoobiist.say(channel1, "!join 2");
                majicnoobz.say(channel1, "!join");
                noobzrange.say(channel1, "!join");
                sweetestcandii.say(channel1, "!join");
                zainab.say(channel1, "!join");
                noobizbot.say(channel1, "!join");
            }
        }

    }

    //Raven Channel
    else if (channel.toLowerCase() == channel2) {
        if (message == "!d") {
            setTimeout(function() { znoobis.say(channel2, "!dungeon") }, 2000);
        }
        if (message == "!r") {
            setTimeout(function() { znoobis.say(channel2, "!raid") }, 2000);
        }

        if (user.username == channelbot2.toLowerCase() || user.username == "ravenfallofficial") {
            if (message.startsWith("cartmanz_znoobis, You have joined the dungeon")) {
                setTimeout(function() { blm.say(channel2, "!dungeon") }, 500);
                setTimeout(function() { danoobiist.say(channel2, "!dungeon") }, 1000);
                setTimeout(function() { majicnoobz.say(channel2, "!dungeon") }, 1500);
                setTimeout(function() { noobzrange.say(channel2, "!dungeon") }, 2000);
                setTimeout(function() { sweetestcandii.say(channel2, "!dungeon") }, 2500);
                setTimeout(function() { zainab.say(channel2, "!dungeon") }, 3000);
                setTimeout(function() { noobizbot.say(channel2, "!dungeon") }, 3500);
            }
            if (message.startsWith("cartmanz_znoobis, You have joined the raid")) {
                setTimeout(function() { blm.say(channel2, "!raid") }, 500);
                setTimeout(function() { danoobiist.say(channel2, "!raid") }, 1000);
                setTimeout(function() { majicnoobz.say(channel2, "!raid") }, 1500);
                setTimeout(function() { noobzrange.say(channel2, "!raid") }, 2000);
                setTimeout(function() { sweetestcandii.say(channel2, "!raid") }, 2500);
                setTimeout(function() { zainab.say(channel2, "!raid") }, 3000);
                setTimeout(function() { noobizbot.say(channel2, "!raid") }, 3500);
            }
        }
        if (user.username == "cartmanz_znoobis") {
            if (message == "!ja") {
                znoobis.say(channel2, "!join");
                blm.say(channel2, "!join 2");
                danoobiist.say(channel2, "!join");
                majicnoobz.say(channel2, "!join 2");
                noobzrange.say(channel2, "!join 2");
                sweetestcandii.say(channel2, "!join 2");
                zainab.say(channel2, "!join 2");
                noobizbot.say(channel2, "!join 2");
            }
        }
    }

    //BigTwo Channel
    //BigTwo has issues where the bot does not announce that I(ZNoobis) joined raids or dungeons. Hopefully this will let my characters join just by the command
    else if (channel.toLowerCase() == channel3) {
        if (message == "!d") {
            znoobis.say(channel3, "!dungeon");
            setTimeout(function() { blm.say(channel3, "!dungeon") }, 500);
            setTimeout(function() { danoobiist.say(channel3, "!dungeon") }, 1000);
            setTimeout(function() { majicnoobz.say(channel3, "!dungeon") }, 1500);
            setTimeout(function() { noobzrange.say(channel3, "!dungeon") }, 2000);
            setTimeout(function() { sweetestcandii.say(channel3, "!dungeon") }, 2500);
            setTimeout(function() { zainab.say(channel3, "!dungeon") }, 3000);
            setTimeout(function() { noobizbot.say(channel3, "!dungeon") }, 3500);
        }
        if (message == "!r") {
            znoobis.say(channel3, "!raid");
            setTimeout(function() { blm.say(channel3, "!raid") }, 500);
            setTimeout(function() { danoobiist.say(channel3, "!raid") }, 1000);
            setTimeout(function() { majicnoobz.say(channel3, "!raid") }, 1500);
            setTimeout(function() { noobzrange.say(channel3, "!raid") }, 2000);
            setTimeout(function() { sweetestcandii.say(channel3, "!raid") }, 2500);
            setTimeout(function() { zainab.say(channel3, "!raid") }, 3000);
            setTimeout(function() { noobizbot.say(channel3, "!raid") }, 3500);
        }
        if (message == "!ta") {
            znoobis.say(channel3, "!train all");
            setTimeout(function() { blm.say(channel3, "!train all") }, 500);
            setTimeout(function() { danoobiist.say(channel3, "!train all") }, 1000);
            setTimeout(function() { majicnoobz.say(channel3, "!train all") }, 1500);
            setTimeout(function() { noobzrange.say(channel3, "!train all") }, 2000);
            setTimeout(function() { sweetestcandii.say(channel3, "!train all") }, 2500);
            setTimeout(function() { zainab.say(channel3, "!train all") }, 3000);
            setTimeout(function() { noobizbot.say(channel3, "!train all") }, 3500);
        }
        if (message == "!tm") {
            znoobis.say(channel3, "!train magic");
            setTimeout(function() { blm.say(channel3, "!train magic") }, 500);
            setTimeout(function() { danoobiist.say(channel3, "!train magic") }, 1000);
            setTimeout(function() { majicnoobz.say(channel3, "!train magic") }, 1500);
            setTimeout(function() { noobzrange.say(channel3, "!train magic") }, 2000);
            setTimeout(function() { sweetestcandii.say(channel3, "!train magic") }, 2500);
            setTimeout(function() { zainab.say(channel3, "!train magic") }, 3000);
            setTimeout(function() { noobizbot.say(channel3, "!train magic") }, 3500);
        }
        if (user.username == "cartmanz_znoobis") {
            if (message == "!ja") {
                znoobis.say(channel3, "!join 3");
                blm.say(channel3, "!join 3");
                danoobiist.say(channel3, "!join 3");
                majicnoobz.say(channel3, "!join 3");
                noobzrange.say(channel3, "!join 3");
                sweetestcandii.say(channel3, "!join 3");
                zainab.say(channel3, "!join 3");
                noobizbot.say(channel3, "!join 3");
            }
        }
    }
});

const blmoptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username1,
        password: password1
    },

    channels: [channel1, channel2, channel3],
};

const blm = new tmi.Client(blmoptions);
blm.connect().catch(console.error);

const danoobiistoptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username2,
        password: password2
    },

    channels: [channel1, channel2, channel3],
};

const danoobiist = new tmi.Client(danoobiistoptions);
danoobiist.connect().catch(console.error);

const majicnoobzoptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username3,
        password: password3
    },

    channels: [channel1, channel2, channel3],
};

const majicnoobz = new tmi.Client(majicnoobzoptions);
majicnoobz.connect().catch(console.error);

const noobzrangeoptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username4,
        password: password4
    },

    channels: [channel1, channel2, channel3],
};

const noobzrange = new tmi.Client(noobzrangeoptions);
noobzrange.connect().catch(console.error);

const sweetestcandiioptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username5,
        password: password5
    },

    channels: [channel1, channel2, channel3],
};

const sweetestcandii = new tmi.Client(sweetestcandiioptions);
sweetestcandii.connect().catch(console.error);

const zainaboptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username6,
        password: password6
    },

    channels: [channel1, channel2, channel3],
};

const zainab = new tmi.Client(zainaboptions);
zainab.connect().catch(console.error);

const noobizbotoptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username7,
        password: password7
    },

    channels: [channel1, channel2, channel3],
};

const noobizbot = new tmi.Client(noobizbotoptions);
noobizbot.connect().catch(console.error);