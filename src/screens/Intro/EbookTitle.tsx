import React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';


function authorHelper(authorId) {
    return authorId
}





function EbookTile(props) {
    return (
        <View style={[styles.container, props.style]}>
            <Image 
            style={styles.thumbnailImage}
            source={{uri:props.data.image.thumb.url}}
            />
            <Text style={styles.title}>{props.data.title}</Text>
            <Text style={styles.author}>{authorHelper(props.data.author_id)}</Text>
            <Text style={styles.author}>2002</Text>
            <Text style={styles.annotationCount}>Annotations: {props.data.annotation_count}</Text>
        </View>


    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection:"column",
        alignItems: "center",
        width: 160,
		height: 314,
		marginRight: 30
    },
    thumbnailImage: {
        width: 162,
        height: 226,
        borderRadius:10
    },
    title: {
        marginTop: 14,
        marginBottom: 7,
        alignSelf: "flex-start",
        fontSize: 14,
        lineHeight: 16,
        color: "#0B0B0B"
    },
    author: {
        alignSelf: "flex-start",
        fontSize: 12,
        lineHeight: 14,
        color: "#217CE2"
    },
    annotationCount: {
        alignSelf: "flex-start",
        fontSize:12,
        lineHeight:14,
        color: "#9D9D9D",
        marginTop: 6
    }
});



export default EbookTile;