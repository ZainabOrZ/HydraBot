const tmi = require('tmi.js');
const { channel, channel1, channel2, username, password, username1, password1, username2, password2, username3, password3, username4, password4, username5, password5, username6, password6, username7, password7} = require('./settings.json') ;

const znoobisoptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password      
    },
    channels: [channel], 
    channels: [channel1],
    channels: [channel2],
};

const cartmanz_znoobis = new tmi.Client(znoobisoptions);
cartmanz_znoobis.connect().catch(console.error);

cartmanz_znoobis.on('connected', () => {
    cartmanz_znoobis.say(channel, `${username} has connected!`);
});

cartmanz_znoobis.on('message', (channel, user, message) => {
      
    if(message == `!ds` ) {
        cartmanz_znoobis.say(channel, `!dungeon start`);
    }

    if(message == `cartmanz_znoobis, You do not have any Dungeon Scrolls! Redeem them under streamer loyalty on the website.` ) {
        cartmanz_znoobis.say(channel, `!ds1`);
    }

    if(message == `blm_blacklivesmatterstill, You do not have any Dungeon Scrolls! Redeem them under streamer loyalty on the website.` ) {
        cartmanz_znoobis.say(channel, `!ds2`);
    }

    if(message == `danoobiist, You do not have any Dungeon Scrolls! Redeem them under streamer loyalty on the website.` ) {
        cartmanz_znoobis.say(channel, `!ds3`);
    }

    if(message == `majicnoobz, You do not have any Dungeon Scrolls! Redeem them under streamer loyalty on the website.` ) {
        cartmanz_znoobis.say(channel, `!ds4`);
    }

    if(message == `noobzrange, You do not have any Dungeon Scrolls! Redeem them under streamer loyalty on the website.` ) {
        cartmanz_znoobis.say(channel, `!ds5`);
    }

    if(message == `sweetestcandii, You do not have any Dungeon Scrolls! Redeem them under streamer loyalty on the website.` ) {
        cartmanz_znoobis.say(channel, `!ds6`);
    }

    if(message == `zainaborz, You do not have any Dungeon Scrolls! Redeem them under streamer loyalty on the website.` ) {
        cartmanz_znoobis.say(channel, `sorry folks but it looks like I am out of scrolls :( Please use your own until I buy more`);
    }

    if(message == `!rs` ) {
        cartmanz_znoobis.say(channel, `!raid start`);
    }

    if(message == `cartmanz_znoobis, You do not have any Raid Scrolls! Redeem them under streamer loyalty on the website.` ) {
        cartmanz_znoobis.say(channel, `!rs1`);
    }

    if(message == `blm_blacklivesmatterstill, You do not have any Raid Scrolls! Redeem them under streamer loyalty on the website.` ) {
        cartmanz_znoobis.say(channel, `!rs2`);
    }

    if(message == `danoobiist, You do not have any Raid Scrolls! Redeem them under streamer loyalty on the website.` ) {
        cartmanz_znoobis.say(channel, `!rs3`);
    }

    if(message == `majicnoobz, You do not have any Raid Scrolls! Redeem them under streamer loyalty on the website.` ) {
        cartmanz_znoobis.say(channel, `!rs4`);
    }

    if(message == `noobzrange, You do not have any Raid Scrolls! Redeem them under streamer loyalty on the website.` ) {
        cartmanz_znoobis.say(channel, `!rs5`);
    }

    if(message == `sweetestcandii, You do not have any Raid Scrolls! Redeem them under streamer loyalty on the website.` ) {
        cartmanz_znoobis.say(channel, `!rs6`);
    }

    if(message == `zainaborz, You do not have any Raid Scrolls! Redeem them under streamer loyalty on the website.` ) {
        cartmanz_znoobis.say(channel, `sorry folks but it looks like I am out of scrolls :( Please use your own until I buy more`);
    }

    if(message == `!d` ) {
        cartmanz_znoobis.say(channel, `!dungeon`);
    }

    if(message == `!d` ) {
        cartmanz_znoobis.say(channel1, `!dungeon`);
    }

    if(message == `!d` ) {
        cartmanz_znoobis.say(channel2, `!dungeon`);
    }

    if(message == `!r` ) {
        cartmanz_znoobis.say(channel, `!raid`);
    }

    if(message == `!r` ) {
        cartmanz_znoobis.say(channel1, `!raid`);
    }

    if(message == `!r` ) {
        cartmanz_znoobis.say(channel2, `!raid`);
    }

    if(message == `!s` ) {
        cartmanz_znoobis.say(channel, `!scrolls`);
    }
});

