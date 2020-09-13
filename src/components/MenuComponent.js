import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonGroup, Text } from 'react-native-elements';

const styles = StyleSheet.create({
    container: { 
        marginLeft: 0, 
        marginBottom: 0, 
        height: 50, 
        width: '100%' 
    }
});

export default class MenuComponent extends Component {

    state = {
        index: 1
    }

    constructor(props) {
        super(props);
        this.buttons = [{ element: () => <Text>Hello</Text> }, { element: () => <Text>World</Text> },
        { element: () => <Text>ButtonGroup</Text> }];

    }

    render() {
        return (
            <ButtonGroup
                onPress={(index) => { this.setState({ index }) }}
                selectedIndex={this.state.index}
                buttons={this.buttons}
                containerStyle={styles.container} />
        )
    }
}

