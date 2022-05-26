import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
    Home: undefined;
    Class: undefined;
  
  };
  export type UserProfileNavigationProp = NativeStackNavigationProp<RootStackParamList,'Class'>;