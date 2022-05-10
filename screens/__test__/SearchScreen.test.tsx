import SearchScreen from "../SearchScreen";

import { shallow, ShallowWrapper, configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useFocusEffect: jest.fn()
}));

configure({ adapter: new Adapter() })

const createTestProps = (props: Object) => ({
    navigation: {
        navigate: jest.fn()
    },
    route: {
        params: {
            searchType: 'city'
        },
    },
    ...props
});

describe("SearchScreen", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        let props: any;
        beforeEach(() => {

            props = createTestProps({});
            wrapper = shallow(
                <SearchScreen {...props} />);
        });

        it("should render a <View />", () => {
            expect(wrapper.find(View)).toHaveLength(1);
        });

        it("should render a <TextInput />", () => {
            expect(wrapper.find(TextInput)).toHaveLength(1)
        })

        it("should have a button", () => {
            expect(wrapper.find(TouchableOpacity)).toHaveLength(1)
        })
    });
});
