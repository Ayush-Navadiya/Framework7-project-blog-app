import LoginPage from '../pages/Login.f7';
import SignupPage from '../pages/signup.f7';
import BlogPage from '../pages/blog.f7';


let data;
import NotFoundPage from '../pages/404.f7';

var routes = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/signup/',
    component: SignupPage,
  },
  {
    name: 'blog',
    path: '/blog/',
    component: BlogPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;