import Header from "./components/1-head/Header"
import Hero from "./components/2-hero/Hero"
import About from "./components/3-about/About"
import Service from "./components/4-service/Service"
import Feedback from "./components/6-feedback/Feedback"



function App() {
  
  return (
    <>
    <div className="font-sans bg-light min-vh-100">

      <Header/>

      <Hero/>

      <About/>

     <Service/> 

     <Feedback/>

    </div>
    </>
  )
}

export default App
