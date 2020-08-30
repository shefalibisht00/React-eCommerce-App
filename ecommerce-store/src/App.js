import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';
import { connect } from 'react-redux';
import HomePage from './pages/home-page/Homepage.component';
import ShopPage from './pages/shop-page/shop.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // createUserProfileDocument returns userRef
        const userRef = await createUserProfileDocument(userAuth);
        // SnapShot method returns the snapshot of user's data stored in the database
        userRef.onSnapshot(snapShot => {
           setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }
        setCurrentUser(userAuth);
        });
      }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);