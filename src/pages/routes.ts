import Create from './Create';
import Setting from './Setting';
import Login from './Login';
import Project from './Project';

interface RouteItem {
  key: string;
  path: string;
  component: any;
}

const routes: RouteItem[] = [
  { key: 'project', path: '/project', component: Project },
  { key: 'create', path: '/create', component: Create },
  { key: 'setting', path: '/setting/:id', component: Setting },
  { key: 'login', path: '/login', component: Login },
]

export default routes;
