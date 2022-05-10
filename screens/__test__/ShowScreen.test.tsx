import ShowScreen from "../ShowScreen";

import { shallow, ShallowWrapper, configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import React from "react";

configure({ adapter: new Adapter() })

const createTestProps = (props: Object) => ({
    navigation: {
        navigate: jest.fn()
    },
    route: {
        params: {
            city: {
                population: 123456789,
                toponymName: 'TestCity',
            },
        },
    },
    ...props
});

describe("ShowScreen", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        let props: any;
        beforeEach(() => {
            props = createTestProps({});
            wrapper = shallow(<ShowScreen {...props} />);
        });

        it("should render a City name correctly", () => {
            expect(wrapper.find({ 'testID': 'Title' }).at(0).props().children).toEqual('TESTCITY');
        });

        it("should render a population number correctly", () => {
            expect(wrapper.find({ 'testID': 'Population' }).at(0).props().children).toEqual('123 456 789');
        });


    });
});
