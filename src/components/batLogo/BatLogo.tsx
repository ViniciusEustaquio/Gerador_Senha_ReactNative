import React from 'react';
import { View, Text, Image } from 'react-native';
import batLogo from '../../../assets/bat-logo.png'

import { styles } from './BatLogoStyle';

export function BatLogo() {
  return (
    <View >
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image style={styles.image} source={batLogo} />
    </View>
  );
}