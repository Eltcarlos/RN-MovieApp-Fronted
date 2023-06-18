import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./src/Presentation/navigator/RootNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
