import React, { Component } from 'react'

const NewsItem = (props)=>{

 
    let { title, description, imageUrl, NewsUrl, author, date, source } = props;

    return (
      <div>
        <div className="card" style={{ width: " 18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">


            <h5 className="card-title" >{title}... <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
              <span class="visually-hidden">unread messages</span>
            </span></h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-body-secondary">By {author} on {date}</small></p>
          </div>
          <a href={NewsUrl} className="btn btn-sm btn-dark"> Read More</a>

        </div>

      </div>
    )
  
}

export default NewsItem
