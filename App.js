import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Frontpage from './screens/Frontpage';
import Login from './screens/Login';
import List from './screens/List';
import Details from './screens/Details';



export default function App() {

  
  //Siirretty frontpageen
  /*const [user, setUser] = useState(null) // Tilamuuttuja käyttäjälle

  // Tämä useEffect hoitaa käyttäjän tilan päivityksen
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('User', user)
      setUser(user)
    })
  }, [])*/

  // Tässä on nyt nuo navigointi jutut
  const Stack = createStackNavigator();
  const InsideStack = createStackNavigator(); //Tällä saadaan jotekin sisäistä navigointia aikaiseksi

  // Tässä on nyt tuo inside layot, mikä näkyy siis vain kirjautuneelle. 
  function InsideLayot(){
    return(
      <InsideStack.Navigator>
        <InsideStack.Screen name = "My todos" component = {List} />
        <InsideStack.Screen name = "Details" component = {Details} />
      </InsideStack.Navigator>
    )
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Frontpage"
          component={Frontpage}
          options = {{
            title: 'Frontpage',
            headerTitle: 'Frontpage',
          }}
          />
          <Stack.Screen
          name="Login"
          component={Login}
          options = {{
            title: 'Login',
            headerTitle: 'Login'
              }}
          />
          <Stack.Screen
          name="List"
          component={List}
          options = {{
            title: 'List',
            headerTitle: 'List',
          }}
          />
    </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
