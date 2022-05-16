import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {
    test('deve de mostrar el componente correctamene', () => {

        const wraper = shallow( <GifGridItem /> );
        expect( wraper ).toMatchSnapshot();

    })
});