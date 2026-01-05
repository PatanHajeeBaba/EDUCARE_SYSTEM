import { Navigate } from 'react-router-dom'
import Main from './Components/Index/main'
import Services from './Components/Servies/Services'
import After12th from './Components/After 12th/After12th'
import Engineering from './Components/Education-List/Engineering'
import ComputerApplication from './Components/Education-List/ComputerApplication'
import Hacking from './Components/Education-List/Hacking'
import Navy from './Components/Education-List/Navy'
import Aviation from './Components/Education-List/Aviation'
import Medicine from './Components/Education-List/Medicine'
import Graduation from './Components/After Graduation/Graduation'
import Masters from './Components/Education-List/Masters'
import DigitalMarketing from './Components/Education-List/DigitalMarketing'

import After_10th from './Components/After 10th/After_10th'
import Diploma from './Components/Education-List/Diploma'
import Intermidiate from './Components/Education-List/Intermediate'
import IIIT from './Components/Education-List/IIIT'
import Contact from './Components/ContactUs/Contact'
import Book from './Components/Servies/Book'
import About from './Components/About/About'
// import { Component } from 'react'
// import { Component } from 'react'

const userRoutes = [
  { path: '/home' , Component : <Main/>},
  { path: '/aboutus' , Component : <About/>},
  { path: '/services' , Component: <Services/>},
  { path: '/contactus' , Component: <Contact/>},

  { path: '/courses/after10th' , Component: <After_10th/>},
  { path: '/courses/after12th' , Component: <After12th/>},
  { path: '/courses/graduation' , Component: <Graduation/>},
  { path: '/services/Book' , Component: <Book/>},
  
  { path: '/courses/after10th/Diploma' ,Component:<Diploma/>},
  { path: '/courses/after10th/Intermediate' ,Component:<Intermidiate/>},
  { path: '/courses/after10th/IIIT' ,Component:<IIIT/>},
  { path: '/courses/after12th/Engineering' ,Component:<Engineering/>},
  { path: '/courses/after12th/ComputerApplication' ,Component:<ComputerApplication/>},
  { path: '/courses/after12th/Hacking' ,Component:<Hacking/>},
  { path: '/courses/after12th/Navy' ,Component:<Navy/>},
  { path: '/courses/after12th/Aviation' ,Component:<Aviation/>},
  { path: '/courses/after12th/Medical' ,Component:<Medicine/>},
  { path: '/courses/graduation/Masters' ,Component:<Masters/>},
  { path: '/courses/graduation/DigitalMarketing' ,Component:<DigitalMarketing/>},
  { path: '/courses/graduation/Medicine' , Component: <Medicine/>} ,
  {
    path: "/",
    exact: true,
    component: <Navigate to="/home" />,
  },
]


export { userRoutes}

{/* <>       
        <Route path='/' element={<Main/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/services/Book' element={<Book/>}/>
        <Route path='/courses/After10th' element={<After_10th/>}/>
        <Route path='/courses/After10th/Diploma' element={<Diploma/>}/>
        <Route path='/courses/After10th/intermediate' element={<Intermidiate/>}/>
        <Route path='/courses/After10th/IIIT' element={<IIIT/>}/>
        <Route path='/courses/After10th/DigitalMArketing' element={<DigitalMarketing/>}/>

        <Route path='/courses/After12th' element={<After12th/>}/>
          <Route path="/courses/After12th/Engineering" element={<Engineering/>} />
          <Route path="/courses/After12th/ComputerApplication" element={<ComputerApplication/>} />
          <Route path="/courses/After12th/Hacking" element={<Hacking />} />
          <Route path="/courses/After12th/Navy" element={<Navy />} />
          <Route path="/courses/After12th/Aviation" element={<Aviation />} />
          <Route path="/courses/After12th/Architecture" element={<architecture />} />
          <Route path="/courses/After12th/Law" element={<law />} />
          <Route path="/courses/After12th/Medical" element={<Medicine />} />
        <Route path='/courses/graduation' element={<Graduation/>}/>
        <Route path='/courses/graduation/Master' element={<Masters/>}/>
        <Route path="/courses/graduation/Medicine" element={<Medicine />} />
        <Route path='/courses/graduation/DigitalMarketing' element={<DigitalMarketing/>}/>
      <Route path='/contactus' element={<Contact/>}/>
</> */}