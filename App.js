import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/features/Home/Main/MainPage';
import { LoginPage } from './src/features/Login/LoginPage';
import ProductList from './src/features/Product/ProductList';
import { WelcomePage } from './src/features/Welcome/WelcomePage';
import AppRouter from './src/navigation/AppRouter';
import { serviceFactory } from './src/services/ServiceFactory';
import { MainContainer } from './src/shared/components/MainContainer';
import { DepedencyProvider } from './src/shared/context/DepedencyContext';
import { ThemeProvider } from './src/shared/context/ThemeContext';
import useAppFont from './src/shared/hook/UseAppFont';

export default function App() {
  const fonts = useAppFont();
  const services = serviceFactory();
  if (!fonts){
    return null
  }
  return (
    <DepedencyProvider service={services}>
      <ThemeProvider>
        <NavigationContainer>
          {/* <WelcomePage /> */}
          {/* <LoginPage /> */}
          {/* <ProductList /> */}
          {/* <HomePage /> */}
          <AppRouter />
        </NavigationContainer>
      </ThemeProvider>
    </DepedencyProvider>
  );
}
