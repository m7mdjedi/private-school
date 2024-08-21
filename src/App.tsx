
import NavBar from './components/NavBar'

import Homee from './pages/Homee'
import News from './pages/News'
import AboutUs from './pages/AboutUs'
import Leadership from './pages/Leadership'
import Acadimics from './pages/Acadimics'
import SecondGrade from './pages/SecondGrade'
import ThirdGrade from './pages/ThirdGrade'
import FirstGradeBooks from './pages/FirstGradeBooks'
import AcceptingAndHelping from './pages/AcceptingAndHelping'
import Login from './pages/Login'
import Logup from './pages/Logup'
import { Outlet, Route, Routes } from 'react-router'
import StudentPage from './pages/StudentPage'
import Footer from './components/Footer' 
import AboutUsPage from './pages/AboutUsPage'

function BasicLayout(){ 
  return  ( 
    <> 
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
} 
function RegisterLayout(){ 
  return  <Outlet/>
}
function App() {


  return (
    <>
    
      <Routes>
        <Route path='/' element={<BasicLayout/>}> 
        <Route path="/" element={ <Homee/> } />
      
        
        <Route path='/aboutUs' element={<AboutUsPage  />}> 
        <Route path="aboutUsInShort" element={ <AboutUs/> } />
        <Route path="news" element={ <News/> } />
        </Route>
        <Route path='/student' element={<StudentPage/>}> 
        <Route index path="acadimics" element={ <Acadimics/> } />
        <Route path="secondGrade" element={ <SecondGrade/> } />
        <Route path="thirdGrade" element={ <ThirdGrade/> } />
        </Route>
        <Route path="/acceptingAndHelping" element={ <AcceptingAndHelping/> } />
        <Route path="/firstGradeBooks" element={ <FirstGradeBooks/> } />
        <Route path="/leadership" element={ <Leadership/> } />
   
      
        </Route>
        <Route path='/register' element={<RegisterLayout/>}> 
            <Route path='login' element={<Login/>} /> 
            <Route path='logup' element={<Logup/>} />
        </Route>
      </Routes>
    
    </>
  )
}

export default App
