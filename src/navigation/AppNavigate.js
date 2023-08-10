import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Spalsh from '../pages/Spalsh';
import CreatePost from '../pages/CreatePost'
import BottomTabNavigate from './BottomTabNavigate';
import Profile from '../pages/Profile';
import Jobs from '../components/Job/Jobs';
import About from '../pages/About';
import JobDetails from '../components/Job/JobDetails';
import EditProfile from '../pages/EditProfile';
import ApplyConfirm from '../components/Job/ApplyConfirm';

const AppNavigate = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#0ea5e9'
                    },
                    headerTitleStyle: {
                        color: 'white'
                    },
                    headerTintColor: 'white'
                }}
            >
                <Stack.Screen
                    name='Splash'
                    component={Spalsh}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Main"
                    component={BottomTabNavigate}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="NewPost"
                    component={CreatePost}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                />
                <Stack.Screen
                    name="About"
                    component={About}
                />
                <Stack.Screen
                    name="Edit Profile"
                    component={EditProfile}
                />
                <Stack.Screen
                    name="Jobs"
                    component={Jobs}
                />
                <Stack.Screen
                    name="Job Details"
                    component={JobDetails}
                />
                <Stack.Screen
                    name="Apply"
                    component={ApplyConfirm}
                />
                <Stack.Screen
                    name='Signup'
                    component={Signup}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='Signin'
                    component={Signin}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigate;