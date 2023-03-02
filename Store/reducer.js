const Post=[]

export default function  reducer(state=Post,action){
    switch (action.type) {
        case 'Ajouter':
            return [...state,{...action.post,id:state.length!==0?state[state.length-1].id+1:1}]
        case 'Supprimer':
                return state=state.filter(p=>p.id!==parseInt(action.id))
        case 'Modifier':
                state[action.index]=action.post
            return state
        default:
            return state;
    }
}