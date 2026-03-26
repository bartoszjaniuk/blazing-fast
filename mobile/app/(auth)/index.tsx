import {
	View,
	Text,
	Dimensions,
	Pressable,
	ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useAuthSocial } from "@/src/hooks/useSocialAuth";

const { width, height } = Dimensions.get("window");

const AuthScreen = () => {
	const { handleSocialAuth, loadingStrategy } = useAuthSocial();

	const isLoading = loadingStrategy !== null;

	return (
		<View className="flex-1 bg-surface-dark">
			<View className="absolute inset-0 overflow-hidden">
				<LinearGradient
					colors={["#0D0D0F", "#1A1A2E", "#16213E", "#0D0D0F"]}
					style={{ position: "absolute", width: "100%", height: "100%" }}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
				/>
			</View>

			<SafeAreaView className="flex-1">
				{/* CENTER SECTION - HERO IMG */}
				<View className="flex-1 justify-center items-center px-6">
					<Image
						source={require("../../assets/images/auth.svg")}
						style={{
							width: width - 48,
							height: height * 0.3,
						}}
						contentFit="contain"
					/>

					{/* Headline */}
					<View className="mt-6 items-center">
						<Text className="text-4xl font-bold text-primary font-serif tracking-wider text-center">
							Blazing Fast
						</Text>
					</View>

					{/* AUTH BUTTONS */}
					<View className="flex-row gap-4 mt-10">
						{/* GOOGLE BTN */}
						<Pressable
							className="flex-1 flex-row items-center justify-center gap-2 bg-white/95 py-4 rounded-2xl active:scale-[0.97]"
							disabled={isLoading}
							accessibilityRole="button"
							accessibilityLabel="Continue with Google"
							onPress={() => !isLoading && handleSocialAuth("oauth_google")}
						>
							{loadingStrategy === "oauth_google" ? (
								<ActivityIndicator size="small" color="#1a1a1a" />
							) : (
								<>
									<Image
										source={require("../../assets/images/google.png")}
										style={{ width: 20, height: 20 }}
										contentFit="contain"
									/>
									<Text className="text-gray-900 font-semibold text-sm">
										Google
									</Text>
								</>
							)}
						</Pressable>

						{/* APPLE BTN */}
						<Pressable
							className="flex-1 flex-row items-center justify-center gap-2 bg-white/10 py-4 rounded-2xl border border-white/20 active:scale-[0.97]"
							disabled={isLoading}
							accessibilityRole="button"
							accessibilityLabel="Continue with Apple"
							onPress={() => !isLoading && handleSocialAuth("oauth_apple")}
						>
							{loadingStrategy === "oauth_apple" ? (
								<ActivityIndicator size="small" color="#FFFFFF" />
							) : (
								<>
									<Ionicons name="logo-apple" size={20} color="#FFFFFF" />
									<Text className="text-foreground font-semibold text-sm">
										Apple
									</Text>
								</>
							)}
						</Pressable>
					</View>
				</View>
			</SafeAreaView>
			{/* Required for sign-up flows. Clerk's bot sign-up protection is enabled by default */}
			<View nativeID="clerk-captcha" />
		</View>
	);
};

export default AuthScreen;
