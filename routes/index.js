const express = require("express"); // 导入 express 框架
const route = express.Router(); // 创建实例
const path = require("path"); // 文件路径
const fs = require("fs"); // 文件读取
const bodyParser = require("body-parser"); // post 请求体解析

const dataFilePath = path.join(__dirname, "./data/test.json"); // 读取数据

// 读取数据
const readData = () => {
  const rawData = fs.readFileSync(dataFilePath);
  return JSON.parse(rawData);
};

// 写入数据
// const writeData = (data) => {
//   fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), (err) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log("写入成功");
//     }
//   });
// };

// 常用的 REST API 举例
// get 安全地获取数据
// post 创建数据
// put 更新数据
// fatch 很少用，不如 put 安全
// delete 删除数据

// 基本的两类数据
// req 是 request 对象，表示客户端的 http 请求
// res 是 response 对象，表示服务端的 http 响应
// 详情请查看 https://www.runoob.com/nodejs/nodejs-express-framework.html

// get 一下 json 全部文件
route.get("/api", (req, res) => {
  fs.readFile(file, "utf-8", (err, data) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // 加入响应头
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // 加入响应头
  res.setHeader('GET, POST, PUT, DELETE, OPTIONS', 'Content-Type'); // 加入响应头
    if (err) {
      res.send("file read error: " + err.message());
    } else {
      res.send(data);
    }
  });
});

// post 方法是创建新数据
// route.post("/api/:site", (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*'); // 加入响应头

//   const site = req.params.site;
//   const newData = req.body;

//   const data = readData();
//   if (data.data[site]) {
//     data.data[site].push(newData);
//   } else {
//     data.data[site] = [newData];
//   }

//   writeData(data);
//   res.send('Data added successfully');

// });

// 删除网站数据
// route.delete('/api/:site', (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*'); // 加入响应头

//   const site = req.params.site;
//   const index = req.query.index;

//   const data = readData();
//   if (data.data[site]) {
//     if (index) {
//       data.data[site].splice(index, 1);
//     } else {
//       delete data.data[site];
//     }

//     writeData(data);
//     res.send('Data deleted successfully');
//   } else {
//     res.status(404).send('Site not found');
//   }
// });

module.exports = route;
