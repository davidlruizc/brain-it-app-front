using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShowHideMenu : MonoBehaviour
{
    public GameObject MenuObject;
    public GameObject ExerciseObject;
    private bool Visible = true;
    private bool VisibleExercise = false;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }


    // Toggle visibility on menu
    public void ToggleVisibilityMenu()
    {
        if (!Visible)
        {
            MenuObject.SetActive(true);
            ExerciseObject.SetActive(false);
            Visible = true;
            VisibleExercise = false;
        }
        else
        {
            MenuObject.SetActive(false);
            ExerciseObject.SetActive(true);
            Visible = false;
            VisibleExercise = true;
        }
    }
}
