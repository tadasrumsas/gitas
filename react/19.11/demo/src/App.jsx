import './App.css'
import Greeting from "./components/greeting";
import Counter from "./components/counter";
import Example from "./components/example"



function App() {

  return (
  <>
    <Greeting name="John" lastName = "Jones"/>
   <Counter /> 

   <Example defaultColor="text-danger" />
   <Example defaultColor="text-primary" />





   </>
  )

}



export default App
