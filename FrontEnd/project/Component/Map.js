import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, TouchableOpacity, } from 'react-native';

function Map() {
    const [start, startText] = React.useState('');
    const [end, endText] = React.useState('');
    const [stopover, stopoverText] = React.useState('');

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={startText}
                value={start}
                placeholder="출발 역 입력"
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={endText}
                value={end}
                placeholder="도착 역 입력"
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={stopoverText}
                value={stopover}
                placeholder="경유 역 입력(필요시)"
                keyboardType="default"
            />
            <SafeAreaView style={styles.button}>
                <TouchableOpacity>
                    <Text style={styles.text}>
                        검색
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    input: {
        width: 150,
        margin: 10,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: "#1E90FF",
        width: 70,
        height: 35,
        margin: 10,
        borderRadius: 5,
    },
    text: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8,
        marginLeft: 16,
        color: "white",
        fontSize: 20,
    }
})

export default Map;