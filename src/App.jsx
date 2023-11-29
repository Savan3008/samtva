import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Loader from './components/Loader';
import routes from './routes';

const Layout = lazy(() => import('./layout/Layout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {
  const [loading, setLoading] = useState(true);
  const [authUser, setAuthUser] = useState(() => {
    try {
      const item = window.localStorage.getItem("auth-user");
      return item ? JSON.parse(item) : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  window.unit_type_desc = ['FLATE', 'SHOP'];

  return loading ? (
    <Loader />
  ) : (
    <>
      <ToastContainer />
      <Routes>
        <Route exact path="/signin" element={authUser?.token ? (<Navigate to="/" />) : <SignIn setAuthUser={setAuthUser} />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="*" element={<Suspense fallback={<Loader />}><PageNotFound /></Suspense>} />
        <Route element={<Layout setAuthUser={setAuthUser} />}>
          {routes.map(({ path, component: Component }) =>
            <Route
              key={path}
              exact
              path={path}
              element={authUser?.token ?
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense> : (<Navigate to="/signin" />)
              }
            />
          )}
        </Route>
      </Routes>
    </>
  );
}

export default App;