const matterstilloptions = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username: username1,
        password: password1      
    },
    channels: [channel], 
    channels: [channel1],
    channels: [channel2],
};

const blacklivesmatterstill = new tmi.Client(matterstilloptions);
blacklivesmatterstill.connect().catch(console.error);

blacklivesmatterstill.on('connected', () => {
    blacklivesmatterstill.say(channel, `user has connected!`);
});

blacklivesmatterstill.on('message', (channel, user, message) => {
      
    if(message == `!ds1` ) {
        blacklivesmatterstill.say(channel, `!dungeon start`);
    }

    if(message == `!rs1` ) {
        blacklivesmatterstill.say(channel, `!raid start`);
    }
    
    if(message == `!d` ) {
        blacklivesmatterstill.say(channel, `!dungeon`);
    }

    if(message == `!d` ) {
        blacklivesmatterstill.say(channel1, `!dungeon`);
    }

    if(message == `!d` ) {
        blacklivesmatterstill.say(channel2, `!dungeon`);
    }

    if(message == `!r` ) {
        blacklivesmatterstill.say(channel, `!raid`);
    }

    if(message == `!r` ) {
        blacklivesmatterstill.say(channel1, `!raid`);
    }

    if(message == `!r` ) {
        blacklivesmatterstill.say(channel2, `!raid`);
    }

    if(message == `!s1` ) {
        blacklivesmatterstill.say(channel, `!scrolls`);
    }
});

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
    channels: [channel], 
    channels: [channel1],
    channels: [channel2],
};

const danoobiist = new tmi.Client(danoobiistoptions);
danoobiist.connect().catch(console.error);

danoobiist.on('connected', () => {
    danoobiist.say(channel, `user has connected!`);
});

danoobiist.on('message', (channel, user, message) => {
      
    if(message == `!ds2` ) {
        danoobiist.say(channel, `!dungeon start`);
    }

    if(message == `!rs2` ) {
        danoobiist.say(channel, `!raid start`);
    }
    
    if(message == `!d` ) {
        danoobiist.say(channel, `!dungeon`);
    }

    if(message == `!d` ) {
        danoobiist.say(channel1, `!dungeon`);
    }

    if(message == `!d` ) {
        danoobiist.say(channel2, `!dungeon`);
    }

    if(message == `!r` ) {
        danoobiist.say(channel, `!raid`);
    }

    if(message == `!r` ) {
        danoobiist.say(channel1, `!raid`);
    }

    if(message == `!r` ) {
        danoobiist.say(channel2, `!raid`);
    }

    if(message == `!s2` ) {
        danoobiist.say(channel, `!scrolls`);
    }
});

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
    channels: [channel], 
    channels: [channel1],
    channels: [channel2],
};

const majicnoobz = new tmi.Client(majicnoobzoptions);
majicnoobz.connect().catch(console.error);

majicnoobz.on('connected', () => {
    majicnoobz.say(channel, `user has connected!`);
});

majicnoobz.on('message', (channel, user, message) => {
      
    if(message == `!ds3` ) {
        majicnoobz.say(channel, `!dungeon start`);
    }

    if(message == `!rs3` ) {
        majicnoobz.say(channel, `!raid start`);
    }
    
    if(message == `!d` ) {
        majicnoobz.say(channel, `!dungeon`);
    }

    if(message == `!d` ) {
        majicnoobz.say(channel1, `!dungeon`);
    }

    if(message == `!d` ) {
        majicnoobz.say(channel2, `!dungeon`);
    }

    if(message == `!r` ) {
        majicnoobz.say(channel, `!raid`);
    }

    if(message == `!r` ) {
        majicnoobz.say(channel1, `!raid`);
    }

    if(message == `!r` ) {
        majicnoobz.say(channel2, `!raid`);
    }

    if(message == `!s3` ) {
        majicnoobz.say(channel, `!scrolls`);
    }
});

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
    channels: [channel], 
    channels: [channel1],
    channels: [channel2],
};

