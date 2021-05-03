# Brain It App

Academic application for English learning

**src/components/Auth/Layout.js**

### 1. Layout

Definición de Layout general, con el color base de la identidad de la app.

Este componente tiene como props un componente children children

```js
<Layout>
  <Text>Hola Mundo</Text>
</Layout>
```

---

**src/components/Global/Button.js**

### 1. Button

Botón generalizado dentro de la estructura de diseño de la app. Contiene las props nativas
de un botón más las siguientes:

```
@param {object} styleContainer - estilos para el contenedor padre
@param {object} styleTitle - estilos de titulo
@param {string} titlePosition - posición del titulo: 'left'
```

```js
<Button />
```

---

**src/components/Interactive/ProgressSteps.js**

### 1. ProgressStepsLayout

Formulario wizard con carga de ejercicios de forma aleatoria usando el siguiente metodo

```js
const suffleQuestions = React.useCallback(() => {
  let questions, i;

  for (questions = [], i = 0; i < NUMBER_QUESTIONS; ++i) {
    questions[i] = i;
  }

  let tmp,
    current,
    top = questions.length;
  if (top) {
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = questions[current];
      questions[current] = questions[top];
      questions[top] = tmp;
    }
  }

  setSuffleQuestionItem(questions);
}, []);
```

Parametros necesarios

```
@param {object} data - ejecicios
```

---

**src/components/Interactive/Steps.js**

### 1. Steps

Componente carga cada paso dentro del wizard con la información sobre el ejercicio a cursar y combina las respuestas de forma aleatoria.

```js
const suffleAnswers = React.useCallback(() => {
  let array = options;

  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  setStateAnswers(array);
}, [options]);
```

Props del componente:

```
@param {string} sound - nombre del archivo .mp3
@param {string[]} options - selección múltiple
@param {string} question - pregunta, encabezado
@param {string}  correctAnswer - opción correcta
@param {function} nextStep - acción envia al siguiente ejercicio
@param {number} currentIndex - index actual dentro de wizard
@param {number} numberQuestions - número total de preguntas
```

---

**src/components/Player/PlayPause.js**

### 1. PlayPause

Permite reproducir audio mostrando una barra de progreso del audio que esté actualmente corriendo

```js
@param {string} audioClip - nombre archivo de audio
```

---

**src/navigation/BottomTab.js**

### 1. BottomTab

Bottom Tab Navigator contiene la navegación raíz de la aplicación con sus componentes principales

```md
- Home: Lista de reproducción de videos introductorios al tema
- Grammar: Taller practico de lectura para gramatica.
- Interactive: Aplicar conocimientos con actividades ludicas
```

---

**src/navigation/Grammar.js**

### 1. GrammarNav

Navegación para gramatica con los siguientes componentes:

```js
<Grammar />
<Lecture />
<LectureQuiz />
```

---

**src/navigation/Home.js**

### 1. HomeNav

Navegación inicial con los siguientes componentes:

```js
<Home />
<VideoPlayer />
```

---

**src/navigation/Interactive.js**

### 1. InteractiveNav

Navegación sección interactiva

```html
<Interactive />
<Listening />
<ListeningExercise />
```

---

**src/screens/Home/Home.js**

### 1. Home

Primera pantalla que ve el usuario al ingresar, lista de reproducción de videos.

Cada item contiene la siguiente información para que sea cargado dentro de cada tarjeta.

```js
{
    title: 'Welcome to brainit',
    shortDescription:
      'Welcome to the new app BrainIt. In this video, our hosts invite you to enjoy it.',
    description:
      'In these lessons, we are going to work on holidays and vacations. These activities are designed for students at an intermediate level. Then, you will have to do some activities in order to develop skills like reading and listening. You will also practice aspects such as grammar and vocabulary.',
    videoId: 'PAaJtiIG6ro',
    image: 'tempThumbnail',
  }
```

Uso:

```js
<Home />
```

---

**src/screens/Home/VideoPlayer.js**

### 1. VideoPlayer

Reproducción de video, carga la información proveniente de parametros de navegación.

Este componente muestra un video de YouTube junto a información de cada item generado por la pantalla anterior.

```
Parametros de navegación:
@param {string} videoId - id de referencia que provee YouTube.
@param {string} title - titulo del tema
@param {string} description - descripción del tema
```

---

**src/screens/Interactive/Interactive.js**

### 1. Interactive

Sección Interactive carga las tarjetas referentes a los ejercicios de Realidad Virtual y listening

Uso:

```js
<Interactive />
```

---

**src/screens/Interactive/Listening.js**

### 1. Listening

Listado de los ejercicios principales correspondientes a Listening por tema

```js
[
  {
    id: 1,
    topic: 'Past Simple',
    questions_count: 6,
    questions: [
      {
        id: 1,
        sound: 'audio_one.mp3',
        question: `question here`,
        options: [`options`, `options`, `options`, `options`],
        correctAnswer: `options`,
      },
    ],
  },
];
```

---

**src/screens/Interactive/ListeningExercise.js**

### 1. ListeningExercise

Vista que muestra los ejercicios de listening por medio de un wizard form

Recibe parametros de navegación:

```
@param {string} sound - nombre del archivo de audio alojado en android/app/src/main/res/raw
@param {string} question - pregunta / enunciado del ejercicio.
@param {string[]} options - opciones de selección múltiple
@param {string} correctAnswer - respuesta correcta.
```

---

**src/screens/Interactive/VREnvironment.js**

### 1. VREnvironment

Componente muestra información más video tutorial de guía para el uso de la actividad de Realidad Virtual

Se realiza la siguiente validación para el caso en el que el usuario cuente o no con la aplicación de VR instalada en su dispositivo.
Si se cuenta con la aplicación previamente instalada al accionar el botón este hará un deep linking que abrirá la app y podrá continuar con el flujo de aprendizaje,
en su defecto lo dirije a un link el cual le permitirá descargar la aplicación tal cual se indica en el tutorial.

```js
const openPackageApp = () => {
  IntentLauncher.isAppInstalled(PACKAGE_NAME)
    .then((result) => {
      IntentLauncher.startAppByPackageName(PACKAGE_NAME).catch((error) =>
        Alert.alert(
          'Error',
          'There is a problem trying to open the app, please try later'
        )
      );
    })
    .catch((error) => {
      downloadVRApp();
    });
};
```

## Contribuciones

Para colabolar en el proyecto se debe hacer una rama especifica relacionada a la feature que se esté trabajando `feature-<feature name>`. No se pueden hacer contribuciones directamente a `master`, debe hacerse un pull request para validar el merge debido a la rama `develop`. Estos merge solo serán aprobados por los contribuidores que estén asignados a la revisión.
