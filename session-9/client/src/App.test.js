import { render } from '@testing-library/react';
import ListNotes from './components/container/ListNotes';

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
        expect(r).toBeDefined();
    });

});
