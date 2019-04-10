import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common'; 

class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });


        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailure.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({ 
            error: '', 
            loading: false, 
            email: '', 
            password: '' 
        });
    }

    onLoginFailure() {
        this.setState({
            error: 'Authentication failed.',
            loading: false,
            email: '',
            password: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small'/>
        } 

        return <Button title='Log In' onPress={this.onButtonPress.bind(this)} />
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
                    {this.renderButton()}
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