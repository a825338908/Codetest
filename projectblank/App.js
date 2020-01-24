import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import Login from '/Users/luohoiho/projectblank/src/Components/images/page/LoginPage.js';  /*Path to the Loginpage.js*/
import Signup from '/Users/luohoiho/projectblank/src/Components/images/page/Signup.js';   /*Path to the Signup.js*/

/**
 * createStackNavigator
 * Creates a stack of the routes.
*/
const Navigator = createStackNavigator({
    Login: { screen: Login },
    Signup: { screen: Signup },
});

/**
 * createAppContainer
 * Responsible for managing app state and linking
 * the top-level navigator to the app environment.
*/
const App = createAppContainer(Navigator);

export default App;