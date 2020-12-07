# Brain It App

Academic application for English learning


**src/navigation/BottomTab.js**

### 1. BottomTab

Main App navigation
Here you can find all the main tabs available in the app using a React Navigation `Bottom Tab navigator`.   

-----
**src/navigation/Interactive.js**

### 1. InteractiveNav

Navigation flow for interactive section.

This section is for the excercises like VR and listening

```html
<Interactive />
<Listening />
<ListeningExercise />
```   

-----
**src/screens/Grammar/Grammar.js**

### 1. Grammar

Grammar section listing some excercises   

-----
**src/screens/Grammar/Lecture.js**

### 1. Lecture

Reading seccion.
Quiz type for reading practice.   

-----
**src/screens/Home/Home.js**

### 1. Home

List intro videos about the topi.

E.g:
```js
<Home />
```   





## TODO

*David*

- [ ] Feature VR: Ejercicio de completar texto realizarlo con selección multiple con las gafas.

*Duvan*
- [X] Inicialización proyecto react native última versión.
- [X] Instalar dependencias usadas en la versión anterior.
- [X] Configuración de dependecias: React Navigation 5, react-native-elements, react-native-svg.
- [X] Mover componentes de la versión anterior y revisar compatibilidad.
- [ ] Ejercicios Grammar: Actualizar las preguntas y respuestas.
- [ ] Añadir thumbnails para los videos.
- [ ] Llenar base de datos de las preguntas.
- [X] Investigar react-native-sound si está deprecada buscar alternativa de react-native-sound e implementar.
- [ ] Feature Listening: De la actividad de lectura de textos reproducir audio y responder las preguntas de selección multiple.
- [ ] Diseño UI perfil.


## Contribuciones

Para colabolar en el proyecto se debe hacer una rama especifica relacionada a la feature que se esté trabajando `feature-<feature name>`. No se pueden hacer contribuciones directamente a `master`, debe hacerse un pull request para validar el merge debido a la rama `develop`. Estos merge solo serán aprobados por los contribuidores que estén asignados a la revisión.
