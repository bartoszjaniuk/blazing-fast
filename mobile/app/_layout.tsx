import { Stack } from "expo-router";
import "../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";

const queryClient = new QueryClient();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
	throw new Error("Add your Clerk Publishable Key to the .env file");
}

export default function RootLayout() {
	return (
		<ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
			<QueryClientProvider client={queryClient}>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen
						name="(auth)"
						options={{ headerShown: false, animation: "fade_from_bottom" }}
					/>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				</Stack>
			</QueryClientProvider>
		</ClerkProvider>
	);
}
