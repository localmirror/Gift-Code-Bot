
    const { Deta } = require('deta');
    const deta = Deta(process.env.DETA_PROJECT_KEY);

    const db = deta.Base('bot_database');
    module.exports = db;
    