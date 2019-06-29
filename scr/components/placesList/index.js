import React from "react";
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';

const PlaceList = (props) => (
    <TouchableOpacity onPress={props.itemOnPressed}>
        <View style={styles.list}>
            <Text>{props.place}</Text>
        </View>
    </TouchableOpacity>

);

const styles = StyleSheet.create({
    list: {
        width: "100%",
        backgroundColor: "#e1e1e1",
        padding: 5,
        marginTop: 5

    }
});

export default PlaceList