import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";


describe('Pruebas del componente <GifItem /> ', () => {

    const title = 'Saitama';
    const url = 'https://google.com/';

    test('debe hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();

    });

    test('debe mostrar la imagen con el URL y el ALT indicado', () => {

        const { container } = render(<GifItem title={ title } url={ url } />);
        // expect( screen.getByRole('img').src ).toBe( url );
        
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('debe mostrar el título en el componente', () => {

        const { container } = render(<GifItem title={ title } url={ url } />);
        expect( screen.getByText(title) ).toBeTruthy();

    });

});