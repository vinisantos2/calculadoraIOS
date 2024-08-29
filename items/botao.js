import React from 'react';

import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { DIMENSIONS } from './Constant';


export default function Botao({ onPress, value, cor = '#313131', width = DIMENSIONS, corText = "#fff" }) {


    return (
        <TouchableOpacity onPress={onPress} style={[styles.botao, { width: width, backgroundColor: cor }]}>
            <Text style={[styles.text, { color: corText }]}>{value}</Text>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({

    botao: {
        backgroundColor: '#A1A1A1',
        borderRadius: 100,
        height: DIMENSIONS,
        width: DIMENSIONS,
        marginHorizontal: 6,
        marginVertical: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {

        fontSize: 40,
        fontWeight: '500'

    },

});