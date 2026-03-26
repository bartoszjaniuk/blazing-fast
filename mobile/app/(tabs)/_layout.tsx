import React from "react";
import { Redirect, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@clerk/expo";

const TabsLayout = () => {
	const { isSignedIn, isLoaded } = useAuth();

	if (!isLoaded) return null;
	if (!isSignedIn) return <Redirect href="/(auth)" />;

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: "transparent", paddingTop: 8 },
				tabBarActiveTintColor: "#B39DDB",
				tabBarInactiveTintColor: "#6B6B70",
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Chats",
					tabBarIcon: ({ color, size, focused }) => (
						<Ionicons
							name={focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"}
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color, size, focused }) => (
						<Ionicons
							name={focused ? "person" : "person-outline"}
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
