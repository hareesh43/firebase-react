export const createProject = (project) =>
{
    return(dispatch,getState)=>
    {
        //make async tasks like connect to database
        dispatch({type:'CREATE_PROJECT',project});

    }
};
