# react-demo
- react虚拟dom：react可以将组合好的组件，生成虚拟dom保存在内存中，当组件状态变化的时候，对新生成的新的虚拟dom和真实的dom进行比较，针对变化的地方，进行局部渲染。
- react原理：react实现了这样一种机制：整个页面被分成一个个的组件，组件可以以元素标签的形式进行组合，组件自己控制该部分页面的状态和交互。
- react-router原理：与react结合对于不同的URL，将对于的组件进行组合，依托react进行局部渲染。
- redux原理：redux是flux架构的一种实现。redux有三大原则：1.单一数据源、2.state是只读的、3.使用纯函数来修改state。redux规定：用户对组件的操作的结果是发出action，redux对action进行dispatch操作，reducer接收旧的state和action生成新的state，新的state导致生成新的view
- redux-thunk原理：redux-thunk是redux的中间件，它于创建store的时候传入，redux-thunk修改stote.dispatch函数，使得原本只能返回对象的actionCreator可以返回函数，返回的函数接收两个参数，dispatch和getState，在该函数中可以dispatch action,这样实现了在actionCreator中进行异步操作的目的
