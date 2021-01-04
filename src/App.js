import React from 'react';
import './App.css';
import Homepage from './Pages/homepage/Homepage.component'
import{Route,Switch,Redirect} from 'react-router-dom'
import ShopPage from './Pages/Shop/Shop.Component.js'
import Header from './Componets/Header/Header.component'
import SignInandSignUp from './Pages/SignInandSignUp/SignInAndSignUP'
import CheckoutPage from './Pages/checkout/checkout.page'


import {connect } from 'react-redux'
import {auth,createUserProfileDocument} from './Firebase/firebase.utils'

import {selectCurrentUser} from './redux/user/user.selector'
import {setCurrentUser} from './redux/user/user.action'
import AddItem from './Pages/AddProduct/addproduct';
class App extends React.Component{


  unsubscribeFromAuth = null;
    componentDidMount() {

      const {setCurrentUser}=this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

     setCurrentUser (userAuth );
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route  path='/additem' component={AddItem}/>
      <Route path='/checkout'component={CheckoutPage}/>
      <Route exact  path='/SignIn' render={()=>this.props.currentUser?
      (<Redirect to='/'/>):(<SignInandSignUp/>)
    } />

      </Switch>
      </div>
  )
}
}

const mapStateToProps=state=>({
  currentUser:selectCurrentUser(state)
});

const mapDispatchToProps = dispatch =>({
setCurrentUser :user =>dispatch ( setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)( App);
