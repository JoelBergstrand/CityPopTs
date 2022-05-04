import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

/**
 *  Defines possible routes
 */
export enum Routes {
  Home = 'Home',
  Search = 'Search',
  List = 'List',
  Show = 'Show'
}

/**
 *  Defines search options
 */
export enum Searches {
  City = 'city',
  Country = 'country'
}

/**
 * Defines the City object
 */
export type City = {
  population: number,
  toponymName: string,
}

/**
 *  Defines Parameter list for screens
 */
export type StackParamList = {
  [Routes.Home]: undefined;
  [Routes.Search]: { searchType: string };
  [Routes.List]: { country: String, cities: City[] };
  [Routes.Show]: { city: City };
}

/**
 *  Defines prop type for screens
 */
export type NavigationProp<
  RouteName extends keyof StackParamList = Routes> = NativeStackScreenProps<StackParamList, RouteName>

/**
 *  Inits navigation stack
 */
export const Stack = createNativeStackNavigator<StackParamList>()
