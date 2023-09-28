import React, {useState} from 'react'
import { SafeAreaView, Text, StyleSheet, View,TextInput, Button, TouchableOpacity } from 'react-native'
import styles from '../../styles/registrar/Registro'

function Registro(props)
{
  const {navigation}=props
  const goToLogin = () =>{
    navigation.navigate("Login")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstSection}>
        <Text style={styles.firstText}>Sing up for a new account.</Text>
        <Text style={styles.secondText}>We just need some more information</Text>
      </View>
      <View style={styles.secondSection}>
        <View>
        <View style={styles.spacing}>
            <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="pink"
                placeholder="Name"
              />
          </View> 
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
            <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="pink"
                placeholder="*********"
                secureTextEntry={true}
              />
          </View>
          <View style={styles.spacing}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={[styles.spacing, styles.row]}>
           <View>
            <TouchableOpacity onPress={goToLogin}>
                <Text style={styles.label}>
                    Already have an account
                </Text>
            </TouchableOpacity>
           </View>
            <View>
                <TouchableOpacity>
                    <Text style={styles.Login}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>  
  );
};
export default Registro;