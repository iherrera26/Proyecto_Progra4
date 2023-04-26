import React from 'react';
import { useAuth0} from '@auth0/auth0-react'



const LogginButton = () =>{
const {loginWithRedirect} = useAuth0()
return(
    <div>
<button onClick={() => {
  try {
    loginWithRedirect();
  } catch (error) {
    console.error(error);
  }
}}>
  Iniciar sesión
</button>

    </div>
)

//<button onClick={() => loginWithRedirect()}>Iniciar sesión</button>

}
export default LogginButton


