// Demonstrates opening external URLs from a React Native app using the Linking module.
import { Linking, Text } from 'react-native';

<Text onPress={() => Linking.openURL(selectedBlog.link)}>Read Article</Text>
