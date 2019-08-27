const port = process.env.PORT || 4000
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/dessert-db'

const secret = process.env.SECRET || 'Thisis@difficultp@ssworD'

module.exports = { secret, port, dbUri }
