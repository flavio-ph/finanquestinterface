import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/pages/login";
import BottomRoutes from "./bottom.routes";
import Cadastro from "../components/pages/cadastro";
import Home from "../components/pages/home";

export default function Routes(){

    const Stack = createStackNavigator()

    return (

        <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false,
            cardStyle:{
                backgroundColor: "#ffffff"
            }
        }
        }>
            <Stack.Screen
                name="Login"
                component={Login}
                />
            <Stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}
                />
                <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                />
                <Stack.Screen
                name="Home"
                component={Home}
                />
        </Stack.Navigator>
    )

}