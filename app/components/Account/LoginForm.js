import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import Loading from '../Loading';
import { validateEmail } from '../../utils/Validation';
import { size, isEmpty } from 'lodash';
import * as firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

function LoginForm(props) {

    const { toastRef } = props;

    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [formData, setFormData] = useState(defaultValue);
    const [loading, setLoading] = useState(false);

    const onChange = (e,type) => {
        setFormData({ ...formData, [type]:e.nativeEvent.text });
    }

    const onSubmit = () => {
        if(isEmpty(formData.email) || isEmpty(formData.password) || isEmpty(formData.repeatPassword)) {
            toastRef.current.show('Todos los campos son obligatorios.');
        } else if(!validateEmail(formData.email)) {
            toastRef.current.show('El email no es correcto.');
        } else if(size(formData.password) < 6) {
            toastRef.current.show('La contraseña tiene que tener al menos 6 caracteres.');
        } else {
            setLoading(true);
            firebase.auth().signInWithEmailAndPassword(formData.email, formData.password).then(reponse =>{
                setLoading(false);
                navigation.navigate('account');
            }).catch(() => {
                toastRef.current.show('Error al ingresar el email o la clave, por favor intente nuevamente.');
            });
        }
    };

    return (
        <View style={StyleSheet.formContainer}>
            <Input placeholder="Correo electrónico" containerStyle={styles.inputForm} rightIcon={<Icon type="material-community" name="at" iconStyle={styles.iconRight}></Icon>}></Input>
            <Input placeholder="Contraseña" containerStyle={styles.inputForm} password={true} secureTextEntry={true} rightIcon={<Icon type="material-community" name={showPassword ? 'eye-off-outline' : 'eye-outline'} iconStyle={styles.iconRight} onPress={()=>{setShowPassword(!setShowPassword)}}></Icon>}></Input>
            <Button title="Iniciar sesión" containerStyle={styles.btnContainerLogin} buttonStyle={styles.btnLogin}></Button>
        </View>
    );

}

export default LoginForm;

/** Inicializamos para guardar los datos del form */
function defaultValue() {
    return {
        email:"",
        password:"",        
    };
}

const styles = StyleSheet.create({
    formContainer: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30
    },
    inputForm: {
        width:"100%",
        marginTop:20
    },
    btnContainerLogin: {
        marginTop:20,
        width:"95%"
    },
    btnLogin:{
        backgroundColor:"#00a680"
    }
});