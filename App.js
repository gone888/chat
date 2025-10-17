import Start from "./components/Start";
import Chat from "./components/Chat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const Stack = createNativeStackNavigator();

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAV8GOMrP2VT-Rg1Gdl12wYVVqRulfOHd4",
    authDomain: "chatapp-dfe88.firebaseapp.com",
    projectId: "chatapp-dfe88",
    storageBucket: "chatapp-dfe88.firebasestorage.app",
    messagingSenderId: "1037982336241",
    appId: "1:1037982336241:web:533700caa950c849d19550",
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
