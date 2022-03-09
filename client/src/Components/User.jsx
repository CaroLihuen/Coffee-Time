import React from "react";

export default function User(){
    return(
        <div>
           <h1>User</h1> 
           <form>
              <div>
                 <label>Nombre: </label>
                 <input></input>
              </div> 
              <div>
                 <label>Apellido: </label>
                 <input></input>
              </div>
              <div>
                 <label>Mail: </label>
                 <input></input>
              </div>
              <div>
                 <label>Contraseña: </label>
                 <input></input>
              </div>
              <div>
                 <label>Repetir contraseña: </label>
                 <input></input>
              </div> 
              <div>
               <button>Crear</button>   
              </div>
           </form>
        </div>
    )
}