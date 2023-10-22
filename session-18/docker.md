## 1. Docker y React JS
? Que es docker ?
- *Es un sistema que nos permite paquetizar todo nuestra app para que pueda correr o ejecutarse, independientemente del sistema o la maquina en la que va a correr*

- *Todos los procesos que se llevan a a cabo de la aplicacion solo van a ejecutarse dentro del contenedor que seria casi igual que `maquina virtual`*

- *Sistema de contenerizacion de procesos*

- *Es una especie de hosting*

- *Es una forma de paquetizar software para que pueda ejecutarse en cualquier maquina.*

- *Hosting que nos permite contenedorizar aplicaciones*.

Contenedores
- *Trabajar con docker es mucho mas eficiente que trabajar con las maquinas virtuales para procesos separados*

- *Son cada uno de los procesos que el sistema esta corriendo o  ejecutando totalmente indepndientemente del sistema en el que se ejucta*

Procesos

- *El proceso que se esta ejecutando dentro de un contenedor no afecta al resto de los contenedores*

- *Todo lo que pasa dentro de un proceso se queda dentro del proceso*

- *Todos los  procesos son ejecutados de forma aizlado, no afecta a a ningun otro proceso y es independienteemente del sistema en el que se ejecuta*

## 2. Partes de docker
1. Docker file: 

- *Este es la guia en donde definimos en que entorno se va a correr la aplicacion*
- *Es el archivo donde se define la `imagen`*

2. Imagen: 

- *Es el proceso o la aplicacion una vez `compilado`.*
- *Es cada uno de los procesos compilados de la aplicacion*.

3. Contenedor:
- *En base  a la imagen es el que se crea el `contenedor`.*
- *Es el proceso una vez ejecutado o ejecutando el proceso dentro de un entorno de ejecucion*.
- *El proceso que se ejecuta, ya sea de node, de java, de python en un determinado `entorno de ejecucion` ya sea window, o cualquier otro SO, es el `contenedor`.*

## 3. Instalacion

link: https://docker.com/get-started

1. Instalar el docker desktop desde la pagina principal: Esta aplicacion nos proporciona el CLI para ejecutar los comandos de `docker` y lo que hacemos es intalar la aplicacion de escritorio para llevar a cabo las configuraciones de los entornos de ejecucion.
2. Una vez instalado y corriendo en nuestro SO, lo que primero tenemos que hacer es crear la `imagen`.
3. Primero se tiene que logear (crear una cuenta y contrasenia) crear un usuario dentro de docker.
4. Instalar extensiones: 
    - docker de microsoft

## 4. Creacion de docker file

sintaxis: 
`Dockerfile`: sin niguna extension tal como se muestra

```Dockerfile
FROM node:12

WORKDIR: /app #definimos el entorno de trabajo

COPY package*.json ./ #desde el `package.json` a cualquier carpeta que docker nos asigne

RUN npm install # lanzar un comando: le decimos que instale todas las dependecias de nuestro proyecto.

COPY . . # hacemos una copia en la carpeta de destino del contenedor

ENV PORT = 3000 # inicializamo el puerto en el que se  va a correr el proceso

EXPOSE 3000 # inicializamos el puerto de  nuestro contenedor en el que se corre el proceso

CMD ["npm", "start"] # le decimos los comandos que se van a emplear en la ejecucion del proceso
```
Contruccion del contenedor docker o en este caso la `imagen`.

```bash
    # cada vez que se actualice los archivos de debe correr este script para actualizar el contenedor. Nota: esto es en desarrollo
    docker build -t gorkavillara/leccion-docker
```
Luego tenemos que correr la imagen dentro del contenedor de docker

```bash
    # utilizamos el puerto 4000 de  nuestro dispositivo para servir la aplicacion pero en el puerto 3000 como siempre.
    $ docker run -p 4000:3000 gorkavillara/leccion-docker 
```
Subir esta imagen en el `docker hub` para de esta manera otros desarrolladores puedan descargarlo en sus sistemas y correrlos tranquilamente.

```bash
    $ docker push gorkavillara/leccion-docker
```

Para descargar una imagen o el proceso dentro de nuestro sistema. Se puede hacer directamente en el docker desktop con la opcion `run`
```bash
    $ docker pull gorkavillara/leccion-docker
```