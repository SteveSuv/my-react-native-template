import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import pages from './pages';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

export default () => {
  const Stack = createStackNavigator();
  const stacks = [
    {
      name: 'Home',
      component: pages.HomeScreen,
    },
    {
      name: 'Detail',
      component: pages.DetailScreen,
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={stacks[0].name}
        screenOptions={{
          cardStyle: {backgroundColor: '#fff'},
          headerTransparent: true,
        }}
        headerMode="none">
        {stacks.map((item, index) => (
          <Stack.Screen
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            key={index}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
