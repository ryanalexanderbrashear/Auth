//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = (props) => { //Compnents should be named the same as the file they are in
    const { textStyle, viewStyle } = styles; //Pulling the styles we want to use from the styles object

    return (
        //Using the style prop to set the styles
        //You can also use props to make components dynamic (setting the header text below)
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = { //Styling for components goes within the component file
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};

//Make the component available to other parts of the app
export { Header }; //Make other files be able to make use of this component
