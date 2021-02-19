import { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));
const SingleUser = lazy(() => import('./pages/SingleUser'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Provider store={store}>
            <Layout>
              <Route path='/' exact component={Home} />
              <Route path='/users' exact component={Users} />
              <Route path='/users/:userId' exact component={SingleUser} />
            </Layout>
          </Provider>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
