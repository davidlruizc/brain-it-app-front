using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Questions
{
    private string question;
    private string correctQuestion;
    private string[] options;

    public Questions(string question, string correctQuestion, string[] options)
    {
        this.question = question;
        this.correctQuestion = correctQuestion;
        this.options = options;
    }

    public string Exercise
    {
        get { return question; }
        set { question = value; }
    }
    public string CorrectAnswer
    {
        get { return correctQuestion; }
        set { correctQuestion = value; }
    }
    public string[] Options
    {
        get { return options; }
        set { options = value; }
    }
}

public class ExerciseReading : MonoBehaviour
{
    [SerializeField] TextMeshProUGUI sentenceText;
    [SerializeField] private Button[] buttons;

    public AudioSource correctSoundFx;
    public AudioSource wrongSoundFx;
    public AudioSource gameOverFx;

    private int currentQuestionIndex = 0;

    // Create a list of parts.
    List<Questions> QuestionList = new List<Questions>();

    // Start is called before the first frame update
    void Start()
    {
        FillQuestionsList();
        QuestionsContent();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    // Main Title and buttons
    private void QuestionsContent()
    {
        sentenceText.text = QuestionList[currentQuestionIndex].Exercise;
        IntializeButtons();
    }

    // Initialize buttons
    private void IntializeButtons()
    {
        for (int i = 0; i < buttons.Length; i++)
        {
            Button button = buttons[i];

            int buttonIndex = i;

            var buttonText = QuestionList[currentQuestionIndex].Options[buttonIndex];

            button.GetComponentInChildren<TextMeshProUGUI>().text = buttonText;

            button.onClick.AddListener(() => ValidateAnswer(buttonText));
        }        
    }

    // Validate answer
    private void ValidateAnswer(string answer)
    {
        var rightAnswer = QuestionList[currentQuestionIndex].CorrectAnswer;

        if (currentQuestionIndex != QuestionList.Count - 1)
        {
            StopGameOverFx();

            if (answer == rightAnswer)
            {
                NextQuestion();
                StopWrongFx();
                PlayCorrectFx();
            }
            else
            {
                StopCorrectFx();
                PlayWrongFx();
            }
        }
        else
        {
            PlayGameOverFx();
        }
    }

    // Next question
    private void NextQuestion()
    {
        currentQuestionIndex++;
        QuestionsContent();
    }

    // Fill questions list
    private void FillQuestionsList()
    {
        QuestionList.Add(new Questions(
            "While I _____________ (check) on my match account (an internet app for dating older people), I ________ (find) my school’s best friend Johan. I immediately ________ (write) to him.  A few hours later, he replied (reply) to me inviting me to Cartagena where another friend was living (live).",
            "was checking, found, wrote, replied,  was living",
            new string[] { "was checking, found, wrote, replied,  was living", "checking, found, write, replied,  was living", "check, found, write, replied,  live", "was checking, find, write, replied,  was living" }
        ));
        QuestionList.Add(new Questions(
            "As _________(be)  unemployed I ________ (decide)  to travel there. When I arrived at the airport, I _______ out all our classmates _________ (be) there. They _______ (take) me to Brian’s house.",
            "I was, decided, found, were, took",
            new string[] { "I was, decide, found, were, took", "I am, decided, found, were, take", "I was, decided, found, were, took", "I was, decided, find, be, take" }
        ));
        QuestionList.Add(new Questions(
            "There, Brian __________  (start) to tell me he ____________ (been married)  to Jess for 3 years, but they ___________ (divorce) because they couldn’t be together at the same house.",
            "started, had been married, got  divorced",
            new string[] { "started, has been married, get divorced", "started, had been married, got  divorced", "start, had been married, got divorced", "started, been married, got  divorced" }
        ));
        QuestionList.Add(new Questions(
            "Then, Johan told me he ___________ (work) as a real estate agent, he ________________ (Marry) yet, that is the reason why he had been (be) the same person, meaning that he ______ (be) still a womanizer.",
            "was working, had not been married, he had been, was",
            new string[] { "was working, had not been married, he had been, was", "was working, had not been married, he had been, was", "is working, has not been married, he had been, was", "is working, had not been married, he has been, was", }
        ));
        QuestionList.Add(new Questions(
            "After, Brian _______ (ask) me about my life and I ____________ (start) to tell him that I _________ (be) unemployed because I __________ (graduate) as an engineer and a few years later I ____________ (design) a very successful application.",
            "asked, started, was, graduated, designed",
            new string[] { "ask, started, am, graduated, designed", "asked, start, was, graduated, have designed", "asked, starting, was, graduated, design", "asked, started, was, graduated, designed" }
        ));
        QuestionList.Add(new Questions(
            "By the time I ___________ (find) I was a rich guy, I _________ (decide) to quit my job. Since then, I _______________ (be worried) about any expenses. After a wonderful holiday, I __________ (come) back home, and I _________ (invite) them to visit me the next year.",
            "had found, decided, had not been worried, came, invited",
            new string[] { "had found, decided, had not been worried, came, invited", "have find, decide, have not been worried, came, invited", "had found, decided, am not been worried, came, invite", "had found, decided, am not worried, came, invited" }
        ));
    }

    // Sound effects section
    private void PlayCorrectFx()
    {
        correctSoundFx.Play();
    }

    private void StopCorrectFx()
    {
        correctSoundFx.Stop();
    }

    private void PlayWrongFx()
    {
        wrongSoundFx.Play();
    }

    private void StopWrongFx()
    {
        wrongSoundFx.Stop();
    }

    private void PlayGameOverFx()
    {
        gameOverFx.Play();
    }

    private void StopGameOverFx()
    {
        gameOverFx.Stop();
    }
}
