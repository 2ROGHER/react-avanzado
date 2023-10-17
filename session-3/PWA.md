# 1. Que es PWA (progresive web app)
* PWA significa progresive web app
* Es toda la funcionalidad web pero en el `movil`, el cual cuenta con ciertos permisos a la camara, `notificaciones`, en general todos los recursos del sistema `movil`.

* *Es toda funcionalidad que se pueden encontrar de las aplicaciones web, pero dentro del `movil`, compartiendo todos sus recursos para mejorar la experiencia del ususario*

# 1.2. Introduction a los service workers
* Son lo que nos permite que una web app pase a ser PWA, es decir una aplicacion case nativa para el `movil`.
* *Es un archivo JS*
* *Cuenta con muchos events listeners*: `install, activate, push, fetch, sync, message `
* *Es un archivo que esta pendiente de muchos eventos*
* *Es un intermediario entre el dispositivo y la web o el servidor*
- *Sigue corriendo incluso con la app cerrada -> hasta que eliminemos el achivio o lo hasta que se sustituye por otro*.
- *Debe correr en HTTPS*


## 1.3. Creando una PWA en Reat JS
``` bash
    npx create-react-app my-app --template cra-template-pwa
```

- Para hacer una aplicacion comun web a PWA tenemos que cambiar los ajusten en el archivo `index.js` las siguiente
```js
    /* NOta: 
    * Los `servicesworkers ` no funcionan ambito de desarrollo.
    */

    // from
    serviceWorkerRegistration.unregister();

    //to 
    serviceWorkerRegistration.register();
    
    
```
- Creamos una version de produccion pero en nuestro ordenador de forma local, para que los `sevices workers` funcionen correctamente.
- *Tambien se pueden desplegar a otro servidores de produccion*
```bash
    # Con esto creamos un build optimizada de production.
    $ npm run build
    
    # Una vez completada la compilacion tenemos que instalar el paquete `serve`, esto nos permite servir los paquetes de nuestra PWA
    $ npm install -g serve

    # Modificar el puerto de produccion y deplegar la aplicion con `serve`
    $ serve -s build -l 5000

```
## 1.4. Configuracion basica del Manifest y el service worker
- *Una vez compilado y desplegdo el proyecto en `produccion` tenemos que modificar el nombre en la carpeta `/build` en el archivo `manifest.json`*
## 1.5. Acceso Offline
- *Se puede trabajar gracias  a las paginas tipo PWA offline, es decir se puede correr la apliacion sin conexion a internet*.
- *Esto se realiza gracias al `cacheo o memorizacion` de la informacion en la memoria del dsipositivo*
## 1.6. Instalacion de PWA

# 2. Versiones de WPA
## 2.1.  Actualizacion de PWA
- *Cada vez que haya cambios se configurann el `manifes.json` y `service-workers.js`*

- *Como hacer para triggearlos -> Control de versiones dentro de `service-workers.js`*

- *Administrador de versiones de PWA*
- *cntrl + f5 => borrar la cache*
- *Por lo general el puerto 3000 se reserva para desarrollo y no para produccion*
- *Para que se getionen las versiones en PWA se tienen que cambiar los `service-workers.js`*
- 
## 2.2. Creando versiones del proyecto demo
## 2.3. Craer nuevos listener en el proyecto
- *Para ello se tienen que agregar en `service-workers.js`*
```js

    // Ahora lo que hacemos es agregar un nuevo eventListener
    self.addEventListener('install',event => {
    console.log(`Installing ${version}`);
    });

    self.addEventListener('activate',event => {
    console.log(`!Activating ${version}`);
    });
```
## 2.4 Lanzando avisos o notificaciones de cambio de versiones
- *para esto usaremos `service-worker-update` dependencia.*
```bash
    # instalamos la dependencia
    $ npm install -g service-worker-update
```



