import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en con getGifs Fetch', () => {

    test('Deve de traer 10 elementos', async() => {
        const gifs = await getGifs('One Punch')
        expect( gifs.length ).toBe(10);
    })
});