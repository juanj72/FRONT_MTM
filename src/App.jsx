import {Navigation} from './routes';
import {AuthProvider} from './context'

export const App = () => {
  return (
    <>        
      <AuthProvider>
      <Navigation/>
      </AuthProvider>
        
    </>
  )
}
