## 项目介绍
angular+angular-route+express+mongoose

## 1. 初始化项目
###  1.1 初始化package.json
```
mkdir 201606chat2
cd 201606chat2
npm init -y
```

### 1.2 初始化bower.json
```
bower init
```

### 1.3 创建.bowerrc文件
```
{
  "directory":"./public/lib"
}
```

##  2. 安装依赖的模块
### 2.1. 前端依赖
```
bower install angular angular-route bootstrap --save
```

### 2.2. 后端依赖
```
npm install express socket.io cookie-parser express-session mongoose --save
```

