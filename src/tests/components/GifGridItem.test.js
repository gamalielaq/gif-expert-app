import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {

    const title = 'Un Titulo';
    const url = 'https://localhost/algo.jpg';
    const wraper = shallow( <GifGridItem title={title} url={url} /> );

    test('deve de mostrar el componente correctamene', () => {
        expect( wraper ).toMatchSnapshot();
    })

    test('deve de tener un párrarfo con el titulo', () => {
        const parrafo = wraper.find('p');
        expect( parrafo.text().trim()).toBe(title);
    })

    test('deve de tener una imaagen igual al url y alt de los props', () => {
        const image = wraper.find('img');
        expect(image.prop('src')).toBe(url);
        expect(image.prop('alt')).toBe(title);
    })

    test('deve tener la clase animate__fadeIn', () => {
        const div = wraper.find('div');
        const clasname = div.prop('className');
        expect(clasname.includes('animate__fadeIn')).toBe(true);
    })
});