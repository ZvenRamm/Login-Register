import {View, Text, TextInput, TouchableOpacity, SafeAreaView,StyleSheet, 
    Image, Button} from 'react-native'
import styles from '../../styles/login/Login.js'

function Login(props){

const {navigation} = props
const goToRegister=()=>{

navigation.navigate("Registro")

}
return(
   <SafeAreaView style={styles.container}>
    <View style={styles.firstSection}>
        <Image
            source={{
                uri:'https://cdn.pixabay.com/photo/2017/09/08/17/05/elephant-2729413_1280.jpg'
            }}
            style={{width:"100%", height:"100%", resizeMode: "cover"}}
        />
        <View
            style={{
                position: 'absolute'
            }}
        >
            <Text style={styles.title}>Trevelo</Text>
        </View>
    </View>
    <View style={styles.secondSection}>
        <View>
            <View style={styles.spacing}>
                <Text style={styles.label}>Email Address</Text>
                    <TextInput
                    style={styles.textInput}
                    underlineColorAndroid="pink"
                    placeholder='ejemplo@ejemplo.com'
                    keyboardType='email-address'
                    returnKeyType='next'
                />
            </View>
            <View style={styles.spacing}>
                <Text style={styles.label}>Password</Text>
                    <TextInput
                    style={styles.textInput}
                    underlineColorAndroid="pink"
                    placeholder="*********"
                    secureTextEntry={true}
                />
            </View> 
            <View style={styles.spacing}>
                <Text style={styles.forgotPassword}>Forgot Password</Text>
            </View>
            <View style={styles.spacing}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={[styles.spacing, styles.row]}>
           <View>
            <TouchableOpacity onPress={goToRegister}>
                <Text style={styles.label}>
                    Don't have an account
                </Text>
            </TouchableOpacity>
           </View>
            <View>
                <TouchableOpacity>
                    <Text style={styles.signUp}>Sing up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
   </SafeAreaView>
)
}
export default Login; 