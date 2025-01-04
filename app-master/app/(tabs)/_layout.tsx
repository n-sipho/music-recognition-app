import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="playlist"
                options={{
                    title: "My Playlist",
                    tabBarIcon: ({ color }) => (
                        <Feather name="music" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
export default TabLayout;