import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetail from '../screens/ListingDetail';


const Stack = createStackNavigator()


const FeedNavigator = () =>(
    <Stack.Navigator>
        <Stack.Screen name="Listings" component={ListingsScreen} 
        options={{headerShown:false}}/>
        <Stack.Screen name="ListingDetail" component={ListingDetail}
        />
    </Stack.Navigator>
)
export default FeedNavigator