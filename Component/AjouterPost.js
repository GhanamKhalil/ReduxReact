import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { Ajouter } from '../Store/action'
import { Link } from 'react-router-dom'

export default function AjouterPost() {
    const [post,setpost]=useState({id:0,title:'',body:''})
    const dispatch=useDispatch()


    const handleonchange=(e)=>{
        setpost({...post,[e.target.name]:e.target.value})
    }
    const handleAjouter=(e)=>{
        e.preventDefault()
        dispatch(Ajouter(post))
    }

  return (
    <div>
        <center>
        <form onSubmit={handleAjouter}>
            <h1>AjouterPost</h1>
            <label htmlFor='title'>Title </label><br/>
            <input type={'text'} onChange={handleonchange} name={'title'}  id={'title'}/>
            <br/>
            <label htmlFor='body'>Body </label><br/>
            <input type={'text'} onChange={handleonchange} name={'body'}  id={'body'}/>
            <br/>
            <br/>
            <input type={'submit'} value={'Ajouter'} />
            </form>
            <Link to={'/'}>Lister Posts</Link>
        </center>
    </div>
  )
}
