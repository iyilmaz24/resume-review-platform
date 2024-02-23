import { useCallback } from 'react'
import { Navigate } from "react-router-dom";
import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';

const Login = () => {
  const { isAuthenticated, isSessionLoading } = useSession()
  const { user, isUserLoading } = useUser()


//   const { logout } = useDescope()

//   const exampleFetchCall = async () => {
//     const sessionToken = getSessionToken();

//     // example fetch call with authentication header
//     fetch('your_application_server_url', {
//       headers: {
//         Accept: 'application/json',
//         Authorization: 'Bearer ' + sessionToken,
//       }
//     })
//   }

//   const handleLogout = useCallback(() => {
//     logout()
//   }, [logout])

  return <>
    {!isAuthenticated &&
      (
        <Descope
          flowId="sign-in" theme="light" debug="false"
          onSuccess={(e) => console.log(e.detail.user)}
          onError={(e) => {console.log('Could not log in! ' + e); <Navigate to="/" />}}
        />
      )
    }

    {
      (isSessionLoading || isUserLoading) && <p>Loading...</p>
    }

    {!isUserLoading && isAuthenticated &&
      (
        <>
            <Navigate to="/review" />;
        </>
      )
    }
  </>;
}


export default Login