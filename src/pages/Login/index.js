import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {AppLogo} from '../../assets/illustration';
import {Button, Gap, TextInput, Title, Link} from '../../components/atoms';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <AppLogo style={styles.logo} />
      <Gap height={8} />
      <Title title="Buat Akun" />
      <Gap height={51} />
      <View style={styles.contentWrapper}>
        <TextInput title="No Telepon" placeholder="Enter your phone number" />
        <Gap height={6} />
        <TextInput title="Kata Sandi" placeholder="Enter your password" />
        <Gap height={49} />
        <Button title="Masuk" onPress={() => navigation.replace('MainApp')} />
      </View>
      <View style={{alignItems: 'center'}}>
      <Gap height={45}/>
      <Link title="Buat Akun Baru" size={14} onPress={() => navigation.navigate("SignUp")}/>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  logo: {
    // flex: 1,
    alignSelf: 'center',
    marginTop: 34,
  },
  contentWrapper: {
    paddingLeft: 49,
    paddingRight: 46,
  },
})