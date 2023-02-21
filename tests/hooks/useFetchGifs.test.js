import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe regresar el estado inicial', () => {

        const category = 'Slam Dunk';
        const { result } = renderHook( () => useFetchGifs(category) );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('debe retornar un arreglo de imágenes y el isLoading en fals', async () => {

        // esta línea nos dice que debe "esperar" hasta que images sea mayor a 0
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

});
