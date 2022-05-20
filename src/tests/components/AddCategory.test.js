import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en el componente AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks(); // limpia todo
        wrapper = shallow(< AddCategory setCategories={setCategories} />);
    })

    test('Deve de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Deve de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear la información onSubmit es decir la funcion setCategories no deve ser llamada', () => { 
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('deve de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';
        //1. Simular el imput change
         wrapper.find('input').simulate('change', { target: { value } });

        //2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() {} });

        //3. setCategories se deve haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);  // Indica que solo deve ser llamado una vez
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

        //4. el valor del imput debe de estasr ''
        expect(wrapper.find('input').prop('value')).toBe('');
    })

});