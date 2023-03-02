import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Modifier } from '../Store/action'
import { Link,useParams } from 'react-router-dom'

export default function ModifierPost() {
    const {id}=useParams()

    const posts=useSelector(data=>data)
    const index=posts.findIndex(p=>p.id===parseInt(id))

    const [post,setpost]=useState(posts[index])

    const dispatch=useDispatch()


    const handleonchange=(e)=>{
        setpost({...post,[e.target.name]:e.target.value})
    }
    const handleModifer=(e)=>{
        e.preventDefault()
        dispatch(Modifier(post,index))
    }

  return (
    <div>
        <center>
        <form onSubmit={handleModifer}>
            <h1>ModifierPost</h1>
            <label htmlFor='title'>Title </label><br/>
            <input type={'text'} onChange={handleonchange} value={post.title} name={'title'}  id={'title'}/>
            <br/>
            <label htmlFor='body'>Body </label><br/>
            <input type={'text'} onChange={handleonchange} value={post.body} name={'body'}  id={'body'}/>
            <br/>
            <br/>
            <input type={'submit'} value={'Modifier'} />
            </form>
            <Link to={'/'}>Lister Posts</Link>
        </center>
    </div>
  )
}
