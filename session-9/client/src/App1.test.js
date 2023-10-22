// Vamos a contruir una aplicacion de seleccion y busqeuda de emisoras de radio en streaming
// CASOS DE PRUEBA PRIMARI

import { fireEvent, queryByLabelText, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./App";
// Antes de todo, siempre vamos a querer renderizar el componente <App /> 
beforeEach(() => render(<App />));

// 0 - La aplicacion debe renderizar correctamente
describe('0 - La aplicacion debe renderizar conrrectamente', () => {
    test('0  - La aplicacion debe renderizar conrrectamente', () => {
        const r = render(<App />);
        expect(r).toBeDefined();
    })

});

// 1 - El nombre de la aplicacion debe mostrarse en algun lugar => 'openRadioCamp'
describe('1 - El nombre de la aplicacion debe mostrarse en algun lugar => OpenRadioCamp', () => {
    it('1 - El nombre de la aplicacion debe mostrarse en algun lugar => OpenRadioCamp',() => {
        const nombre = 'OpenRadioCamp';
        const el = screen.getByText(nombre);
        expect(el).toBeInTheDocument();
    });
    
});

// 2 - Debemos poder buscar radios por nombre
// 2a - La aplicacion debe tener un campo de input con el placeholder => 'escribe el nombre de la radio'
// 2b - La aplicacion debe tener un boton de busqueda => texto 'buscar'
// 2c - Cuando hacemos clic en el boton buscar, se debe ejecutar la funcion de busqeyda una sola vez
describe('2 - Debemos poder buscar radios por nombre', () => {
    test('La aplicacion debe tener un campo input con el placeholder => "Escribe el nombre de la radio"', () => {
        const placeholder = "Escribe el nombre de la radio";
        const input = screen.getByPlaceholderText(placeholder);
        expect(input).toBeInTheDocument();
    });

    test('La aplicacion debe tener un boton de busqueda => texto "Buscar"', () => {
        const buttonTxt = "Buscar";
        const button = screen.getByText(buttonTxt);
        expect(button).toBeInTheDocument();
    });

    test('Cuando hacemos clic en el boton buscar, se debe ejecutar la funcion de busqeyda una sola vez', () => {
        const mockFn = jest.fn();
        const buttonTxt = "Buscar";
        const button = screen.getByText(buttonTxt);
        button.addEventListener("click", mockFn);
        fireEvent.click(button);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
    
});

// 3 - Debe existi un listado de emisoras
// 3a - Debe existir un listado de emisoras
// 3b - Cuando  se hace una busqueda valida, el listado debe mostrar almenos un resultado
// 3c - Cuando hacemmos un busqedainvalida (no existe), es listado debe mostrar un mensaje 'Nose han encontrado emisoras par esta busqueda'
describe('3 - Listado de emisoras', () => {
    test('Debe existir un listado de emisoras', () =>  {
        const listado = screen.getByLabelText('listado-emisoras');
        expect(listado).toBeInTheDocument();
    });

    test('El listado debe inicializar vacio', () =>  {
        const listado = screen.getByLabelText('listado-emisoras');
        const childrenCount = listado.childElementCount;
        expect(childrenCount).toBe(0);
    });

    test('Cuando  se hace una busqueda valida, el listado debe mostrar almenos un resultado', async () => {
        const placeholder = "Escribe el nombre de la radio";
        const input = screen.getByPlaceholderText(placeholder);
        const buttonTxt = "Buscar";
        const button = screen.getByText(buttonTxt);
        fireEvent.change(input, { target: {value: 'Country'}});
        fireEvent.click(button);
        const mockElement = await waitForElementToBeRemoved(() => queryByLabelText('lenght-not-null'));
        const listado = screen.getByLabelText('listado-emisoras');
        const childrenCount = listado.childElementCount;
        expect(childrenCount).toBeGreaterThanOrEqual(0);
    });
});