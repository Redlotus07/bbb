import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './index.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="container">
                    <Header />
                    <div style={{ display: 'flex' }}>
                        <Sidebar />
                        <main>
                            <Switch>
                                <Route path="/login" component={Login} />
                                <PrivateRoute path="/dashboard" component={Dashboard} />
                                <Route path="/" exact component={Login} />
                            </Switch>
                        </main>
                    </div>
                </div>
            </Router>
        </Provider>
    );
};

export default App;