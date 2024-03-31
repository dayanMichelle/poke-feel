
# Poke Feel

Es una aplicación web en la cual puedes tener un registro de tu sentimiento del día en base a unas preguntas y relaciona tu sentimiento con un pokemon (a esto le llamamos PokeFeel) usando inteligencia artificial del lado del servidor.




## Demo

![App Demo](https://github.com/dayanMichelle/poke-feel/blob/main/assets/demo.png?raw=true)


## Features

- Light/dark theme
- Local Storage sincronizado entre pestañas
- Caché con Tanstack-query
- Mobile First
- Servidor funcional


## Taller

Las carpetas enumerados están hechas con fines educativos para explicar ciertos conceptos de `React JS`, cada carpeta tiene su archivo `README.MD` en la cual está una lista de __TODOS__ que contiene varios retos.


| Carpeta                                    |  Concepto                          | Nivel      |
| :------------------------------------------| :----------------------------------| :----------|
| 1-conceptos-basicos-react                  | `useState, props, render`          | Basico     |
| 2-rutas-react                              | `react-router-dom, paginas`        | Basico     |
| 3-asyncronia-basica-custom-hook            | `useEffect, fetch, map, customHook`| Basico     |
| 4-asyncronia-media-componentes-controlados | `services, axios, inputs`          | Intermedio |
| 5-asyncronia-avanzada                      | `tanstack-query, caché`            | Intermedio |



## Tech Stack

**Client:** React, TailwindCSS, Tanstack-query/@react, NextUI, React router dom

**Server:** Node, Express


## Installation

### BACK
#### Requisitos

```bash
NODE JS >= 20
```

#### Pasos

Primero tienes que instalar el proyecto back y ponerlo en funcionamiento, los pasos son:
* Copiar el archivo `.env.example` y pegarlo en un archivo `.env`
* Si quieres empezar con data, ve a la ruta `/back/src/data` , copia y pega los archivos `*.example.json` y sacale el `example` del nombre del archivo

```bash
  cd back
  npm install
  npm run dev
```

### FRONT
#### Requisitos

```bash
NODE JS >= 20
```

Los pasos son:
* Copiar el archivo `.env.example` y pegarlo en un archivo `.env`

Cada carpeta tiene su propio `package.json` por lo cual para instalar un proyecto front, estos son los comandos:

```bash
  cd <NOMBRE_CARPETA_FRONT>
  npm install
  npm run dev
```

Para hacer que Tailwind compile las clases es necesario ejecutar en otra terminal de la carpeta lo siguiente:

```bash
  npm run tailwind:watch
```
    
## API Reference

### Question

#### Get all questions

```http
  GET /question
```

| Parameter | Type      | Description                           |
| :-------- | :-------  | :-------------------------            |
| `random`  | `boolean` | trae de forma aleatoria las preguntas |
| `limit`   | `number`  | cantidad de preguntas que trae        |

### User

#### Get user

```http
  GET /user
```

#### Create / Update user

```http
  POST /user
```

| Body      | Type      | Description                           |
| :-------- | :-------  | :-------------------------            |
| `id`      | `UUID`    | id generado desde el cliente          |
| `name`    | `string`  | nombre del usuario                    |
| `pokemon` | `string`  | nombre de su pokemon favorito         |
| `trainer` | `string`  | nombre de su entrenador favorito      |

### Pokemon

#### Get all pokemons

```http
  GET /pokemon
```

#### Get an random pokemon

```http
  GET /pokemon/random
```

### Trainer

#### Get all trainers

```http
  GET /trainer
```

### Feeling

#### Get all feels

```http
  GET /feeling
```

#### Create an feel

```http
  POST /feeling
```

| Body      | Type      | Description                              |
| :-------- | :-------  | :-------------------------               |
| `answers` | `array`   | listado de preguntas con su respuesta    |
| `model`   | `string`  | model AI que va a evaluar el sentimiento |

#### Delete all feels

```http
  DELETE /feeling
```

#### Delete an feel

```http
  DELETE /feeling/:id
```
