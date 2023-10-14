# 1. Hooks en React
* Los hooks basicamente se utilizan para la gestion y el control de los componentes y los datos que se manejan con los componentes.

# 2. Creacion de Hooks personalizados
* Se usa la sintaxis de `use...` para referirce a los hooks que se esta customizando.
* Todos los hooks son `funciones` con dependencias que realizan determinadas funcionalidades.
* Un hook debe ser `generico` para  todos los componentes
* Nota, cuando se elimina el `array de dependencias` del useEffet(), le estamos diciendo que queremos que se ejecute cada vez que se actualiza el componente.

## 2.1 Consideraciones
- *`Detectar comportamientos recurrentes dentro de una app y crear una funcion que devuelva un valor y una funcion y asociarla a una variable o una funcion dentro de un componente`*.
- Son snippets de codigos que se utilizan con los componentes
- Los hooks son importantes para proyectos grandes en los que se presenten codigos repetitivos o recurrentes. Esto ayuda a simplificar las lineas de codigo

# 3. Generics o genericos
- Esta es una sintaxis en el que le definimos que todo lo que se le pase por parametro es un `generico`, para todos o en general.
- Tiene su mayor resplandor con `typescript`.
- Los genericos nos dicen que todo informacion que se use en ese codigo sea generico.