const noobzrange = new tmi.Client(noobzrangeoptions);
noobzrange.connect().catch(console.error);

noobzrange.on('connected', () => {
    noobzrange.say(channel, `user has connected!`);
});

noobzrange.on('message', (channel, user, message) => {
      
    if(message == `!ds4` ) {
        noobzrange.say(channel, `!dungeon start`);
    }

    if(message == `!rs4` ) {
        noobzrange.say(channel, `!raid start`);
    }
    
    if(message == `!d` ) {
        noobzrange.say(channel, `!dungeon`);
    }

    if(message == `!d` ) {
        noobzrange.say(channel1, `!dungeon`);
    }

    if(message == `!d` ) {
        noobzrange.say(channel2, `!dungeon`);
    }

    if(message == `!r` ) {
        noobzrange.say(channel, `!raid`);
    }

    if(message == `!r` ) {
        noobzrange.say(channel1, `!raid`);
    }

    if(message == `!r` ) {
        noobzrange.say(channel2, `!raid`);
    }

    if(message == `!s4` ) {
        noobzrange.say(channel, `!scrolls`);
    }
});

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
    channels: [channel], 
    channels: [channel1],
    channels: [channel2],
};

const sweetestcandii = new tmi.Client(sweetestcandiioptions);
sweetestcandii.connect().catch(console.error);

sweetestcandii.on('connected', () => {
    sweetestcandii.say(channel, `user has connected!`);
});

sweetestcandii.on('message', (channel, user, message) => {
      
    if(message == `!ds5` ) {
        sweetestcandii.say(channel, `!dungeon start`);
    }

    if(message == `!rs5` ) {
        sweetestcandii.say(channel, `!raid start`);
    }
    
    if(message == `!d` ) {
        sweetestcandii.say(channel, `!dungeon`);
    }

    if(message == `!d` ) {
        sweetestcandii.say(channel1, `!dungeon`);
    }

    if(message == `!d` ) {
        sweetestcandii.say(channel2, `!dungeon`);
    }

    if(message == `!r` ) {
        sweetestcandii.say(channel, `!raid`);
    }

    if(message == `!r` ) {
        sweetestcandii.say(channel1, `!raid`);
    }

    if(message == `!r` ) {
        sweetestcandii.say(channel2, `!raid`);
    }

    if(message == `!s5` ) {
        sweetestcandii.say(channel, `!scrolls`);
    }
});

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
    channels: [channel], 
    channels: [channel1],
    channels: [channel2],
};

const zainab = new tmi.Client(zainaboptions);
zainab.connect().catch(console.error);

zainab.on('connected', () => {
    zainab.say(channel, `user has connected!`);
});

zainab.on('message', (channel, user, message) => {
      
    if(message == `!ds6` ) {
        zainab.say(channel, `!dungeon start`);
    }

    if(message == `!rs6` ) {
        zainab.say(channel, `!raid start`);
    }
    
    if(message == `!d` ) {
        zainab.say(channel, `!dungeon`);
    }

    if(message == `!d` ) {
        zainab.say(channel1, `!dungeon`);
    }

    if(message == `!d` ) {
        zainab.say(channel2, `!dungeon`);
    }

    if(message == `!r` ) {
        zainab.say(channel, `!raid`);
    }

    if(message == `!r` ) {
        zainab.say(channel1, `!raid`);
    }

    if(message == `!r` ) {
        zainab.say(channel2, `!raid`);
    }

    if(message == `!s6` ) {
        zainab.say(channel, `!scrolls`);
    }
});

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
    
        channels: [channel1],
        channels: [channel2],
    };
    
    const noobizbot = new tmi.Client(noobizbotoptions);
    noobizbot.connect().catch(console.error);
    
    noobizbot.on('connected', () => {
        noobizbot.say(channel, `user has connected!`);
    });
    
    noobizbot.on('message', (channel, user, message) => {
                       
        if(message == `!d` ) {
            noobizbot.say(channel1, `!dungeon`);
        }
    
        if(message == `!d` ) {
            noobizbot.say(channel2, `!dungeon`);
        }
             
        if(message == `!r` ) {
            noobizbot.say(channel1, `!raid`);
        }
    
        if(message == `!r` ) {
            noobizbot.say(channel2, `!raid`);
        }
    });