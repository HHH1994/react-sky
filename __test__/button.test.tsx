import * as React from 'react';
import { mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import * as Adapter from 'enzyme-adapter-react-16';
import Button from '../components/src/button/index';

configure({ adapter: new Adapter() });

describe('try to test Button', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<Button disabled theme='primary' click={() => { return 1;}}>吕肥肥</Button>);
  });

  it('should have pp-button', () => {
    expect(wrapper.find('.pp-disabled')).toEqual(false);
    expect(wrapper.find('.pp-disabled').hasClass('pp-disabled')).toEqual(true);
  });
});
