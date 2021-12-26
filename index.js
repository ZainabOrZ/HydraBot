const tmi = require('tmi.js');
const { channel, username, password, username1, password1, username2, password2, username3, password3, username4, password4, username5, password5, username6, password6} = require('./settings.json') ;

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
    channels: [channel]
};

const cartmanz_znoobis = new tmi.Client(znoobisoptions);
cartmanz_znoobis.connect().catch(console.error);

cartmanz_znoobis.on('connected', () => {
    cartmanz_znoobis.say(channel, `${username} has connected!`);
});

cartmanz_znoobis.on('message', (channel, user, message) => {
      
    if(message == `!d` ) {
        cartmanz_znoobis.say(channel, `!dungeon start`);
    }

    if(message == `!r` ) {
        cartmanz_znoobis.say(channel, "!raid start");
    }

    if(message.includes("Type !dungeon to join") ) {
        cartmanz_znoobis.say(channel, "!dungeon");
    }

    if(message.includes("Help fight him by typing !raid") ) {
        cartmanz_znoobis.say(channel, "!raid") ;
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
    channels: [channel]
};

const blacklivesmatterstill = new tmi.Client(matterstilloptions);
blacklivesmatterstill.connect().catch(console.error);

blacklivesmatterstill.on('connected', () => {
    blacklivesmatterstill.say(channel, `user has connected!`);
});

blacklivesmatterstill.on('message', (channel, user, message) => {
      
    if(message.includes("Type !dungeon to join") ) {
        blacklivesmatterstill.say(channel, "!dungeon");
    }

    if(message.includes("Help fight him by typing !raid") ) {
        blacklivesmatterstill.say(channel, "!raid") ;
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
    channels: [channel]
};

const danoobiist = new tmi.Client(danoobiistoptions);
danoobiist.connect().catch(console.error);

danoobiist.on('connected', () => {
    danoobiist.say(channel, `user has connected!`);
});

danoobiist.on('message', (channel, user, message) => {
      
    if(message.includes("Type !dungeon to join") ) {
        danoobiist.say(channel, "!dungeon");
    }

    if(message.includes("Help fight him by typing !raid") ) {
        danoobiist.say(channel, "!raid") ;
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
    channels: [channel]
};

const majicnoobz = new tmi.Client(majicnoobzoptions);
majicnoobz.connect().catch(console.error);

majicnoobz.on('connected', () => {
    majicnoobz.say(channel, `user has connected!`);
});

majicnoobz.on('message', (channel, user, message) => {
      
    if(message.includes("Type !dungeon to join") ) {
        majicnoobz.say(channel, "!dungeon");
    }

    if(message.includes("Help fight him by typing !raid") ) {
        majicnoobz.say(channel, "!raid") ;
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
    channels: [channel]
};

const noobzrange = new tmi.Client(noobzrangeoptions);
noobzrange.connect().catch(console.error);

noobzrange.on('connected', () => {
    noobzrange.say(channel, `user has connected!`);
});

noobzrange.on('message', (channel, user, message) => {
      
    if(message.includes("Type !dungeon to join") ) {
        noobzrange.say(channel, "!dungeon");
    }

    if(message.includes("Help fight him by typing !raid") ) {
        noobzrange.say(channel, "!raid") ;
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
    channels: [channel]
};

const sweetestcandii = new tmi.Client(sweetestcandiioptions);
sweetestcandii.connect().catch(console.error);

sweetestcandii.on('connected', () => {
    sweetestcandii.say(channel, `user has connected!`);
});

sweetestcandii.on('message', (channel, user, message) => {
      
    if(message.includes("Type !dungeon to join") ) {
        sweetestcandii.say(channel, "!dungeon");
    }

    if(message.includes("Help fight him by typing !raid") ) {
        sweetestcandii.say(channel, "!raid") ;
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
    channels: [channel]
};

const zainab = new tmi.Client(zainaboptions);
zainab.connect().catch(console.error);

zainab.on('connected', () => {
    noobzrange.say(channel, `user has connected!`);
});

zainab.on('message', (channel, user, message) => {
      
    if(message.includes("Type !dungeon to join") ) {
        zainab.say(channel, "!dungeon");
    }

    if(message.includes("Help fight him by typing !raid") ) {
        zainab.say(channel, "!raid") ;
    }
});    