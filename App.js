import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PlaceInput from "./scr/components/inputCityForm";
import ShowList from "./scr/components/showList";
import PlaceImage from "./scr/asserts/image/Raffaele-Cabras_5-bef.jpg"

export default class App extends Component {

    state = {
        places: []
    };

    onPlaceAdded = (placeName) => {
        if (placeName.trim() === '') {
            return
        }
        const data= {key: `${Math.random()}`, name: placeName, image: PlaceImage};
        this.setState({places: [...this.state.places, data]},()=>{console.log(this.state.places)});
    };

    deleteHandler = (index) => {
        this.setState((prevState) => {
            return {
                places: prevState.places.filter((places) => {
                    return places.key !== index;
                })
            }
        })
    };


    render() {
        return (
            <View style={styles.container}>
                <PlaceInput onPlaceAdded={this.onPlaceAdded}/>
                <ShowList places={this.state.places} itemDelete={this.deleteHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 25
    }
});