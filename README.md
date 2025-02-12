
## 一、环境配置

### 环境文件说明

```
  .env 总环境配置, 会和其它环境文件进行合并, 相同配置以环境配置为准
  .env.development    开发环境             不需要代理可以直接访问
  .env.test           测试环境             需要代理才可以访问
  .env.test2          第二套测试环境        不需要代理可以直接访问
  .env.pre            预发布               需要代理才可以访问
  .env.production     生产环境             不需要代理可以直接访问
  
  如果是本地特殊的配置或自己的配置, 请不要在这几个环境进行修改,  
  复制一个文件, 如.env.development.local 这个文件不会上传到GIT, 放心使用，这个是我们最安全的使用配置方式

```

## 运维构建打包

### 1. 环境限制 pnpm > 9  和node >=20.10.0

### 2. 构建命令
   pnpm run build-dev    打包开发环境

   pnpm run build-test1     打包第一套测试环境

   pnpm run build-pre     打包预发布环境 

   pnpm run build-sim     打包演示环境 
   
   pnpm run build-prod    打包生产环境
