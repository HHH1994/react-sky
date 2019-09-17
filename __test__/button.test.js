import { mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import * as Adapter from 'enzyme-adapter-react-16';
import Button from '../components/src/button/index';

configure({ adapter: new Adapter() });

describe('try to test Button', () => {
  let wrapper = mount(<Button theme='primary'></Button>);
  it('should have rendered widget', () => {
    expect(wrapper.hasClass('pp-button')).toEqual(true);
  });
});
