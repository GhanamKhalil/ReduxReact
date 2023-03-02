import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListerPost from './Component/ListerPost'
import AjouterPost from './Component/AjouterPost'
import ModifierPost from './Component/ModifierPost'
export default function App(){
    
    return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<ListerPost />}></Route>
                <Route path={'/Ajouter-Post'} element={<AjouterPost />}></Route>
                <Route path={'/Modifier-Post/:id'} element={<ModifierPost />}></Route>
            </Routes>
        </BrowserRouter>

    </>
    )
}