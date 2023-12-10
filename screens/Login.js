import { View, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Formik } from 'formik'
import React from 'react'
import tw from 'twrnc'

export default function Login() {

  return (
    <View style={tw`px-7 py-4 w-full h-full flex justify-center`}>
      <Text style={tw`text-center text-4xl font-bold mb-20 text-green-600`}>JoKasir</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          console.log(values);
        }}

      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={tw`bg-white shadow-2xl rounded-md p-3 mb-20`}>
            <Text style={tw`text-center text-2xl font-semibold mb-5`}>LOGIN</Text>
            <TextInput
              mode="outlined"
              label="Email"
              theme={{ roundness: 15, colors: { primary: 'rgb(22 163 74)' } }}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <TextInput
              mode="outlined"
              label="Password"
              style={tw`my-3`}
              secureTextEntry
              theme={{ roundness: 15, colors: { primary: 'rgb(22 163 74)' } }}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Button mode="contained" theme={{ roundness: 2 }} style={tw`bg-green-600`} onPress={handleSubmit} title="Submit">
              SUBMIT
            </Button>
            <Text style={tw`text-center my-2 text-lg`}>or</Text>
            <View style={tw`flex-row justify-center my-2 gap-8`}>
              <View style={tw`flex items-center gap-1`}>
                <FontAwesomeIcon icon={faUserPlus} size={30} color='rgb(22 163 74)'/>
                <Text>Create Account</Text>
              </View>
              <View style={tw`flex items-center gap-1`}>
                <FontAwesomeIcon icon={faGoogle} size={30} color='rgb(37 99 235)' />
                <Text >Google Account</Text>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}