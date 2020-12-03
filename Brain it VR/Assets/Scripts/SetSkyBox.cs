using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SetSkyBox : MonoBehaviour
{
    public Material sunSetSkyBox;


    // Start is called before the first frame update
    void Start()
    {
        RenderSettings.skybox = sunSetSkyBox;
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
