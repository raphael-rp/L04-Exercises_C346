import { Image, StyleSheet, Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Boat = ({ icon_name, name, description, poster }) => {
    return (
        <View style={[styles.box, styles.card]}>
            <View style={styles.titleBar}>
                <FontAwesome6 name={icon_name} size={18} color="white" style={{ marginRight: 6 }} />
                <Text style={styles.nameText}>{name}</Text>
            </View>
            <View style={[styles.box, styles.descriptionBox]}>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
            <Image source={poster} style={styles.poster} />
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        borderWidth: 2,
        borderColor: "#555",
    },
    card: {
        backgroundColor: "#bbb",
        padding: 6,
        paddingTop: 20,
        marginBottom: 16,
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#555",
        paddingVertical: 8,
    },
    nameText: {
        color: "white",
        fontSize: 20,
        fontWeight: "300",
        letterSpacing: -1,
        textTransform: "uppercase",
    },
    descriptionBox: {
        backgroundColor: "#ddd",
        borderColor: "#999",
        borderWidth: 1,
        marginVertical: 20,
        marginHorizontal: 10,
        padding: 4,
    },
    descriptionText: {
        color: "black",
        fontSize: 14,
        textAlign: "center",
    },
    poster: {
        width: "100%",
        height: 300,
    },
});


export default Boat;
