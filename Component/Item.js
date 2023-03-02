import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({post,handleSupprimer}){
  return (
    <tr>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td>
          <button value={post.id} onClick={handleSupprimer}>Supprimer</button>
          <Link to={`/Modifier-Post/${post.id}`}>
            <button >Modifier</button>
          </Link>
        </td>
    </tr>
  )
}
