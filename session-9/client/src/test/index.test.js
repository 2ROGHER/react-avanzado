import { restar, sumar, multiplicar, dividir, returnEmail, returnObjects, Rectangle, returArray2, arrObjects } from "./index";

describe('Assertion basico en los Numeros', () => {
    // aqui se pueden agregar varios cosos de prueba.
    test('La suma funciona correctamente', () => {
        const res = sumar(2, 3);
        expect(res).toBe(5);
    });

    test('La suma no resta', () => {
        const res = sumar(8, 3);
        expect(res).not.toBe(5);
    });

    test('La resta funciona correctamente', () => {
        const res = restar(8, 3);
        expect(res).toBe(5);
    });

    test('La multipliacion funciona correctamente', () => {
        const res = multiplicar(8, 3);
        expect(res).toBe(24);
    });

    test('La multiplicacion funciona correctamente', () => {
        const res = dividir(8, 3);
        expect(res).toBe(2.6666666666666665);
    });

    test('El resultado de la division debe ser mayor 2', () => {
        const res = dividir(8, 3);
        expect(res).toBeGreaterThanOrEqual(2);
    });

    test('El resultado de la suma debe ser menor que 10', () => {
        const res = sumar(2, 5);
        expect(res).toBeLessThan(10);
    });

});

describe('Assertion basicos en los Strings', () => {
    test('El campo debe tener un email', () => {
        const email = returnEmail();
        expect(email).toMatch(/[a-zA-Z].[a-zA-Z]\.com/);
        expect(email).toMatch('roger@roger.com');
    });

});

describe('Assertion basicos en  los objetos', () => {
    test('Dos objetos no son iguales', () => {
        const objA = returnObjects('roger', 'roger@roger.com', 'o342934823');
        const objB = returnObjects('fiorela', 'fiorela@fiorela.com', '498259238');
        expect(objA).not.toEqual(objB);
    });

    test('El objeto debe tener una propiedad email ', () => {
        const obj = returnObjects('roger', 'roger@gmail.com', '94285u235');
        expect(obj).toHaveProperty('email');
    });

    test('La propiedad  email del objeto debe ser siempre roger@gmail.com ', () => {
        const obj = returnObjects('roger', 'roger@gmail.com', '94285u235');
        expect(obj).toHaveProperty('email', 'roger@gmail.com');
    });

    test('La propiedad x debe ser una clase Rectangle ', () => {
        const r = new Rectangle(10, 30);
        expect(r).toBeInstanceOf(Rectangle);
    });

    test('El area de un rectangulo deber ser de 300 ', () => {
        const r = new Rectangle(10, 30);
        //TODO: implementar el metodo para calcular el area
    });

});

describe('Assertion basicos en  los arrays', () => {
    test('Array contiene leche', () => {
        const arr = returArray2();
        expect(arr).toContain('leche');
    });

    test('Array contiene {id: 5}', () => {
        const arr = arrObjects();
        expect(arr).toContainEqual({ id: 5 });
    });
});

describe('Assertions  con funciones mock', () => {
    test('Que la funcion haya sido llamada mockFn', () => {
        const mockF = jest.fn(() => 5);
        const res = mockF();
        expect(mockF).toHaveBeenCalled();
    });
    test('Que la funcion haya sido llamada varias veces: mockFn = 3 ', () => {
        const mockF = jest.fn(() => 5);
        const res = mockF();
        const res1 = mockF();
        const res2 = mockF();
        expect(mockF).toHaveBeenCalledTimes(3);
    });

    test('Que la funcion haya sido llamada con un parametro: testing enjoy', () => {
        const mockF = jest.fn(() => 5);
        const res = mockF('testing enjoy');
        expect(mockF).toHaveBeenCalledWith('testing enjoy');
    });


});

describe('Assertions basicos con booleanos', () => {
    test('Probar que algo es true', () => {
        const t = true;
        expect(t).toBeTruthy();

    });
    test('Probar que algo es false', () => {
        const f = false;
        expect(f).toBeFalsy();
    });
    test('Probar que algo es null', () => {
        const f = null;
        expect(f).toBeNull();

    });

    test('Probar que algo es undefined', () => {
        const f = undefined;
        expect(f).toBeUndefined();

    });

    test('Probar que algo es defined', () => {
        const f = 23;
        expect(f).toBeDefined();

    });
});



