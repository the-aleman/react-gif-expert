import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'Superman';

    test('debe mostrar el Loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category } />);
        const title = screen.getByRole('heading', { level: 2});

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );

    });

    test('debe mostrar items cuando se cargan las imágenes del userFetchGifs', () => {

        const gifs = [
            {
                id: 'ID123',
                title: 'Batman vs Superman',
                url: 'https://gifs.com/batmanvssuperman.jpg'
            },
            {
                id: 'ID456',
                title: 'Superman Return',
                url: 'https://gifs.com/supermanreturn.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category }/>);

        expect( screen.getAllByRole('img').length ).toBe(2);
        

    });

});