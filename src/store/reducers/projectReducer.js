const initState = {

    projects:[
        {id:1,title:'something',content:'something else'},
        {id:2,title:'something',content:'something else'},
        {id:3,title:'something',content:'something else'},
    ]
}

const projectReducer = (state = initState,action)=>
{
    switch(action.type){

        case 'CREATE_PROJECT':
            console.log('project created',action.project)
    }
    return state;

}

export default projectReducer;
