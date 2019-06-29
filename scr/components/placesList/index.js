import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const PlaceList = (props) => (
    <TouchableOpacity onPress={props.itemOnPressed}>
        <View style={styles.list}>
            <Image source={props.image} style={styles.image}/>
            <Text>{props.place}</Text>
        </View>
    </TouchableOpacity>

);

const styles = StyleSheet.create({
    list: {
        width: "100%",
        backgroundColor: "#e1e1e1",
        padding: 5,
        marginTop: 5,
        alignItems: "center",
        flexDirection: "row"
    },
    image: {
        marginRight: 8,
        height: 30,
        width: 30
    }
});

export default PlaceList