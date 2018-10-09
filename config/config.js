export default {
  singular: true,
  routes: [{
    path: '/',
    component: '../layout/index',
    routes: [
      {
        path: './helloworld',
        component: './HelloWorld',
      },
    ]
  }],
  plugins: [
    ['umi-plugin-react', {
      antd: true
    }],
  ],
};