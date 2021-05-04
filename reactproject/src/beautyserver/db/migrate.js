const createUserTable = (db) => {
    return new Promise((resolve, reject) => {
        db.run(`CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            phone TEXT NOT NULL,
            passwordHash TEXT NULL
        )`, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        });
    })
}

const setupTables = (db) => {
    return Promise.all([createUserTable(db)]);
}

module.exports = setupTables;