## 1. Documentacion en React JS y control de tipos
*La documentacion es importante para transmitir a otras personas sobre el desarrollo o el trabajo de nuestro proyecto*

*Utilizaremos la `libreria` _Documentation JS_*.

*Nos permite realizar documentacion limpias , legibles y sobre todo automaticas*

*El archivo `readme.md` es un archivo de documentacion, tipicamente*

Instalacion de documentation.js
```bash
    $ npm install -S documentation
```
- Se pueden realizar nativamente con la ayuda de `DocJS` que se implementa en le propio lenguaje.
### 1.2 Flow JS
* Es una especie de `TypeScript` pero para JavaScript
- Este es un tipeador de o checkeador de `typos de datos`.

instalacion: 
```bash
    $ npm i -D @babel/core @babel/cli @babel/preset-flow flow-bin

    #luego tenemos que ejecutar el script para generar un achivo de confi.
    $ npm run flow init

    # Finalmente se debe correr el siguiete script para eche un vistazo a todos los fichero si estan correctos o no
    $ npm run flow
```

Debido a problemas con la instalacion de `flow`, se debe instalar el `archivo` binario cmo un programa de windows, para que funcione correctamente e `instalarlo`.

### 1.3 DocumentationJS
- Se tiene que realizar un comando en el package.json para ejecutar la documentation.
```json
    {
        "scripts": {
            "docs:dev": "documentation build src/** -f  html --github -o docs"
        }
    }
```
- Recomendado  revisar la documentacion oficial de `documentation js`. link: https://documentationjs.org

- *`La documentacion de un proyecto es una de las mejores practicas de desarrollo`*.

## 2. Control de tipos
- Se puede hacer con TypeScript (recomendado).
- Se puede hacer con `FlowJS`. link:  https://flow.org/

*Este es un modo de controlar el tipo de datos con los que trabaja en el proyecto*
