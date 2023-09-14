import React, { Component } from 'react'

export class Newstem extends Component {
  render() {
    let {title,description,imagurl,liUrl ,author,source ,date} = this.props;

    return (
        <div className='my-3'>
                <div className="card"    >
                  <span className="position-absolute top-0 translate-middle badge round-pill bg-success" style={{left:'90%', zIndex:'1'}}>{source}</span>
                    <img src={imagurl? imagurl: "https://www.livemint.com/lm-img/img/2023/07/17/600x338/Utkarsh_Small_Finance_Bank_IPO_GMP_today_1689580227885_1689580264843.JPG"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" >  {title}....      </h5>
                        <p className="card-text"  >   {description}....    </p>
                        <p>   <small>By {author} on {new Date(date).toLocaleString()}</small>   </p>
                        <a href={liUrl}  className="btn btn-dark"  rel="noreferrer"  target="_blank" > Read more </a>
                    </div>
                </div>
        </div>
    )
  }
}

export default Newstem