import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [bgColor, setbgColor] = useState("");

  return (
    <ImageBackground
      source={require("../assets/BackgroundImage.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <Text style={styles.title}>Let's Chat!</Text>
      <View style={styles.container}>
        {/* text input container */}
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Your Name"
          />
        </View>
        {/* background color container */}
        <View style={styles.backgroundColorContainer}>
          <Text style={styles.chooseBackgroundColor}>
            Choose Background Color:
          </Text>
          <View style={styles.colorOptions}>
            <TouchableOpacity
              style={[styles.color1, styles.colorOptionRounding]}
              onPress={() => {
                setbgColor("#090C08");
                console.log("black");
              }}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.color2, styles.colorOptionRounding]}
              onPress={() => {
                setbgColor("#474056");
                console.log("purple");
              }}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.color3, styles.colorOptionRounding]}
              onPress={() => {
                setbgColor("#8A95A5");
                console.log("blue");
              }}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.color4, styles.colorOptionRounding]}
              onPress={() => {
                setbgColor("#B9C6AE");
                console.log("green");
              }}
            ></TouchableOpacity>
          </View>
        </View>
        {/* start chatting button container */}
        <View style={styles.startChattingButtonContainer}>
          <TouchableOpacity
            style={styles.startChattingButton}
            onPress={() =>
              navigation.navigate("Chat", { name: name, bgColor: bgColor })
            }
          >
            <Text style={styles.startChattingText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </View>
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#ffffff",
    height: "35%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "88%",
    height: "44%",
    backgroundColor: "#ffffff",
  },
  textInputContainer: {
    flex: 3,
    width: "100%",
    alignItems: "center",
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    opacity: 0.5,
  },
  backgroundColorContainer: {
    flex: 3,
    width: "100%",
    alignItems: "center",
  },
  chooseBackgroundColor: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 1,
  },
  colorOptions: {
    flexDirection: "row",
    width: "88%",
    justifyContent: "space-between",
    margin: 20,
  },
  colorOptionRounding: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  color1: {
    backgroundColor: "#090C08",
  },
  color2: {
    backgroundColor: "#474056",
  },
  color3: {
    backgroundColor: "#8A95A5",
  },
  color4: {
    backgroundColor: "#B9C6AE",
  },
  startChattingButtonContainer: {
    flex: 3,
    width: "88%",
    justifyContent: "center",
  },
  startChattingButton: {
    backgroundColor: "#757083",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  startChattingText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});

export default Start;
