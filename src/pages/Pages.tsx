import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Project from './Project';
import Loading from './Loading';
import routes from './routes';

import Header from '../component/Header';

import "./index.css";

const prefix = '/';

export default () => (
  <div className="pages">
    <Router>
      <Suspense fallback={<Loading />}>
        <Header></Header>
        <Routes>
          {routes.map(item => (
            <Route key={item.key} path={prefix + item.path} element={<item.component />} />
          ))}
          <Route
            key={'404'}
            path={'*'}
            element={<Project />}
          />
        </Routes>
      </Suspense>
    </Router>
  </div>
)
