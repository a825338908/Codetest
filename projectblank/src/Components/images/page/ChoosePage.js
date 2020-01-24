import React, {Component} from 'react';
import Login from '/Users/luohoiho/projectblank/src/Components/images/page/LoginPage.js';
import Signup from '/Users/luohoiho/projectblank/src/Components/images/page/Signup.js';
import {
    StackNavigator
} from 'react-navigation';
 
import Login from '/Users/luohoiho/projectblank/src/Components/images/page/LoginPage.js';
import Signup from'/Users/luohoiho/projectblank/src/Components/images/page/Signup.js';
export default class choosePage extends Component {
 
    render() {
        return (
            <MyNavigator/>
        );
    }
}
const MyNavigator = StackNavigator(
    {
        p1: {screen: login},
        p2: {screen: Signup},
    }, 
    {
        initialRouteName: 'p1',
    }
);