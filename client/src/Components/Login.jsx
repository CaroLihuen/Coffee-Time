import React from "react";

export default function Login(){
    return(
    
        <div>
            <h1>Login</h1>
           <form>
           <div>   
            <label>Usuario</label> 
            <input type="text" placeholder="Usuario"></input>
           </div>  
           <div>
            <label>Contraseña</label> 
            <input type="text" placeholder="Contraseña"></input>
           </div>
           <div>
            <button>Entrar</button>   
           </div>
           </form>
        </div>
    )
}