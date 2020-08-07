const Sound = require('react-native-sound');

const activities = [
  {
    id: 1,
    topic: 'Past Simple',
    questions_count: 5,
    questions: [
      {
        id: 1,
        sound: new Sound('activity.ogg', Sound.MAIN_BUNDLE),
        question: 'Why did our grandparents invite us to spend some time in Bogota?',
        options: [
          `Because of Colombia's independence day.`,
          `Because we hadn’t been in Bogotá since January`,
          `Because they wanted some lemons from Argentina`
        ],
        correctAnswer: `Because we hadn’t been in Bogotá since January`,
      },
      {
        id: 2,
        sound: new Sound('activity.ogg', Sound.MAIN_BUNDLE),
        question: 'Why did the dog start to follow us at the airport?',
        options: [
          `Because of the strong smell`,
          `Because of our big luggage`,
          `Because we had drugs in our luggage`
        ],
        correctAnswer: `Because of the strong smell`
      },
      {
        id: 3,
        sound: new Sound('activity.ogg', Sound.MAIN_BUNDLE),
        question: 'What happened at the end of the story?',
        options: [
          `We couldn’t take our flight.`,
          `We took our flight on time`,
          `Security guards didn’t let us go. `
        ],
        correctAnswer: `We took our flight on time`
      },
    ]
  }
];