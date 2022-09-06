import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRouter from './src/navigation/AppRouter';
import { serviceFactory } from './src/services/ServiceFactory';
import { ApiClientFactory } from './src/shared/ApiClientFactory';
import { clientInstance } from './src/shared/AxiosClient';
import { AuthProvider } from './src/shared/context/AuthContext';
import { DepedencyProvider } from './src/shared/context/DepedencyContext';
import { ThemeProvider } from './src/shared/context/ThemeContext';
import useAppFont from './src/shared/hook/UseAppFont';

export default function App() {
  const fonts = useAppFont();
  const apiClient = ApiClientFactory(clientInstance)
  const services = serviceFactory(apiClient);
  if (!fonts){
    return null
  }
  return (
    <DepedencyProvider service={services}>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            <AuthProvider>
              <AppRouter />
            </AuthProvider>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </DepedencyProvider>
  );
}
