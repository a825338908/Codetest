import React,{Component} from 'react';
import 
{ 
  StyleSheet, 
  Text, 
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';


export default class LoginPage extends React.Component{
    static navigationOptions = {   
        title: 'Login Page',
    };

  render(){
      const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text
          style={styles.titleline1}>
          Welcome to
        </Text>

        <Text
          style={styles.titleline2}>
          MediConSen
        </Text>

        <Text
          style={styles.titleline3}>
          Your one-step medical experience {"\n"}
          starts here.
        </Text>      

        <Image
          style={styles.icon}
          source={require("/Users/luohoiho/projectblank/src/Components/images/CompanyLogo.png")} /* Path of the Company Logo*/
        />  

        <Image
          style={styles.loginimage}
          source={require('/Users/luohoiho/projectblank/src/Components/images/LoginLogo.png')} /* Path of the Login Logo*/
        />   
        
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        <View>
          <TouchableOpacity style={styles.signinBtn}
          onPress={() => alert("work")}>
            <Text style={styles.signinbTnTxt}>Sign in</Text>
          </TouchableOpacity>
          <Button
                    title="Sign Up"
                    onPress={() => navigate(
                        'Signup'
                    )}
                />         
        </View>

      </View>
    );
  }  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    top:-200,
    bottom:0,
    left:110,
    right:0,
  },
  loginimage: {
    top:-150,
    bottom:0,
    left:0,
    right:0,
  },  
  titleline1: {
    top:-60,
    bottom:0,
    left:-134,
    right:0,
    fontSize:18,
  },
  titleline2: {
    top:-70,
    bottom:0,
    left:-60,
    right:0,
    fontSize:44,
    color: 'pink'    
  }, 
  titleline3: {
    top:-80,
    bottom:0,
    left:-30,
    right:0,
    fontSize:20  
  },
  input: {
    width: "90%",
    height: "5%",
    backgroundColor:"#fff",
    top:-70,
    padding:15,
    marginBottom:10
  },
  signinBtn: {
    backgroundColor: "pink",
    padding: 15,
    width:"45%",
    borderRadius:10,
    top:-60
  },
  signupBtn: {
    backgroundColor: "pink",
    padding: 15,
    width:"45%",
    borderRadius:100,
    top:70,
    left:120
  },
  signinbTnTxt: {
    fontSize:18,
    textAlign:"center",
    color:"white"
  },
  signupbTnTxt: {
    fontSize:18,
    textAlign:"center"
  }  

  
});

