# TESTING con React JS
## 1. Introduccion al Testing
- Es una serie de procesos.
- *Es una disiplina de la ingenieria de software que permite tener procesos, metodos de trabajo y herramientas para identificar defectos en el software alcanzando un proceso de estabilidad del mismo.*

- __Es un desiciplina que  compone de procesos y herramientas para eliminar en la mayoria del parte los `bugs` o errores en al fase de desarrollo de la aplicacion__

Caracteristicas: 
- *Permite identificar errores durante las fases de `desarrollo`*
- *Asegura la confinza del usuario final y su satisfaccion al usar el software.*
- *Optmiza la experienica de usuario final de la aplicacion*
- *Permite asegurar la `calidad` del producto y su correcto funcionamiento.*
- *Es necesario para mantener la reputacion del negocio en el sector.*
## 2. Introduccion al concepto de `Coverage`
- *Es el grado de covertura de la apliccion con respecto a los `tests`.*

eg.
- *Si tenemos una aplicacion con 4 funciones y queremos testear las 4 funciones y una de ellas pasa, solo tendriamos que testear los otros 3 que faltan.*

- Depende mucho de los `testers` que tanto de covertura se necesita realizar de la aplicacion. Trata de definir que porcentaje de la aplicacion se necesita realizar el `testing`.
- *El concepto de `coverage` demanda mucho de recursos, `experiencia`, de los desarrolladores para poder realizar `completamente` el testing de la aplicacion*.

## 3. Metodoligia TDD (Test Driving Development)
- *Desarrollo Guiado por  los Tests*
- *En proyectos grandes o extensos es util esta metologia*
- *Cuando se comience a desarrollar, se deben implementar los `casos` de test para controlar mejor el desarrollo.*
- __Primero se deve implementar las `pruebas  unitarias` y luego se implementa la `refactorizacion`__
### Objetivos del TDD
1. *Minimizar el numero de bugs*
2. *Implementar las funcionalidades justas que el cliente necesita y no mas*
3. *Producir software modular, altamente reutilizable y preparado para el cambio, y utilizarlo en todas partes del proyecto*
4. *Optimiza los recursos para desarrollar el producto*

## 4. Tipos de testing y diferencias
1. Forma.
- *Manual*: Se implementa las funcionalidad manualmente.
- *Automatizada*: Dentro de las casos de prueba se verifique automaticamente un determinada funcionalidad.
2. Nivel.
- *`Funcional`*: Se trata del propio comportamiento o funcionalidad de las partes de la aplicacion.
    1. `Unitarias`: *Cuando hacemos click aparece un alerta*
    2. `Integrales`: *Cuando se implementa un funcion general que se integran por debajo de esta funcion principal.*. Se prueba las funcionalidades una detras de otra funcion. Se prueba una serie de funcionalidades a cada una estas funciones y una prueba general para probar la conectividad de estas.
    3. `End to end`: *Es una forma de realizar el testeo desde la parte superior hasta la parte final del proceso*. Se mira arriba se mira abajo si ha pasado la prueba se acepta.
    4. `Aceptacion`: *ES una forma de que la prueba es aceptado por el usuario*
    5. `Regresion`: *Se trata de implementar tests y se verificar que las funcionalidades que se han  echo en la version anterior de la aplicacion funcionen correctamente en la version nueva que se esta desarrollado*
    6. Sanidad, Humo, Sistema

- *`No funcionales`*
    1. UX, Disenio, Seguridad, calidad
    2. Tiempo de carga, fuentes, seguridad, etc
    3. Rendimiento
    4. Portabilidad
    5. Portabilidad
    6. Usabilidad
    7. Estres
    8. Carga
3. Metodos
- *`Caja Blanca`*: *Entrar dentro del componente y ver toda la logica, toda el comportamiento y `testear` la funcionalidad de este mismo*.
- *`Caja Negra`*: *Es cuando se implementa una funcionalidad, y no se save que hace por dentro, solo se comunica por fuera pasandole arguemntos y se obtiene un resultado, independientemente de lo que pasa por dentro*. Los componentes de react se consideran como `cajas negras`.
- *`Caja Gris`*: *Es hacer una mezcla de las anteriores metodologias*
## 5. Introduccion a JEST.
- *Es una de las librerias mas usadas y empleadas para JS y React JS*
- *Es empleado por mas de 1GB de repositorios*
- *Esta basado en MOCHA testing*
- *Nos permiten realizar pruebas aizladas*

Instalar las dependecias de react-test-render
```bash
    $ npm install -D react-test-renderer
```
- Esto nos  permite simular que estamos ejecutando una aplicacion de React JS o que estamos renderizando un componente de React JS.

- Para agrupar todos los tests se usa el describe
- ejemplo de la session-09 para testear el Todo.jsx componente.

```jsx
import { cleanup, render, screen } from '@testing-library/react';
import Todo from '../src/components/pure/Todo';

// ESto se usa para borrar todos los renderizados anteariores
afterEach(() => cleanup());

describe('Todo component is workin correctly', () => {
    const todo = { id: 5, text: "Hacer la compra", completed: true };
    render(<Todo />);
    const todoelement = screen.getByTestId(`todo-test-${todo.id}`);
    it("should render Todo component", () => {
      expect(todoelement).toBeInTheDocument();
    });

    it('should have right text',() => {
        expect(todoelement).toHaveTextContent(todo.text)
    });

    const todo2 = { id: 5, text: 'Hacer cena', completed: true };
    render(<Todo todo={todo2} />);
    const todoelement2 = screen.getByTestId(`todo-test-${todo2.id}`);
    const checkbox2 = todoelement2.querySelector('#checkbox2');

    it('should be checked', () => {
        expect(checkbox2).toBeChecked();
    });
});

describe('Todo component should check/uncheck completed/not completed todos', () => {
    const todo = { id: 5, text: "Hacer la compra", completed: true };
    render(<Todo />);
    const todoelement = screen.getByTestId(`todo-test-${todo.id}`);
    const checkbox = todoelement.querySelector("#checkbox");

    it('should be checked', () => {
        expect(checkbox).toBeChecked();
    })
});

```
## 6. How to make a test 
- *La nomenclatura de es la siguiente `<name>.test.js`*
- *Los archivos con la extension `.test.js` son consideredos o llamados `suite tests`*.
- *Dentro de cada suite tests pueden haber varios `casos de prueba`*.

Metodos:

1. Describe: 
- *Este nos permite reunir dentro de un mismo grupo, tener varios tests o implementar muchos `casos de prueba` para testear una misma funcionalidad*.
2. It: 
- *Este es un alias de `test`.*

3. Assertions: 
- *Son es una forma de decirlo que esto es `asi`*.
- *Se usa la palabra reservada `expect`*
- *Este es un `matcher` que nos permite verificar si el `test` es igual que el valor que se espera que sea*.

para correr todos los tests del implementados en el proyecto se usa el comando: 
```bash
    $ npm test
```

### Matchers (Comparaciones)
Numeros

1. `toBe()`: permite vincular la respuesta de un valor con la entrada del test.

2. `toEqual()`: permite vincular la respuesta de un valor de entrada del test, pero es especialmente para `objetos`.

3. `not()`: permite revertir el valor del test.

Strings
4. `toMatch`: permite matchear strings en los casos de prueba.

### Mocks
- *Estos son ni mas ni menos que funciones falsas para testear el funcionamiento de nuestra aplicacion*
```jsx
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
```
## 7. Testing de componentes de React JS
