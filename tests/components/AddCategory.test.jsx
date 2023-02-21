import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Pruebas en <AddCategory />', () => {

    test('debe cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Batman' } } );

        expect(input.value).toBe('Batman');

    });

    test('debe llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Batman';
        const onNewCategory = jest.fn(); 

        render(<AddCategory onNewCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );        

        expect(input.value).toBe('');
        // expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);


    });

    test('no debe llamar el onNewCategory si el input está vacío', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');

        fireEvent.submit( form );

        // expect( onNewCategory ).toBeCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });

});