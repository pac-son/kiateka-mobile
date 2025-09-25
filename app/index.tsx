import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center">
      <View>
        <Image
          source={require("../assets/images/logo.png")}
          className="w-32 h-32"
          accessibilityLabel="background-logo"
        />
      </View>

      <View>
        <Text className=" self-center">Kiateka</Text>
        <Text>Finding the perfect home for you</Text>
        <Pressable onPress={() => {router.push('/Register')}}>
          <Text>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}
