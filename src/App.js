import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyC2TsVgXsgCB0WPo3b8oKCM4nKYDbuKNLc",
            authDomain: "auth-216ad.firebaseapp.com",
            databaseURL: "https://auth-216ad.firebaseio.com",
            projectId: "auth-216ad",
            storageBucket: "auth-216ad.appspot.com",
            messagingSenderId: "360708838472"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
