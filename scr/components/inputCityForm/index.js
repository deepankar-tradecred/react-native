import React, {Component} from "react";
import {Button, StyleSheet, TextInput, View} from 'react-native';

class PlaceInput extends Component {

    state = {
        placeName: "",
    };

    handleInputChange = (event) => {
        this.setState({placeName: event}, () => {
            console.log(this.state.placeName)
        });
    };
    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return
        }
        this.props.onPlaceAdded(this.state.placeName);
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={this.handleInputChange}
                    placeholder="email"
                    value={this.state.text}
                    style={styles.placeholderInput}
                />
                <Button title="Add"
                        style={styles.placeholderButton}
                        onPress={this.placeSubmitHandler}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeholderInput: {
        width: "70%",
        borderBottomWidth: 1,
        borderColor: "black"

    },
    placeholderButton: {
        width: "30%"
    }
});

export default PlaceInput