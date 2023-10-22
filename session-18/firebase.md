# Firebase con React JS
## 1. Intruduccion a Firebase
- *Firebase en un conjunto de servicios que nos ofrece Google*

- *Firebase es gratuito pero hay planes de pago que se puede adquirir a medida que crece el proyecto*

- _*Esto es una alternativa para no adquirir servicios de persistencia de datos, nos facilita la utenticacion mediante servicios de google*_

- Se trata de centralizar todos los `servicios` de nuestra app en una sola.

- Nos proporcionan servicios de `hosting` un total aprox de 100GB para nuestros proyectos.

- Existe un servicio de `analitics`

- Nos proporciona un servicio de distribucion para  nuestra aplicacion.

Instalaciones: 

```bash
    $ npm install  firebase
```
Luego se debe copiar la configuracion en un archivo.js
```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyuQ6jW8X0ZFeXjwRFilcFejZR8v0oo8s",
  authDomain: "fir-shoping-80655.firebaseapp.com",
  projectId: "fir-shoping-80655",
  storageBucket: "fir-shoping-80655.appspot.com",
  messagingSenderId: "656535222816",
  appId: "1:656535222816:web:2728177602d7cb271f1a45"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
```

Tailwind: 
```bash
    $ npm install -D tailwind postcss autoprefixer

    #inicializar el archivo de tailwind
    $ npx tailwindcss init -p

    # usamos la libreria de iconos de react icons
    $ npm install react-icons -S
```
## 2. Autentificacion co Firebase
*Para mayor informacion ver la documentacion de Firebase con web*

### 2.1 Crear la autenticacion con firebase

## 3. Notificaciones push con Firebase
- *ESte es un forma de enviarle aplicaciones `de notificaciones` nuestros clientes mediante el `nevegador`*
- *Estos notificaciones `push` son las tipicas notificaciones comunes que se reciben por medio del movil*

1. Envio de notificaciones  push a aplicacion de ReactJS.
- *Primero lo que se tiene que hacer es darle permisos para que se puedan enviar notificaciones*
- *Configurar la credenciales de nuestra aplicacion*

`key per`: Este es una clave que nos va  a permitir configuara los  permisos

2. Configuraciones para las  notificaciones push en Firebase
3. Prepar la maquina o el entorno de cliente.

*las sitaxis para este caso es el siguinte `<name>-messagin-sw.js`, esto nos permitira que nuestro editor pueda encontrar y deducir cual es el `service worker file`*

*La idea de obtener el token es jsutamente `guardar` ese token en algun lugar de persistencia (base de datos)*

*Los tokens se tienen que enviar al servidor para que puedan ser persisitidos y que cada unos de los clientes tengan su propio token*

*/Se trabajara con `Firestore` en lecciones posteriores/*

*Se pueden enviar notificaciones a todos los clientes que han aceptado las notificaciones de nuestro aplicacion*

## 4. Firestore
4.1 `Firestore`: Esta es la base de datos mas agil y la mas popular entre los desarrolladores
- Esta es la base de datos que estudiaremos.
- Esta es la base de datos mas agil en terminos de `performance` y al `correr las queries`.

4.1.1 Caracteristicas.

- Es escalable
- Este es un tipo de base de datos `no relacional`, `no sql`
- Este es una base de datos en el que se almacena `documentos` objetos de tipo `JSON` o `objetos de JS`
- En ves de `entetidades` se almacenan `documentos`

4.1.2 `Colecciones y documentos.`

4.1.3 `Indices:` Estos son los indices de los docuementos que se puede personalizar a gusto.

4.2 `Realtime DataBase`: Es la base de datos en la nube en tiempo real de Firebase.

4.3 Configuracion para trabajar con Firebase Store
*Se deben configurar las `reglas` para permitir el acceso a la base de datos de nuestra app*


## 5. Hosting en Firebase
*El hosting es un servicio que nos ofrece Google para implementar `desplegar` o `publicar` nuestros proyectos en la nube para que todos puedan utilizarlo*
*Se trata de subir nuestro proyecto o `alojarlo` en los servicios de la nube de Google*

1. Como funciona el hosting en firebase
2. Intalaciones necesarias
- Se tienen que instalar las dependencias necesarias para trabajar con el.
```bash
  # instalar las herramientas necesarias para trabajar con React y Firebase hosting
  $ npm install -g firebase-tools

  # luego tenemos que logearnos el firebase 
  firebase login

  # y finalmente inicializamos el proyecto
  firebase init



    # Luego se tiene que ejecutar el siguinete script para contruir la build optimizada del proyecto

  $ npm run build

  #Finalmente se ejecuta el script para desplegar la aplicaion en el host
  # este script nos crear una carpeta `build` en donde se encuentra todo los archivos que seran publicos al mundo
  # Esto nos permite subir el proyecto en el host de firebase
  $ firebase deploy

```
-
3. Vinculacion con repositorio de git
4. Despligue en Firebase a traves de CLI
5. Automatizacion de despliegue
6. Buenas practicas de despliegue
7. Despligue de proyecto final
## Notas: 
- `useContext() y createContext()`: son alternativas para la gestion de `estados` muy aparate de `redux`.

- installar `react-hot-toast`: Eston nos permite realizar confirmaciones a la hora de hacer procesos de login

```bash 
  $ npm i react-hot-toast
```


