import React from 'react'
import "../../CSS/main.css"
import desktop from '../../images/desktop.svg'
import img1 from '../../images/img1.svg'
import img2 from '../../images/img2.svg'
import img3 from '../../images/img3.svg'
import img4 from '../../images/img4.svg'
import img5 from '../../images/img5.svg'
import img6 from '../../images/img6.svg'
import img10 from '../../images/img10.jpg'
import gif1 from '../../images/gif1.gif'
import edu1 from '../../images/edu1.jpg'
import edu2 from '../../images/edu2.jpg'
import edu3 from '../../images/edu3.jpg'
import after12th from '../../images/after12th.jpeg.jpg'
import graduation from '../../images/graduation.jpg'
import { Link } from 'react-router-dom'



function main() {
  
  return (
    <div>
      <div className="parent">
    <div className="navigation">
      <div className="home">
        <div className="container">
          <div className="home-page row">
            <div className="home-data pb-5 col-lg-6 col-md-12">
              <h1 style={{ fontFamily: 'Arial, sans-serif',fontWeight:'799',marginTop:'-30px'}} >DISCOVER <br/> YOUR PREFECT CAREER</h1>
              <p style={{textAlign:'left',fontSize:'20px'}}>Make smart decisions with our revolutionary AI enabled <br/> career guidance tools and expert career
                counsellors</p>
              <Link to='/LoginForm'><button className="btn btn-outline-primary" type="submit" style={{fontSize:'17px',fontFamily: 'Arial, sans-serif'}}>GET STARTED</button></Link>
            </div>
            <div className="home-img col-lg-6 col-md-12">
              <img style={{marginTop:'-75px'}} src={img10} alt="career-image" id="animation"/>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md">
            <img  style={{marginTop:'44px',marginLeft:'20px'}} src={desktop} alt=""/>
            </div>
          </div>
        </div>

        <div style={{backgroundColor: 'white'}} className="container">
          <div className="row p-5">
            <div className="col-lg-4 col-md-6 ">
              <h1 style={{fontSize:'33px',fontFamily: 'calibri',marginTop:'70px',color: 'blue'}}>How can coaching help?</h1>
              <p style={{fontSize:'18.5px',fontFamily:'calibri',marginTop:'20px',textAlign:'left'}}>Many people feel a sense of relief after
                sharing their concerns with a life coach or career coach who with empathy and without judgment.</p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h1 style={{fontSize:'33px',fontFamily: 'calibri',marginTop:'70px',color: 'blue'}}>Gain practical strategies
              </h1>
              <p style={{fontSize:'18.5px',fontFamily:'calibri',marginTop:'20px',textAlign:'left'}}>Build confidence, stop procrastinating,
                improve communication skills and relationships, advance you career and manage challenges, 
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
          <h1 style={{fontSize:'33px',fontFamily: 'calibri',marginTop:'70px',color: 'blue'}}>Whatever your challenge</h1>
              <p style={{fontSize:'18.5px',fontFamily:'calibri',marginTop:'20px',textAlign:'left'}}>We will work with you to clarify your
                needs, set achievable goals, and design a plan to help you <br></br> go from where you are to where you want to
                be.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-dark">
          <div className="container">
            <div className="row bg-dark mt-5" style={{color: 'white'}}>
              <h1 style={{marginTop: '5%', textAlign: 'center', fontFamily: 'Arial, sans-serif',fontWeight:'700'}}>Shaping the Career Guidance Landscape</h1>
              <h6 style={{textAlign: 'center',fontSize:'18.5px',fontFamily: 'Arial, sans-serif'}}>Comprehensive career guidance solutions for students, parents, educators
                and
                schools
              </h6>
              <div className="col-lg-4 col-md-4 mt-5">
                <div  className="img-fluid" style={{textAlign: 'center'}}><img id='imgs'   src={img1} alt="images"/>
                  <p style={{padding:'30px',fontSize:'15.5px',fontFamily: 'Arial, sans-serif',textAlign:'center'}}>Enable students to identify their best-fit career with our world-className career
                    assessment and
                    personalised guidance.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mt-5">
                <div  className="img-fluid" style={{textAlign: 'center'}}><img id='imgs' src={img2} alt="images"/>
                  <p style={{padding:'30px',fontSize:'15.5px',fontFamily: 'Arial, sans-serif',textAlign:'center'}}>Empower students to learn all about the professional world with virtual
                    career
                    simulations, exhaustive career library, career blogs and vlogs.
                    .</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 mt-5">
                <div  className="img-fluid" style={{textAlign: 'center'}}><img id='imgs' src={img3} alt="images"/>
                  <p style={{padding:'30px',fontSize:'15.5px',fontFamily: 'Arial, sans-serif',textAlign:'center'}}>Pave student’s way to their dream college end-to-end college application guidance,scholarship drive<br></br> and corporate internship program.
                  </p>
                </div>
              </div>
              <div className="row bg-dark " style={{color: "white"}}>
                <div className="col-lg-4 col-md-4  col-sm-12 mt-3">
                  <div  className="img-fluid" style={{textAlign: 'center'}}><img id='imgs' src={img4}
                      alt="images"/>
                    <p style={{padding:'30px',fontSize:'15.5px',fontFamily: 'Arial, sans-serif',textAlign:'center'}}>Enable schools in creating a career guidance ecosystem in sync with the
                      vision of New Education
                      Policy
                      .</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4  col-sm-12 mt-3">
                  <div  className="img-fluid" style={{textAlign: 'center'}}><img id='imgs' src={img5}
                      alt="images"/>
                    <p style={{padding:'30px',fontSize:'15.5px',fontFamily: 'Arial, sans-serif',textAlign:'center'  }}>Empower educators to become International Certified Career Coaches and
                      build
                      a career in career
                      guidance & counselling
                      .</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4  col-sm-12 mt-3">
                  <div  className="img-fluid" style={{textAlign: 'center'}}><img id='imgs' src={img6}
                      alt="images"/>
                    <p style={{padding:'30px',fontSize:'15.5px',fontFamily: 'Arial, sans-serif',textAlign:'center'}}>Revolutionary assessment platform and technology solutions for educators to boost<br></br> their career guidance & counselling practice. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    
    </div>
    
  </div>
  
  <div className="container-fluid" style={{ backgroundColor: 'black', color: 'white'}}>
    <div className="row">
      <div className="col-lg">
        <p id="p20" style={{fontFamily: 'Arial, sans-serif',fontWeight:'799'}}>Let's work together on your <br/>
        <p id="p21" style={{fontFamily: 'Arial, sans-serif',fontWeight:'799'}}> Dream to make it successful </p>
        </p>
        <br/>
        <p id="p22" style={{fontFamily: 'Arial, sans-serif',fontSize:'18.5px'}}> Lorem ipsum dolor sit amet consecteturadipisicing elit.</p>
        <p id="p23" style={{fontFamily: 'Arial, sans-serif',fontSize:'18.5px'}}>adipisicing elit. consectetur adipisicing elit</p>
        <p id="p24" style={{fontFamily: 'Arial, sans-serif',fontSize:'18.5px'}}>adipisicing elit.elit.</p> <br/>
        <center><button id="btn20">Learn more</button></center>
      </div>
    </div>
  </div>
  <div className="container-fluid ps-3 mb-5" style={{marginTop: '5%'}}>
    <div className="container">
      <div className="row mt-5">
        <h1 style={{textAlign: 'center',fontFamily: 'calibri  ',fontWeight:'780',color:'blue' }}>Mock tests</h1>
        <div className="col-lg-6 col-md-6 mt-5">
        <div className="img-fluid"><img style={{width: '100%',marginTop:'-40px',borderRadius:'15px'}} src={gif1} alt=""/></div>
        </div>
        <div className="col-lg-6 col-md-6 mt-5  ">
          <h1 style={{fontFamily: 'Arial, sans-serif',fontSize:'30px'}}>Advanced Assessment & Best-Fit Matches</h1>
          <p style={{fontSize:'17px',textAlign:'start',fontFamily: 'Arial, sans-serif'}}>- This assessment is used to find out our Interest with basic questions <br/>
             - career assessment: Orientation Style, Interest, Personality, Aptitude . <br/>
            - in-depth career report with personalised development plans. View <br/> - Sample Report
            Get your best-fit career recommendations based on over all <br/>
            - By using this assessment you will find out Interest instead <br/>
            - career assessment: Orientation Style, Interest, Personality, Aptitude . <br/>
            - in-depth career report with personalised development plans. View <br/> - Sample Report
            Get your best-fit career recommendations based on over all <br/>
            - By using this assessment you will find out Interest instead of differnt fieldsets</p>
          <button className="btn btn-outline-primary" style={{marginTop: '5%',position:'relative',bottom:'25px'}}type="submit"> Free demo</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default main
