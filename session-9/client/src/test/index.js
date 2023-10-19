// Aqui vamos a declarar todas las funciones y variables que necesitamos para 
// en los casos de prueba.

export const sumar = (a, b) => a + b;

export const restar = (a, b) => a - b;

export const multiplicar = (a, b) => a * b;

export const dividir = (a, b) => a / b;


export const returnEmail = () => 'roger@roger.com';

export const returnObjects = (name, email, password) => { return { name, email, password } };

export class Rectangle {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    calcArea() {
        return this.x * this.y;
    }
}

export const returArray1 = () => [1, 3, 5, 89, 10, 32];
export const returArray2 = () => ['leche', 'carro', 'mantequilla', 23.2];

export const arrObjects = () => [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 8 }];

