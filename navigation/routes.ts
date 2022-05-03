import { createNativeStackNavigator } from "@react-navigation/native-stack";

export enum Routes {
  Home = 'Home',
  Search = 'Search',
  List = 'List',
  Show = 'Show'
}

export type StackParamList = {
  [Routes.Home]: undefined;
  [Routes.Search]: { searchType: string };
  [Routes.List]: undefined;
  [Routes.Show]: undefined;
}

export const Stack = createNativeStackNavigator<StackParamList>()
