import React from 'react'

export default function Projectdetails(props) {
     const id = props.match.params.id;
    console.log(props)

    
    return (
        <div className = 'container section project-details'>
            <div className = 'card z-depth-0'>
                <div className = 'card-content'>
                    <span className = 'card-title'>Project Title ={id} </span>
                    <p>**Do you want to request a *feature* or report a *bug*?**  

                        (If this is a *usage question*, please **do not post it here**—post it on [gitter](https://gitter.im/redux-firebase/Lobby). If this is not a “feature” or a “bug”, or the phrase “How do I...?” applies, then it's probably a usage question.) </p>
                </div>
                <div className = 'card-action gret lighten-4 grey-text'>
                    <div>Poster bu unni</div>
                    <div>On march 2020</div>


                </div>
            </div>

            
        </div>
    )
}
