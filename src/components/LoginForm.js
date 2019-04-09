import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common'; 

class LoginForm extends Component {
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input label='Email' value={this.state.text} onChangeText={text => this.setState({ text: text })} />
                </CardSection>
                
                <CardSection>

                </CardSection>

                <CardSection>
                    <Button title="Login" onPress={() => console.log('Pressed')} />
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;