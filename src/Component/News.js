import React, { Component } from 'react'
import Newstem from './Newstem'
import Loading from "./Loading"
import PropTypes from 'prop-types';


export class News extends Component { 

    static defaultProps = {
            pageCapcity:"5" ,
            category:"general",
            country:"in"
      }

    static propTypes = {
            category:PropTypes.string,
            country:PropTypes.string
      }
 
        constructor(props){
            super(props);
            this.state={
                articles:[],
                page:1,
                loading:false ,
                totalResults:0
            }
            document.title=` New$ter - ${this.props.category} news`;
        }

        async  updateNews(){
            this.props.setProgress(0);    // top loading bar

            const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=79a04ec596b342d7ba7c067d8576586f&page=${this.state.page}&pageSize=${this.props.pageCapcity}`
           // const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=79a04ec596b342d7ba7c067d8576586f&page=${this.state.page}&pageSize=${this.props.pageCapcity}`;
            this.setState({loading:true});
            let data= await fetch(url);
            this.props.setProgress(30); 
            
            let parsedata= await data.json();
            console.log(parsedata);
            this.setState( {articles:parsedata.articles,
                       totalResults:parsedata.totalResults,
                       loading:false } );
                       
            this.props.setProgress(100);       // top loading bar

        }

        async componentDidMount(){
             this.updateNews();
        }

        handleNextClick = async ()=>{
           // console.log("Next"); 
            this.setState({  page:this.state.page + 1 });
            this.updateNews();
        }

        handlePrevClick = async  ()=> {
            // console.log("Previous");
            this.setState({  page:this.state.page - 1 });
            this.updateNews();
        }




    render() {
       
        return (
            <div className='container my-3'>
              <center>  <h2 style={{marginTop:'90px',marginBottom:"20px"}}  >New$ter- Top HeadLines on {this.props.category}</h2> </center>  
              {this.state.loading && <Loading/>}

                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                                return    <div className="col-md-4" key={element.url} > 
                                             <Newstem title={element.title?element.title:" "} description={element.description?element.description:" "} 
                                        imagurl={element.urlToImage} liUrl={element.url}  date={element.publishedAt}  author={element.author}  source={element.source.name}></Newstem> 
                                        </div>
                                }    )
                    }                    
                </div>  
           
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}  > &laquo; Prev</button>
                <button  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageCapcity)} type="button" className="btn btn-dark"  onClick={this.handleNextClick} >   Next &raquo;</button>
                </div>                 
            </div>
        );
    }
}

export default News