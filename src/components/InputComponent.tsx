import React from 'react'
import { KeyboardTypeOptions, TextInput } from 'react-native'
import { styles } from '../theme/appTheme';

//crear una interface
interface Props{
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    changeForm: (property: string, value: string)=>void;
    property: string;
    isPassword?: boolean;
    value?: string;
}

export const InputComponent = ({placeholder, keyboardType, changeForm, property, isPassword, value}: Props) => {
    return (
        <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={(value)=> changeForm(property, value)}
        secureTextEntry= {isPassword}
        style={styles.inputs}
        value={value}
        />

    )
}
