import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header, Button, Spinner } from './components/common';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyC2TsVgXsgCB0WPo3b8oKCM4nKYDbuKNLc",
            authDomain: "auth-216ad.firebaseapp.com",
            databaseURL: "https://auth-216ad.firebaseio.com",
            projectId: "auth-216ad",
            storageBucket: "auth-216ad.appspot.com",
            messagingSenderId: "360708838472"
        });

        //onAuthStateChanged is called whenever a user is signed in or out
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true: 
                return (
                    <Button 
                        title='Log Out'
                        onPress={() => firebase.auth().signOut()}
                    />
                );
            case false: 
                return <LoginForm />
            default: 
                return (
                    <Spinner size='large' />
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                { this.renderContent() }
            </View> 
        );
    } 
}

export default App;
