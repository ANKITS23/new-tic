import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { title, description, imageUrl, newsurl ,author , date , source } = this.props;
    return (
      <div>
        <div
          className="card flex flex-col justify-between gap-2 ">
          <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/106814724-1608594276238-gettyimages-1229866197-JAPAN_JPX.jpeg?v=1664235931&w=1920&h=1080":imageUrl} className="card-img-top h-[200px]" alt=".vfqd.." />
          <div className="card-body flex flex-col justify-between">
            <h5 className="card-title">{title}... <span class="absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex : '1'}} >
      {source.name}
       <span class="visually-hidden">unread messages</span>
       </span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {date}</small></p>

              <a href={newsurl} target="_blank" className="btn btn-primary my-2 dark:bg-black dark:text-white dark:border-black">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
