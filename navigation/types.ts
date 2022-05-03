import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Routes, StackParamList } from "./routes";

export type NavigationProp<
    RouteName extends keyof StackParamList = Routes> = NativeStackScreenProps<StackParamList, RouteName>