import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MotiView } from "moti";
import React, { useState } from "react";
import { Text } from "react-native-paper";

const RecognitionButton = () => {
  const [active, setActive] = useState(false);

  return (
    <View style={styles.container}>
      {active && <Text style={styles.listeningText}>Listening...</Text>}
      <TouchableOpacity onPress={() => setActive(!active)} style={styles.button}>
        {active && (
          <MotiView
            from={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{ loop: true, duration: 1000 }}
            style={styles.ripple}
          />
        )}
        <Ionicons name="mic" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#1E3A8A",
  },
  listeningText: {
    position: "absolute",
    top: "40%",
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 50,
  },
  ripple: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(59, 130, 246, 0.5)",
  }
});

export default RecognitionButton;