const db = require('../data/db-config');

async function getPotlucks() {
    return db('potlucks')
    .orderBy('potluck_id');
}
module.exports = {
    getPotlucks,
};