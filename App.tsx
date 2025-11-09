import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ThemeProvider from './src/theme/ThemeProvider'
import ToastManager from 'toastify-react-native/components/ToastManager'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AppNavigation from './src/navigation/stack'
import { persistor, store } from './src/store/store'

const App = () => {
  return (
    // <Provider store={store}>
    // <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider>
      <GestureHandlerRootView style={styles.container}>
        <AppNavigation />
        <ToastManager />
      </GestureHandlerRootView>
    </ThemeProvider>
    // </PersistGate>
    // </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})