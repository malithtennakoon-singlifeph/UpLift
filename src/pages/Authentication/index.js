import * as React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SignInScreen from './SingInScreen';
import SignUpScreen from './SingUpScreen';
import ForgetPasswardScreen from './ForgotPasswordScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AuthenticationRoutes() {
    console.log('AuthenticationRoutes')
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Welcome' }}/>
                <Stack.Screen name="SignUp" component={SignUpScreen}/>
                <Stack.Screen name="ForgetPassword" component={ForgetPasswardScreen}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default AuthenticationRoutes;
//