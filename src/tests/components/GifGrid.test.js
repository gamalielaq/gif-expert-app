import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import React from 'react';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en GifGrid Component', () => {

    const category = 'One Punch';

    test('Deve mostrar el compoente corretamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        })

        const wrapper = shallow(< GifGrid category= {category} />);
        expect( wrapper ).toMatchSnapshot();
    })


    test('Deve de mostrar items cuando se cargan imágenes', () => {

        const gifs = [{
            id: 'abc',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(< GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

    })

});