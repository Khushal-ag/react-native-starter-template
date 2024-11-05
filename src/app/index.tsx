import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  return (
    <View className="flex flex-1 bg-gray-950">
      <Header />
      <MainHeading />
      <Content />
      <Footer />
    </View>
  );
}

function MainHeading() {
  return (
    <View className="pt-16">
      <Text
        role="heading"
        className="text-4xl text-center native:text-5xl font-bold tracking-tight text-indigo-300"
      >
        React Native Starter Template
      </Text>
    </View>
  );
}

function Content() {
  return (
    <View className="flex-1 bg-gray-950">
      <View className="py-16 md:py-24 lg:py-32 xl:py-48">
        <View className="px-6 md:px-8">
          <View className="flex flex-col items-center gap-8 text-center">
            <View className="rounded-full bg-indigo-900/40 px-6 py-3 backdrop-blur-sm">
              <Text className="text-indigo-200 font-semibold text-center">
                Ready to Launch 🚀
              </Text>
            </View>
            <Text
              role="heading"
              className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-purple-300"
            >
              Your Ultimate React Native Starter
            </Text>
            <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-300/90 md:text-xl">
              Everything you need to build amazing cross-platform apps. Powered
              by Expo, NativeWind, and best practices.
            </Text>
            <View className="flex flex-row items-center justify-between gap-2 bg-gray-800/80 rounded-lg p-4 backdrop-blur-sm">
              <Text className="font-mono text-gray-300 flex-1">
                bunx degit Khushal-ag/react-native-starter-template
              </Text>
              <Link
                suppressHighlighting
                className="px-3 py-2 bg-indigo-500 rounded-md text-white text-sm font-semibold hover:bg-indigo-600 active:scale-95 transition-all"
                href="/"
                onPress={() => {}}
              >
                Copy
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }} className="bg-gray-950">
      <View className="px-6 lg:px-8 h-16 flex items-center flex-row justify-between backdrop-blur-lg bg-gray-900/60">
        <Link
          className="font-bold flex-1 items-center justify-center text-indigo-300"
          href="/"
        >
          RNStarter
        </Link>
        <View className="flex flex-row gap-8">
          <Link
            className="text-md font-medium text-gray-300/90 hover:text-indigo-300 transition-colors"
            href="https://portfolio.khushalagarwal.me"
            target="_blank"
          >
            About Me
          </Link>
          <Link
            className="text-md font-medium text-gray-300/90 hover:text-indigo-300 transition-colors"
            href="https://github.com/Khushal-ag/react-native-starter-template"
          >
            GitHub Repo
          </Link>
        </View>
      </View>
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      style={{ paddingBottom: bottom }}
      className="flex shrink-0 backdrop-blur-lg bg-gray-900/60"
    >
      <View className="py-6 items-center justify-center px-6 md:px-8">
        <Text className="text-center text-gray-300/90">
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://github.com/Khushal-ag"
            className="hover:text-indigo-300 transition-colors"
          >
            Khushal
          </Link>
          . Crafted with 💜
        </Text>
      </View>
    </View>
  );
}
