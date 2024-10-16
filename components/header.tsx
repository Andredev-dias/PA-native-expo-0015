import { View, Text, Image, ImageSourcePropType, StyleSheet } from "react-native"


export const Header = ({image} : {image: ImageSourcePropType }) => {
    return(
        <>
            <View style={styles.background}>
                <Text style={styles.temQSerNoText}>Header exemplo</Text>
                <Image source={image}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#090909",
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        paddingHorizontal: 10,
        paddingVertical: 30
        },
    temQSerNoText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 30,
    }
})