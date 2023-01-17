import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold} from '@expo-google-fonts/inter';
import { Loading } from './src/components/loading';

export default function App() {
  const [FontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })
  if(!FontsLoaded){
    return(
      <Loading/>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Expo go conectado com sucesso!</Text>
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#7C3AED',
    fontFamily: 'Inter_400Regular',
    textDecorationLine: 'underline',
    fontSize: 20
  }
});
