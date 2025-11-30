import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        backgroundColor: "green",
        color: "white",
        marginBottom: 10,
        borderRadius: 5,
    }, 
    // other styles
})

export default function Index() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>A simple text</Text>
      <View>
        <Button 
            title="Click me" 
            onPress={() => {
            console.log("Button pressed");
            setIsPressed(true)
          }}
          />
      </View>
    </View>
  );
}
