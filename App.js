import { NativeBaseProvider } from "native-base";
import { StyleSheet, View } from 'react-native';
import AppNavigate from './src/navigation/AppNavigate';
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <StatusBar backgroundColor='#0ea5e9'></StatusBar>
          <AppNavigate />
        </NativeBaseProvider>
      </PersistGate>

    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
