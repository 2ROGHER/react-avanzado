## 1. Vite
### Para que Vite JS
1. Permite gestionar e importar dependecias `npm` usando su nombre
2. Transpilar Javascript
3. Compilar preprocesadores
4. Gestionar el desarrollo y produccion (hacer el build y el desarrollo del proyecto)

Vite permite realizar de una manera comoda y global del conjunto de necesidades para el desarrollo de la aplicacion web como lo hacian: 

1. Webpack
2. Parcel
3. PostCss

### Por que usar Vite JS
1. Mas sencilla que cualquier otra herramienta.
2. Mas rapido en la etapa de desarrollo utiliza `esbuild` por debajo.
    - Arranque del servidor de desarrollo
    - Compilacion y refresco casi instantaneo
3. __Independiente del stack. Se puede utilizar Vite en cualquier tipo de `stack` ya sea ReactJS, Vue, Angular, etc.__

### esbuild
Esta es una herramienta de compilacion de JS que esta echo en Go Lang el cual lo hace mucho mas rapido el proceso de `compilacion ` del proyecto. Ademas se hace un cacheo de y solo se se regrezfa el codigo que se ha cambiado.
1. Escrito en Go Lang
2. Cacheo de la compilacion de dependencias
3. Sirve los archivos en ES Modules
4. Hot Module Replecement

### Rollup
Esta es una herramienta madura, estensible y realiza una ejecucion en distintas capas de compatibilidad para los navegadores.

Se usa para realizar el `build` y obtener el `bundle` file para la produccion del proyecto

### Comenzar con ViteJS
1. Instalar node.js en la maquina.
2. Crear un proyecto con npm 

```bash
    $ npm create vite@latest

    # instlacion de las dependencias de vite
    $ npm install 

    # Desplegar el servidor
    $ npm run dev
```
