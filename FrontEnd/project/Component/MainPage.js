import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, } from 'react-native';

function MainPage({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Click Start!!
            </Text>
            <SafeAreaView style={styles.button}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Map")}
                >
                    {/* 커스텀 버튼을 만들기 위해 사용*/}
                    <Text style={styles.buttonText}>
                        Start
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({ //자동완성이 필요할 경우 무조건 쓰기!
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginHorizontal: 16
    },
    text: {
        marginTop: 160,
        fontSize: 40,
    },
    button: {
        marginTop: 240,
        backgroundColor: "#1E90FF",
        alignSelf: 'center',
        justifyContent: 'center',
        width: 200,
        height: 100,
        borderRadius: 30,
        borderTopRightRadius: 80,
    },
    buttonText: {
        marginLeft: 20,
        color: "white",
        fontSize: 75,
    }
});

export default MainPage;