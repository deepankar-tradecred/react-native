import React, {Component} from "react";
import {FlatList,StyleSheet} from 'react-native';
import PlaceList from "../placesList";


const  ShowList = (props) =>  {
        return (
            <FlatList
                style={styles.placesList}
                data={props.places}
                renderItem={(info) => {
                    return <PlaceList
                        key={info.item.key}
                        place={info.item.name}
                        image={info.item.image}
                        itemOnPressed={() => props.itemDelete(info.item.key)}/>
                    }
                }
            />
        );
};

const styles = StyleSheet.create({
    placesList: {
        width: "100%",
    }
});

export default ShowList