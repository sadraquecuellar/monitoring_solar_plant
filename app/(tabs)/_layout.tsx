import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarStyle:{
          backgroundColor: '#1a1a1a',
          
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Usina Solar',
          headerTitleAlign: 'center',
          headerShown:false,
          tabBarIcon: ({ color }) => <TabBarIcon name="solar-panel" color={color} />,
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          title: 'Detalhes',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <TabBarIcon name="chart-bar" color={color} />,
        }}
      />
    </Tabs>
  );
}
