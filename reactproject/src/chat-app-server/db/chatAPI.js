

const sqlite3 = require('sqlite3').verbose();
const bcrypt = require("bcrypt");
const setupTables = require("./migrate.js");

const getAll = (db, sql) => {
    return new Promise((resolve, reject) => {
        db.all(sql, [], (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    })
}
const getEntry = (db, sql, param) => {
    return new Promise((resolve, reject) => {
        db.get(sql, param, (err, row) => {
            if (err) {
                return reject(err);
            }
            resolve(row);
        });
    })
}
const run = (db, sql, param) => {
    return new Promise((resolve, reject) => {
        db.run(sql, param, (err, row) => {
            if (err) {
                return reject(err);
            }
            resolve(row);
        });
    })
}

class ChatApp {
    db = null;

    constructor() {
        this.setupDB();
    }

    close = () => {
        if (!this.db) {
            return;
        }
        this.db.close();
    }

    setupDB = () => {
        this.db = new sqlite3.Database('./db/chat.db', (err) => {
            if (err) {
                return console.error(err.message);
            }
        });
    }

    migrate = () => {
        return setupTables(this.db);
    }

    createUser = (user) => {
        if (!this.db) {
            return Promise.reject('DB not running');
        }
        return bcrypt.hash(user.password, 10).then(hash => {
            const { firstName, lastName, email, phone } = user;
            let sql = `INSERT INTO user (firstName, lastName, email, phone, passwordHash) VALUES (?,?,?,?,?);`;
            run(this.db, sql, [firstName, lastName, email, phone, hash]).then(() => {
                return getAll(this.db, 'SELECT * FROM user');
            });
        });
        
    }

    updateUser = (id, user) => {
        if (!this.db) {
            return Promise.reject('DB not running');
        }
        const { firstName, lastName, email, phone } = user;
        console.log(user, id)
        let sql = `UPDATE user SET firstName = ?, lastName = ?, email = ?, phone = ? WHERE id = ?;`;
        return run(this.db, sql, [firstName, lastName, email, phone, id]).then(() => {
            return getEntry(this.db, 'SELECT firstName, lastName, phone, email, id FROM user WHERE user.id = ?', [id]);
        });
        
    }

    getAllUsers = () => {
        return getAll(this.db, 'SELECT * FROM user');
    }

    getUsers = () => {
        if (!this.db) {
            return Promise.reject('DB not running');
        }
        let sql = `SELECT id, firstName, lastName, email, phone FROM user;`;
        return getAll(this.db, sql);
    }

    getUser = (userId) => {
        if (!this.db) {
            return Promise.reject('DB not running');
        }
        let sql = `SELECT id, firstName, lastName, email, phone FROM user WHERE id = ?;`;
        return getEntry(this.db, sql, [userId]);
    }

    login = ({ email, password } ) => {
        if (!this.db) {
            return Promise.reject('DB not running');
        }
        let sql = `SELECT * FROM user WHERE email = ?;`;

        return getEntry(this.db, sql, [email]).then((user) => {
            if (!user) {
                return {
                    authenticated: false
                };
            }
            const passed = bcrypt.compareSync(password, user.passwordHash);
            if (passed) {
                delete user.passwordHash;
                return {
                    authenticated: true,
                    user
                };
            }
            return {
                authenticated: false
            };
        });
    }
}


module.exports = ChatApp;