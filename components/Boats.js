import { Image, StyleSheet, Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Boat = ({ icon_name, name, description, poster }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>
                <FontAwesome6 name={icon_name} size={22} color="#757575" /> {name}
            </Text>
            <Text style={styles.descriptionText}>{description}</Text>
            <Image source={poster} style={styles.poster} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    nameText: {
        color: "#757575",
        fontSize: 24,
        fontWeight: "300",
        letterSpacing: -1,
        textTransform: "uppercase",
    },
    descriptionText: {
        color: "#757575",
        fontSize: 14,
    },
    poster: {
        width: 400,
        height: 300,
        maxWidth: "97%",
    },
});


export default Boat;
