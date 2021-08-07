# 基于Vue3.0和TS开发实验室预约系统前端功能
版本依赖：
- vue 3.0.0 vue-router 4.0.0-0 vuex 4.0.0-0
- element-plus 1.0.2-beta.44 axios 0.21.1
***
### 2021/6/8
1. 添加导出预约信息的功能。
2. 编写一个service处理流请求的ts文件，处理导出信息的功能。
### 2021/6/7
1. 添加管理员端查看所有课程信息。
2. 添加管理员端查看所有预约情况信息。
3. 添加分页组件，完成分页功能。
### 2021/5/31
1. 添加一个dialog，使得选课界面更加直观也更合适。
2. 完成预约功能。
3. 添加一个checkbox选择时动态计算剩余可选数量的功能。
### 2021/5/30
1. 处理预约实验室的 table 数据以及渲染方式
2. 模拟一个Section集合，用于表格的初始数据。
### 2021/5/28
1. :index 绑定table 自定义索引
### 2021/5/26
1. 踩坑：从sessionStorage中取得的对象是JSON字符串，需要解析，没解析就去取id值，但是eslint报错：Parsing error: Unexpected token。 最后发现跟这个毫无关系，就是JSON没解析。
2. 课程的CURD接口api调用。
### 2021/5/25
1. 处理教师路由组件。
### 2021/5/24
1. 踩坑：el-checkbox 标签 label 双向绑定转递值，但是类型只有string / number / boolean 因为这个原因导致我想传{id: 1}这样的数据根本传不了，最后发现根本不允许这么传，被迫在前端拼接这样的对象才成功调用api接口。
2. 踩坑：当响应式数据中如果有数组类型时，一定要显示声明对象中含有一个空数组 eg：{[]} 不然会有bug。
### 2021/5/23
1. 调用后端实验室api接口的CURD，完成前端样式的渲染。引入dialog，tag样式，编辑信息时弹出对话框。
2. 解决bug：使用赋值操作以防双向绑定时用户在输入框输入时导致视图也跟着响应更改。 Object.assign(updateLabForm.value, data);
### 2021/5/22
1. 修改登录时验证码输入错误时加载动画一直显示的bug。
2. 完成首页回显用户信息。
3. 处理老师和管理员的路由。完成对后端实验室api接口的调用，调用接口时，要写 /api/xxx/ 最后还要带一个/ 不知道为什么，调了好久才调出来。
4. 引入表格来显示实验室信息，表格中的 template标签不去掉不显示表格，也是调了好久才找到。
### 2021/5/19
1. 配置完axios的拦截器之后，请记住每次发请求时一定要引入配置了拦截器的axios，不要引入原生的axios，否则拦截器不生效。还有的是ts太难了！！！ts出错每次都要排查好久好久！！！
2. router.replace() 不可以通过浏览器的回退按钮回到上一页 router.push() 可以通过浏览器的回退按钮回到上一页。
3. 通过vue3.0的获取路由的方法。 const router = useRouter(); 登录成功之后路由到index组件。
4. 登录成功后，后端返回封装的token格式由前端拼接token放在sessionStorage中，编写请求拦截器，每次请求根据后端传来的请求头key的格式，把拼接好的token按规定放在请求头里。
5. 引入加载动画。
### 2021/5/18
1. 使用表单组件样式，编写登录组件，实现响应拦截器，封装json格式的网络请求
2. 引入警告框组件
3. 编写 vue.config.js 编写前后端跨域的代理配置
4. 前后端联调登录验证码的api接口调用
### 2021/5/17
1. 添加element-plus完成基本的ui调用 
