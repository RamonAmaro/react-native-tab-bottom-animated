import Home from "@/screens/Home";
import Settings from "@/screens/Settings";
import Profile from "@/screens/Profile";
import New from "@/screens/New";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomBottomTab from "@/components/BottomTabs/CustomBottomTabs";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomBottomTab {...props} />}>
      <Tab.Group screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{ tabBarLabel: "Inicio" }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{ tabBarLabel: "Perfil" }}
        />
        <Tab.Screen
          name="new"
          component={New}
          options={{ tabBarLabel: "Novo" }}
        />
        <Tab.Screen
          name="settings"
          component={Settings}
          options={{ tabBarLabel: "Config..." }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
