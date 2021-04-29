const createUserTable = (db) => {
    return new Promise((resolve, reject) => {
        db.run(`CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            phone TEXT NOT NULL UNIQUE,
            passwordHash TEXT NULL
        )`, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        });
    })
}

const createDirectChatTable = (db) => {
    return new Promise((resolve, reject) => {
        db.run(`CREATE TABLE IF NOT EXISTS direct_chat (
            id INTEGER PRIMARY KEY,
            fromUserId INTEGER NOT NULL,
            toUserId INTEGER NOT NULL,
            message TEXT NOT NULL,
            datestamp TEXT NOT NULL
        )`, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        });
    })
}

const createChannelChatTable = (db) => {
    return new Promise((resolve, reject) => {
        db.run(`CREATE TABLE IF NOT EXISTS channel_chat_messages (
            id INTEGER PRIMARY KEY,
            channelId INTEGER NOT NULL,
            message TEXT NOT NULL,
            datestamp TEXT NOT NULL
        )`, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        });
    })
}

const createChannelTable = (db) => {
    return new Promise((resolve, reject) => {
        db.run(`CREATE TABLE IF NOT EXISTS channel (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL
        )`, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        });
    })
}

const createChannelMembersTable = (db) => {
    return new Promise((resolve, reject) => {
        db.run(`CREATE TABLE IF NOT EXISTS channel_members (
            id INTEGER PRIMARY KEY,
            channelId INTEGER NOT NULL,
            userId INTEGER NOT NULL
        )`, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        });
    })
}

const setupTables = (db) => {
    return Promise.all([createUserTable(db), createChannelTable(db), createDirectChatTable(db), createChannelChatTable(db), createChannelMembersTable(db)]);
}

module.exports = setupTables;