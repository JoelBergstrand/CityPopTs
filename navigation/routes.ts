import { createNativeStackNavigator } from "@react-navigation/native-stack";

export enum Routes {
  Home = 'Home',
  Search = 'Search',
  List = 'List',
  Show = 'Show'
}

export enum Searches {
  City = 'city',
  Country = 'country'
}

export type City = {
  population: number,
  name: string,
}

export type StackParamList = {
  [Routes.Home]: undefined;
  [Routes.Search]: { searchType: string };
  [Routes.List]: { country: String, cities: City[] };
  [Routes.Show]: { city: City };
}

export const Stack = createNativeStackNavigator<StackParamList>()
