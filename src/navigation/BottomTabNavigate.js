import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Account from '../pages/Account';
import Home from '../pages/Home';
import Job from '../pages/Job';
import Notifications from '../pages/Notifications';
import Icon from 'react-native-vector-icons/Ionicons'
import More from '../pages/More';

const BottomTabNavigate = ({ route }) => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: {
                    backgroundColor: '#0ea5e9'
                },
                headerTitleStyle: {
                    color: 'white'
                },
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName
                    if (route.name === "Home") {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === "Job") {
                        iconName = focused ? 'school' : 'school-outline'
                    } else if (route.name === "Me") {
                        iconName = focused ? 'person-circle' : 'person-circle-outline'
                    } else if (route.name === "Appointments") {
                        iconName = focused ? 'book' : 'book-outline'
                    } else if (route.name === "Notification") {
                        iconName = focused ? 'notifications' : 'notifications-outline'
                    } else if (route.name === "More") {
                        iconName = focused ? 'ellipsis-vertical-circle' : 'ellipsis-vertical-circle'
                    }
                    return <Icon name={iconName} size={22} color={color} />
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen name="Job" component={Job} />
            <Tab.Screen
                name="Me"
                component={Account}
                options={{
                    headerShown: false
                }} />
            <Tab.Screen name="Notification" component={Notifications} />
            <Tab.Screen name="More" component={More} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigate;