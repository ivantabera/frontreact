import React, {useState, Fragment} from 'react';
import Articles from './articles/Articles';

export default function Container(){

    //Hook: primero se pasa la variable, segundo se pasa la funcion que modifica el estaso de la variable
    const [articulos, setArticulos] = useState([

        {
            id:1,
            titulo:'TITLE HEADING 1',
            descripcion:'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
        },
        {
            id:2,
            titulo:'TITLE HEADING 2',
            descripcion:'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
        }

    ])

    return(

        <Fragment>
            <div className="col-sm-8">

                {articulos.map(articulo => (
                    
                    <Articles 
                        key={articulo.id} 
                        articulo={articulo}
                    />

                ))}

            </div>

            <button 
                className="btn btn-primary btn-sm mx-auto"
                type="button"
                onClick={()=>{setArticulos([
                    {
                        id:3,
                        titulo:'TITLE HEADING 3',
                        descripcion:'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
                    },
                    {
                        id:4,
                        titulo:'TITLE HEADING 4',
                        descripcion:'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
                    }
                ])}}>
                    Cambiar titulos
            </button>
        </Fragment>

    )
}