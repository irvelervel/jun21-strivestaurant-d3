import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import MyNavbar from './components/MyNavbar'
import Home from './components/Home'

// the first react component that gets its way into the DOM
const App = () => {
  return (
    <div>
      {/* a prop is a dynamic piece of information that is passed with the component's usage */}
      <MyNavbar title="Strivestaurant" color="dark" />
      {/* <MyNavbar title="Magda" color="light" /> */}
      {/* <MyNavbar /> */}
      <Home />
    </div>
  )
}

export default App

// export const name = 'Stefano'

// import App from './App'
// import { name } from './App'
