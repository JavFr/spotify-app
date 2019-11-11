import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchBar from './searchBar';

const onChange = jest.fn();
const onChangeLog = jest.fn((value) => value);

describe('Search Bar tests', () => {
    it('renders a searchbar', () => {
        shallow(<SearchBar />);
      });

    it('SearchBar should run the callback when change value', () => {
        const component = mount(<SearchBar onChange={onChange}/>);
        component
            .find('input')
            .simulate("change", { target: { value: "foo" }});
        
        expect(onChange).toHaveBeenCalled();
        component.unmount();
        });

    it('SearchBar should run the callback when change value, logging the value', () => {
        const component = mount(<SearchBar onChange={onChangeLog}/>);
        component
            .find('input')
            .simulate("change", { target: { value: "foo" }});
        
        expect(onChangeLog).toHaveBeenCalled();
        expect(onChangeLog.mock.results[0].value).toEqual('foo');
        component.unmount();
    });

    it('ShearchBar shows spinner when isLoading is set to true', () => {
        const wrapper = shallow((<SearchBar isLoading={true} />));

        expect(wrapper.contains(
                <div className="spinner-border spinner-border-sm" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )).toEqual(true);
    });

    it('ShearchBar does not show the spinner when isLoading is set to false', () => {
        const wrapper = shallow((<SearchBar isLoading={false} />));

        expect(wrapper.contains(
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            )).toEqual(false);
    });
});