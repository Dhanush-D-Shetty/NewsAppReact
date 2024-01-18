
import React, { Component } from 'react'
import Navbar from './Component/NavBar'
import News from "./Component/News" 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

   pageCapcity=9;

   state={
    progress:10
   }
   setProgress = (prog)=>{
    this.setState({progress: prog})
   }
    
    render() {
        return (
            <>
                <BrowserRouter >
                   <Navbar />
                   <LoadingBar
                        color='#f11946'
                        progress={this.state.progress}
                        
                    />
                    <Routes>
                        <Route  path="/"               element= {<News setProgress={this.setProgress} pageCapcity={this.pageCapcity}   key="general"      category="general"    country="in"/> }  >     
                           <Route   path="business"       element= {<News setProgress={this.setProgress} pageCapcity={this.pageCapcity}   key="business"     category="business"    country="in"/> } >    </Route>
                          <Route  path="entertainmet"   element= {<News setProgress={this.setProgress} pageCapcity={this.pageCapcity}   key="entertainment" category="entertainment" country="us"/>}> </Route> 
                           <Route  path="general"        element= {<News setProgress={this.setProgress} pageCapcity={this.pageCapcity}   key="general"       category="general"   country="in"/> } >    </Route>   
                           <Route  path="health"         element= {<News setProgress={this.setProgress} pageCapcity={this.pageCapcity}   key="health"       category="health"     country="in"/> } >    </Route>
                           <Route  path="science"        element= {<News setProgress={this.setProgress} pageCapcity={this.pageCapcity}  key="science"      category="science"     country="in"/> } >     </Route>
                           <Route  path="sports"         element= {<News setProgress={this.setProgress} pageCapcity={this.pageCapcity}  key="sports"        category="sports"    country="in"/>  } >    </Route>
                           <Route  path="technology"     element= {<News setProgress={this.setProgress} pageCapcity={this.pageCapcity}  key="technology"    category="technology"  country="in"/>} >    </Route>                   
                         </Route> 
                     </Routes>
                </BrowserRouter>              
            </>
        )
    }
}
