import ListScreen from "../ListScreen";

import { shallow, ShallowWrapper, configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import React from "react";
import { TouchableOpacity } from "react-native";

configure({ adapter: new Adapter() })

const createTestProps = (props: Object) => ({
    navigation: {
        navigate: jest.fn()
    },
    route: {
        params: {
            country: 'TestCountry',
            cities: [
                {
                    population: 1,
                    toponymName: 'City1',
                },
                {
                    population: 2,
                    toponymName: 'City2',
                }, {
                    population: 3,
                    toponymName: 'City3',
                }, {
                    population: 4,
                    toponymName: 'City4',
                }, {
                    population: 5,
                    toponymName: 'City5',
                }, {
                    population: 6,
                    toponymName: 'City6',
                }, {
                    population: 7,
                    toponymName: 'City7',
                }, {
                    population: 8,
                    toponymName: 'City8',
                }, {
                    population: 9,
                    toponymName: 'City9',
                }, {
                    population: 10,
                    toponymName: 'City10',
                },
            ]
        }
    },
    ...props
});

describe("ListScreen", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        let props: any;
        beforeEach(() => {
            props = createTestProps({});
            wrapper = shallow(<ListScreen {...props} />);
        });

        it("should render a Country name correctly", () => {
            expect(wrapper.find({ 'testID': 'Title' }).at(0).props().children).toEqual('TESTCOUNTRY');
        });

        it("should render 10 buttons", () => {
            expect(wrapper.find(TouchableOpacity)).toHaveLength(10);
        });

        it('should navigate correctly to Show Screen', () => {
            expect(wrapper.find(TouchableOpacity).at(0).simulate("press"))
            expect(props.navigation.navigate).toBeCalledWith("Show", {
                "city": {
                    "population": 1,
                    "toponymName": "City1",
                },

            })
        })
    });
});