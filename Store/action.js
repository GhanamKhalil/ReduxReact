export const Ajouter=(post)=>{
    return {type:'Ajouter',post:post}
}
export const Supprimer=(id)=>{
    return {type:'Supprimer',id:id}
}
export const Modifier=(post,index)=>{
    return {type:'Modifier',post:post,index:index}
}