import { useState } from "react";
import { Text, TextInput, View, CheckBox, StyleSheet, TouchableOpacity } from "react-native";

const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const number = '0123456789'
const specialSymbol = '`~!@#$%^&*()_+-={}[]\|;:,.<>/?'

function Bai2() {
    const [generatedString, setGeneratedString] = useState('')
    const [length, setLength] = useState(0)
    const [isLowerCase, setIsLowerCase] = useState(false)
    const [isUpperCase, setIsUpperCase] = useState(false)
    const [isNumber, setIsNumber] = useState(false)
    const [isSpecialSymbol, setIsSpecialSymbol] = useState(false)

    const handleGenerate = () => {
        let string = ''
        let generateString = ''
        
        if(!(length > 0 && length < 21) || (!isLowerCase && !isNumber && !isUpperCase && !isSpecialSymbol))
            alert('Please pick a selection')
        else if(isLowerCase && isNumber && isUpperCase && isSpecialSymbol) {
            string = upperCase + lowerCase + number + specialSymbol
            for(let i = 0; i < length; i++) {
                generateString += string.charAt(Math.floor(Math.random() * string.length))
            }
            setGeneratedString(generateString)
        }
        else if(isLowerCase || isUpperCase || isNumber || isSpecialSymbol) {
            if(isLowerCase)
                string += lowerCase
            if(isUpperCase)
                string += upperCase
            if(isNumber)
                string += number
            if(isSpecialSymbol)
                string += specialSymbol

            for(let i = 0; i < length; i++) {
                generateString += string.charAt(Math.floor(Math.random() * string.length))
            }
            setGeneratedString(generateString)
        }

    }

    return ( 
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>PASSWORD<br />GENERATOR</Text>
                <View style={styles.bodyWrapper}>
                    <View style={styles.passwordWrapper}>
                        <Text style={styles.password}>{generatedString}</Text>
                    </View>
                    <View style={styles.conditionWrapper}>
                        <Text style={styles.conditionTxt}>Password length</Text>
                        <TextInput style={styles.lengthInput} value={length} onChangeText={setLength} />
                    </View>
                    <View style={styles.conditionWrapper}>
                        <Text style={styles.conditionTxt}>Include lower case letters</Text>
                        <CheckBox style={styles.conditionCheckbox} value={isLowerCase} onValueChange={setIsLowerCase} />
                    </View>
                    <View style={styles.conditionWrapper}>
                        <Text style={styles.conditionTxt}>Include upcase letters</Text>
                        <CheckBox style={styles.conditionCheckbox} value={isUpperCase} onValueChange={setIsUpperCase}/>
                    </View>
                    <View style={styles.conditionWrapper}>
                        <Text style={styles.conditionTxt}>Include number</Text>
                        <CheckBox style={styles.conditionCheckbox} value={isNumber} onValueChange={setIsNumber}/>
                    </View>
                    <View style={styles.conditionWrapper}>
                        <Text style={styles.conditionTxt}>Include special symbol </Text>
                        <CheckBox style={styles.conditionCheckbox} value={isSpecialSymbol} onValueChange={setIsSpecialSymbol}/>
                    </View>
                </View>
                <View style={styles.btnWrapper}>
                    <TouchableOpacity style={styles.generateBtn} onPress={handleGenerate}>
                        <Text style={styles.btnTxt}>GENERATE PASSWORD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
     );
}

export default Bai2;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#3B3B98',
        backgroundImage: 'radial-gradient(circle, rgba(196,196,196,1) 0%, rgba(59,59,152,1) 100%)',
    },
    wrapper: {
        // height: '100%',
        margin: 20,
        borderRadius: 15,
        backgroundColor: '#23235B',
        paddingBottom: 38,
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    bodyWrapper: {
        margin: 15,
    },
    passwordWrapper: {
        backgroundColor: '#000',
        width: '100%',
        height: 55,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    password: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 25,
    },
    conditionWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    conditionTxt: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 20,
    },
    lengthInput: {
        width: 120,
        height: 30,
        backgroundColor: '#fff',
        marginTop: -3,
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 20,
    },
    conditionCheckbox: {
        width: 25,
        height: 25,
    },
    btnWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    generateBtn: {
        width: 270,
        height: 55,
        backgroundColor: '#3B3B98',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    btnTxt: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 18,
    },
})