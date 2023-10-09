import {StyleSheet, Text, View, Image, Pressable, TextInput,Button } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';

const accounts = [
    {
        user : 'vocuong',
        pass : '123456'
    },
    {
        user : 'vocuong1',
        pass : '1234561'
    }
]



function App() {
  var [user,setUser] = useState('');
  var [pass,setPass] = useState('');


  const checkAccount = function(username , password) {
  let check =  accounts.some((acount) => {
     return acount.user === username && acount.pass === pass;
   }); 
   return check;
  }  
  const login = (user,pass) => {
    let check = checkAccount(user,pass);  
    if(checkAccount(user,pass)) {            
      alert('login accsess');
    }else {        
      alert('login false');
    }
   }
  return (
    
    <View style={styles.wrap}>
      <LinearGradient
        colors={["#FBCB00", "#BF9A00"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.titleOn}>LOGIN</Text>
          </View>
          <View style={styles.user}>
            <Image style={styles.img2} source={require('../assets/avatar_user 1.png')} />
            <TextInput style={styles.input} placeholder='Name' onChangeText={setUser}/>
          </View>
          <View style={styles.password}>
            <Image style={styles.img} source={require('../assets/lock-152879 1.png')} />
            <TextInput secureTextEntry={true} style={styles.input1} placeholder='Password' onChangeText={setPass}/>
            <Image style={styles.img1} source={require('../assets/eye 1.png')} />
          </View>
          <View style={styles.button}>
            <Pressable style={styles.button1}>
              <Button title = 'Login' style={styles.buttonClick} onPress={()=>login(user,pass)} ></Button>
            </Pressable>
          </View>
          <Text style={styles.click}>CREATE ACCOUNT</Text>
        </View>
      </LinearGradient>
    </View>
    
  );   
  
}
 
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial',
  },
  click: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 300,
    textAlign: 'center',
    marginTop: 50,
  },
  password: {
    flexDirection: 'row',
  },
  user: {
    flexDirection: 'row',
  },
  input1: {
    backgroundColor: '#C4C4C4',
    width: 280,
    borderRadius: 1,
    padding: 10,
    marginTop: 30,
    height: 50,
  },
  img: {
    width: "38px",
    height: "36px",
    marginTop: 30,
    backgroundColor: '#C4C4C4',
    height: 50,
    resizeMode: 'contain',
    alignItems: 'flex-start',
  },
  img1: {
    width: "38px",
    height: "36px",
    marginTop: 30,
    backgroundColor: '#C4C4C4',
    height: 50,
    resizeMode: 'contain',
  },
  img2: {
    width: "38px",
    height: "36px",
    marginTop: 30,
    backgroundColor: '#C4C4C4',
    height: 50,
    resizeMode: 'contain',
    alignItems: 'flex-start',
  },
  linearGradient: {
    height: "100%",
  },
  input: {
    backgroundColor: '#C4C4C4',
    width: 320,
    borderRadius: 1,
    padding: 10,
    marginTop: 30,
    height: 50
  },
  wrap: {
    flex: 1
  },
  title: {
    marginRight: 250
  },
  titleOn: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    alignItems: 'flex-start',
    marginTop: -80,
  },
  titleUp: {
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    width: 300,
    textAlign: 'center',
    marginTop: 40,
    fontWeight: '600',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
  },
  button1: {
    backgroundColor: '#060000',
    marginTop: 80,
    borderRadius: 1,
    width: 350,
    fontWeight: '300',
  },
  buttonClick: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontWeight: '700',
  },
});
