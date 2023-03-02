import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Item from './Item'
import { Link } from 'react-router-dom'
import { Supprimer } from '../Store/action'
export default function ListerPost() {
const posts=useSelector(data=>data)
const dispatch=useDispatch()

const handleSupprimer=(e)=>{
    dispatch(Supprimer(e.target.value))
}
  return (
    <div>
    <center>
        <h1>ListerPost</h1>
        <Link to={'/Ajouter-Post'}>
            Ajouter
        </Link>
        <table border={1} style={{width:'500px'}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((p,i)=><Item key={i} post={p} handleSupprimer={handleSupprimer}/>)}
            </tbody>
        </table>
</center>
    </div>
  )
}
