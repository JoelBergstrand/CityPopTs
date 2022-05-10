import HomeScreen from "../HomeScreen";

import { shallow, ShallowWrapper, configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import React from "react";
import { TouchableOpacity, View } from "react-native";

configure({ adapter: new Adapter() })

const createTestProps = (props: Object) => ({
    navigation: {
        navigate: jest.fn()
    },
    ...props
});

describe("HomeScreen", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        let props: any;
        beforeEach(() => {
            props = createTestProps({});
            wrapper = shallow(<HomeScreen {...props} />);
        });

        it("should render a <View />", () => {
            expect(wrapper.find(View)).toHaveLength(1);
        });

        it("should have two buttons", () => {
            expect(wrapper.find(TouchableOpacity)).toHaveLength(2)
        })

        it("SEARCH BY CITY should route to CitySearchScreen", () => {
            wrapper.find({ "testID": "city" }).simulate("press")
            expect(props.navigation.navigate).toBeCalledWith("Search", { "searchType": "city" })
        })

        it("SEARCH BY COUNTRY should route to CountrySearchScreen", () => {
            wrapper.find({ "testID": "country" }).simulate("press")
            expect(props.navigation.navigate).toBeCalledWith("Search", { "searchType": "country" })
        })
    });
});
