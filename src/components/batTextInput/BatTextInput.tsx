import React from 'react';
import {TextInput } from 'react-native';

import { styles } from './BatTextInputStyle';

interface BatTextInputProps{
  pass: string
}


export function BatTextInput(props: BatTextInputProps) {
  
  
  return (
    
        <TextInput value={props.pass} style={styles.inputer} placeholder='pass' >
            
        </TextInput>
    
  );
}