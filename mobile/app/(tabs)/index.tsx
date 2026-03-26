import { Text, ScrollView, Button } from "react-native";
import React from "react";
import { useAuth } from "@clerk/expo";

const HomeTab = () => {
	const { signOut } = useAuth();

	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic" className="px-4">
			<Text>Chats</Text>
			<Button
				title="Sign out"
				onPress={() => signOut({ redirectUrl: "/(auth)" })}
			/>
		</ScrollView>
	);
};

export default HomeTab;
