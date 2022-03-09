    import React from 'react';
    import {Link} from 'react-router-dom';
    
    export default function LandingPage() {
        return(
            <div>
                <div>
                    <h1>El mejor desayuno de tu vida a un click de distancia:</h1>
                </div>
                <Link to='/home'>
                    <button>Ingresar</button>    
                </Link>
            </div>
        )
    }
