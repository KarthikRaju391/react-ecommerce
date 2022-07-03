import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

function App() {
  const user = useSelector((state) => state.user);
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  const { notifyAdd, notifyUpdate } = useSelector((state) => state.product);
  const notifyUserAdd = useSelector((state) => state.users.notifyAdd);
  const notifyUserUpdate = useSelector((state) => state.users.notifyUpdate);
  return (
    <Router>
      <Switch>
        <Route path="/login">{!user && <Login />}</Route>
        {admin && (
          <>
            <Topbar />
            {(notifyAdd || notifyUserAdd) && (
              <Alert
                style={{ width: '30%', marginLeft: '67%' }}
                variant="filled"
                severity="success"
              >
                Added successfully
              </Alert>
            )}
            {(notifyUpdate || notifyUserUpdate) && (
              <Alert
                style={{ width: '30%', marginLeft: '67%' }}
                variant="filled"
                severity="success"
              >
                Updated successfully
              </Alert>
            )}
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
