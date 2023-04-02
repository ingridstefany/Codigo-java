import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ServicosScreen from './components/ServicosScreen';
import CarrinhoScreen from './components/CarrinhoScreen';
import AgendamentoScreen from './components/AgendamentoScreen';
import Enderecos from './components/Endereco';
import Context from './Context';
import Controllers from './components/Controllers';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Context>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === 'Restaurante Bom sabor') {
                return <Ionicons name='restaurant' size={size} color={color} />;
              } else if (route.name === '') {
                return <Ionicons name='md-today' size={size} color={color} />;
              }
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'dodgerblue',
          })}>
          <Tab.Screen name="Restaurante Bom sabor" component={ServicosScreen} />
          <Tab.Screen name="Carrinho" component={CarrinhoScreen} />
          <Tab.Screen name="Agendamento" component={AgendamentoScreen} options={{tabBarStyle: { display: "none" }, tabBarButton: () => null }}/>
          <Tab.Screen name="Enderecos" component={Enderecos} />
          <Tab.Screen name="Quantidade" component={Controllers} options={{tabBarStyle: { display: "none" }, tabBarButton: () => null }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Context>
  );
}
