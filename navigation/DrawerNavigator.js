import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from '../screens/Profile';
import Joke from '../screens/Joke';
import Meme from '../screens/Meme';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Jokes" component={Joke} />
        <Drawer.Screen name="Memes" component={Meme} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;