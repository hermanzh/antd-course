export default {
  singular: true,
  routes: [{
    path: '/',
    component: '../layout/index',
    routes: [
      {
        path: '/helloworld',
        component: './HelloWorld',
      },
      {
        path: '/',
        component: './HelloWorld',
      },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' },
        ]
      },
    ]
  }],
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
    }],
  ],
};