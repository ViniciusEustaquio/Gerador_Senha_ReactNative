import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { BatLogo } from "../../components/batLogo/BatLogo";
import { BatButtom } from "../../components/batButtom/BatButtom";

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <View style={styles.inputContanier}>
        <BatButtom/>
      </View>
      
    </View>
  );
}
