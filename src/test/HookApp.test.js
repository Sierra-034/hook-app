import { shallow } from "enzyme";
import { HookApp } from '../HookApp';

describe('Pruebas sobre <HookApp /> component', () => {
    test('Component render correctly', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
});
