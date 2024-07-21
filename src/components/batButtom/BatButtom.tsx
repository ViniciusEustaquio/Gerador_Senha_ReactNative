import React, { useState } from "react";
import { Pressable, Text } from "react-native";

import { styles } from "./BatButtomStyles";
import { BatTextInput } from "../batTextInput/BatTextInput";
import generatePass from "../../services/passwordService";
import * as Clipboard from 'expo-clipboard';
import Slider from "@react-native-community/slider";

export function BatButtom() {
  
  const [pass, setPass] = useState('')
  const [passWordLength, setPassWordLength] = useState(8);
  
  
  function handleGenerateButton () {
    let generateToken = generatePass(passWordLength)
    setPass(generateToken)
  }
  
  function handleCopyButtonn () {
    Clipboard.setStringAsync(pass)
    alert('copiado')
    setPass('')
  }
  
  return (
    <>
      
      <BatTextInput pass={pass} />
      <Text style={styles.text}>Password size : {passWordLength}</Text>
      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={8}
        maximumValue={16}
        step={1}
        value={passWordLength}
        onValueChange={(value) => setPassWordLength(value)}
        minimumTrackTintColor="#E5BF3C"
        maximumTrackTintColor="#000000"
      />
      <Pressable style={styles.button}>
        <Text style={styles.text} onPress={handleGenerateButton}>
          GENERATE
        </Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}  onPress={handleCopyButtonn}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}
