import React, { useRef } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-easy-toast';
import RegisterForm from '../../components/Account/RegisterForm';

function Register() {

    const toastRef = useRef();    
    
    return(
        <KeyboardAwareScrollView>
            <Image source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')} resizeMode="contain" style={styles.logo}></Image>
            <View style={styles.viewForm}>
                <RegisterForm toastRef={toastRef}></RegisterForm>                                
            </View>
            <Toast ref={toastRef} position="center" opacity={0.9} />
        </KeyboardAwareScrollView>
    );

}

export default Register;

const styles = StyleSheet.create({
    logo: {
        width:"100%",
        height:150,
        marginTop:20
    },
    viewForm: {
        marginLeft:40,
        marginRight:40
    }
});