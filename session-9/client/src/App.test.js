import { fireEvent, render } from '@testing-library/react';
import ListNotes from './components/container/ListNotes';
import App from './App';
import AddNote from './components/pure/AddNote';

describe('REACT - Testeando los componentes', () => {
    test('El listado se renderiza correctamente', () => {
        const r = render(<ListNotes />);
        expect(r).toBeDefined();
    });

    test('El listado se renderiza un listado correctamente', () => {
        const notes = ['bajar la basura', 'comprar huevos'];
        const r = render(<ListNotes notes={notes} />);
        expect(r).toBeDefined();
    });

    test('El listado se renderiza solo las notas que debe renderizar', () => {
        const notes = ['bajar la basura', 'comprar huevos'];
        const r = render(<ListNotes notes={notes} />);
        const div = r.getByLabelText('list-notes');
        expect(div.childElementCount).toBe(2);
    });

    

});


describe('REACT - Hacemos un test de integracion', () => {
    test('Renderizamos la aplicacion', () => {
        const r = render(<App />);
        expect(r).toBeDefined();
    });

    test('Se renderiza correctamente el input', () => {
        const placeholdertext = 'add new note';
        const r = render(<App />);
        const input = r.getByPlaceholderText(placeholdertext);
        expect(input).toBeDefined();
    });

    test('Se debe poder ejecutar el evento onClick y ejecutar el metodo addNewNote() ', () => {
        const mockFn = jest.fn();
        const r = render(<AddNote addNote={mockFn}/>);
        const button  = r.getByText('Add note');
        fireEvent.click(button);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('Se debe verificar que la se puede realizar un correcto input  ', () => {
        const placeholdertext = 'add new note';
        const input = r.getByPlaceholderText(placeholdertext);
        const button = r.getByText('Add note');
        const div = r.getByLabelText('list-notes');
        const childInit = div.childElementCount;
        fireEvent.change(input, { target: { value: 'Poner gasolina'}});
        fireEvent.click(button);
        const childLast = div.childElementCount;
        expect(childLast).toBeGreaterThan(childInit);
        expect(childInit).toBeLessThan(childLast);
        expect(childInit).not.toBe(childLast);
    });
});
