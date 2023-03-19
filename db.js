const { MongoClient } = require('mongodb');
let dbConnection;
exports.connectToDb = async (cb) => {
  try {
    const client = await MongoClient.connect(
      'mongodb://localhost:27017/bookstore'
    );
    dbConnection = client.db();
    return cb();
  } catch (error) {
    console.log(error);
    return cb(error);
  }
};
exports.getDb = () => dbConnection;
