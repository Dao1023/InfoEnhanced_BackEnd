const MongoClient = require("mongodb").MongoClient; // 导入库
const url = "mongodb://localhost:27017";

// 连接数据库并获取
MongoClient.connect(url, (err, client) => {
  console.log("Connected successfully to server");
  const db = client.db("mytestdb");
  console.log(db.toJSON());
  client.close();
});