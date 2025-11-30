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
  const [text, setText] = useState<string>("A simple text");

  const handleOnToggle = (): void => {    
      console.log("Button pressed");
      
      setText((prev) => 
        prev === "A simple text" ? "Hello World!" : "A simple text"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View>
        <Button 
            title="Click me" 
            onPress={handleOnToggle}
          />
      </View>
    </View>
  );
}
