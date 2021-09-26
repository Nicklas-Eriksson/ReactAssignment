import './App.css';
import Program from './Program';
import RegisterView from '../../view/login/register/RegisterView'

function App() {
  return (
    <div>
      {(JSON.parse(localStorage.getItem('registeredUser')) === null || JSON.parse(localStorage.getItem('registeredUser')).name === '') ? (
        <RegisterView/>
      ) : (
        <>
        {console.log(localStorage.getItem('registeredUser'))}
        <Program />
        </>
      )}
    </div>
  )
}

export default App;
