import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common'; 

class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        error: ''
    };

    onButtonPress() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
                this.setState({ error: 'Authentication failed.' });
            });
        });
    }

    render() {
        const { errorTextStyle } = styles;

        return (
            <Card>
                <CardSection>
                    <Input 
                        label='Email' 
                        placeholder='user@gmail.com' 
                        value={this.state.email} 
                        onChangeText={email => this.setState({ email })} 
                    />
                </CardSection>
                
                <CardSection>
                    <Input 
                        label='Password' 
                        placeholder='password'
                        secureTextEntry
                        value={this.state.password} 
                        onChangeText={password => this.setState({ password })} 
                    />
                </CardSection>

                <Text style={errorTextStyle}>
                    {this.state.error} 
                </Text>

                <CardSection>
                    <Button 
                        title="Login" 
                        onPress={this.onButtonPress.bind(this)} 
                    />
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        marginTop: 10,
        marginBottom: 10
    }
};

export default LoginForm;