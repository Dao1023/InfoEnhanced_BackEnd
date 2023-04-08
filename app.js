const express = require("express"); // 引入库
const app = express(); // 创建实例
const routes = require("./routes"); // 创建路由实例
const cors = require("cors"); // 添加 CORS 配置，用于通过浏览器的验证
const port = 3000; // 监听端口号
const mongodb = require("mongodb");

// 导入中间件
app.use('/', routes);
app.use(express.json());
app.use(cors);

// 发送到客户端的测试数据
app.get("/", (req, res) => {
  res.send("Hello World!");
});



// 端口监听
// http://192.168.31.241:3000
let server = app.listen(port, () => {
  // server.address().address 返回的是 ipv6
  const host = "localhost";
  const port = server.address().port;

  // 这两端标点居然是 ``
  console.log(`实例已创建，内部地址为 http://${host}:${port}`);
});
