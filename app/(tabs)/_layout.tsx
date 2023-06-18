import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarStyle:{
          backgroundColor: '#1a1a1a',
        },
        headerStyle:{
          backgroundColor: '#1a1a1a',
          
        }
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Resumo',
          headerTitleAlign: 'center',
          headerTitleStyle:{
            color: '#fff',
            fontSize:24
          },
          // headerShown:false,
          tabBarIcon: ({ color }) => <TabBarIcon name="solar-panel" color={color} />,
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          title: 'Detalhes',
          headerTitleAlign: 'center',
          headerTitleStyle:{
            color: '#fff',
            fontSize:24
          },
          // headerShown:false,
          tabBarIcon: ({ color }) => <TabBarIcon name="chart-bar" color={color} />,
        }}
      />
    </Tabs>
  );
}
