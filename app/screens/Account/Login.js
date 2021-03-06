import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import LoginForm from '../../components/Account/LoginForm';
import Toast from 'react-native-easy-toast';

function Login() {

    const toastRef = useRef();
    
    return (
        <ScrollView>
            <Image source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')} resizeMode="contain" style={styles.logo}></Image>
            <View style={styles.viewContainer}>
                <LoginForm toastRef={toastRef}></LoginForm>
                <CreateAccount></CreateAccount>
            </View>
            <Divider style={styles.divider}></Divider>
            <Text>Social Login</Text>
            <Toast ref={toastRef} position="center" opacity={0.9}></Toast>
        </ScrollView>
    );
}

export default Login;

/** componente interno */
function CreateAccount() {

    const navigation = useNavigation();

    return(
        <Text style={styles.textRegister}>
            ¿Aún no tienes una cuenta?{" "}
            <Text onPress={()=>navigation.navigate("register")} style={styles.btnRegister}>Registrate</Text>
        </Text>
    );
}

const styles = StyleSheet.create({
    logo: {
        width:"100%",
        height:150,
        marginTop:20
    },
    viewContainer: {
        marginLeft:40,
        marginRight:40
    },
    textRegister: {
        marginTop:15,
        marginLeft:10,
        marginRight:10
    },
    btnRegister: {
        color:"#00a680",
        fontWeight:"bold"
    },
    divider: {
        backgroundColor:"#00a680",
        margin:40
    }
});