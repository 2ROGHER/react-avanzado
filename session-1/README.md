# 1. Manejo de performance de aplicaciones React con Hook
* Gestionar la veolicidad de ejecucion de funcionalidades en React.js
* Utilizar los hooks `useMemo()` y `useCallback()`
* Gestionar el performarce mediante el cacheo de datos.
* **`El renderizado en aplicaicones grandes es demandante en cuestiones de performance, para ello se usa la gestion de performance`*

* *`La funciones de verificación me ayudan para ver si deben renderizarse un componente o si deben mostrase los valores registrados en la memoria, ESTA ES LA MENERA MAS EFECTICVA PARA CONTROLAR EL RENDERIZADO DE COMPOMENTES`**
## 1.1. useMemo()
* Este un sistema de caching que nos ofrece la posibilidad de registrar los datos en la memoria, de las ejecuciones anteriores en el `cache` 
* Si no esta catcheado el resultado puede tardar un poco mas al realizar la misma operacion otra vez.
Cuando una funcion en mas `expensive` en terminos de performance es necesario usar `useMEmo()` para optimizar el proceso.
* Todos los componentes pueden ejecutar el hook useMemo()
* Es un hook de react.js
* El catcheo de funciones no es necesario para todos los componentes solo es util para aquellos componentes en lo que es necsario usarlo.
* En aplicaciones bastante grande es importante el `catcheo`

* La primera vez que se renderiza se cachea la informacion y se memorizan los datos.
* 
### 1.1.1 pureComponente extension de Componete Class
* este es un componente que `no` tiene `estado propio` y es un componente como cuaquiera pero sin estado, sino que la informacion se le pasa por `props`.
* Para remediar el uso de componentes puros y la memorizacion, se creo el hook de `useMemo()`.
### 1.2.2 funciones de comparacion
* Hay veces que la props no tiene que coincidir con la props que se han renderizado recientemente.
* Estas props son importantes para saber si se van a renderizar o no
* Tambien nos permiten saber si el compoente se actualiza o no, si no se ha actualizado, solo se renderiza la informacion que se ha catcheado.
* Estos nos permiten decidir si un componete se renderiza o no, dependiendo del las prevProps o nextProps.
## 1.2 useCallback()
* El `useMemo()` hook lo usamos para `registralo` y el `useCallback()` lo usamos para ejecutar las  funciones de memorizacion
* Este hook nos permite resolver las funciones de control de cambios en props, si se han cambiado actualizamos si no han cambiado mostramos los datos `registrado-guardado`.
* Este es es controlador para los `useMemos()`

*`diferencias`* 
1. `useMemo()` se utiliza para la creacion de nuevos compoentes, mientas que `useCallback()` se usa para funciones en linea dentro de un componente
2. `useMemo()` es la alternativa para `React.memo()` para componentes de `clase`.
3. Son funciones de creacion que deben memorizar algo
4. `useCallback()` se usa para memorizar valores listados en la dependencia `[]`. son Funciones en linea.
5. `useMEmo()` se usa para crear componentes `memorizados`,mientras que `useCallback()` se usa para memorizar en cualquier componete `informacion` que queremos que se registre.
6. `useCallback()` se usa para memorizar aquellos valore que van a cambiar, si cambian se renderiza el componete y sino se muestra la información que se ha guardado.
