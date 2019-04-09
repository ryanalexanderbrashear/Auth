import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        //Components automatically receive all children that are placed within them (see AlbumDetail) as part of the props that are passed to the component
        <View style={styles.containerStyle}> 
            {props.children} 
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#DDD',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10 
    }
};

export { Card };
