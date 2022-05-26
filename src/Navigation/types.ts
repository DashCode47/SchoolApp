import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
    Home: undefined;
    Class: undefined;
  
  };
  export type UserProfileNavigationProp = NativeStackNavigationProp<RootStackParamList,'Class'>;

  export type ClassStackParamList = {
    Classes: undefined;
    Details: undefined;
  };
  export type BotNav = {
    Home: undefined,
    Clases:undefined;
    Create:undefined;

  }

 export type ClassDetailNav = NativeStackNavigationProp<ClassStackParamList,'Details'>; 