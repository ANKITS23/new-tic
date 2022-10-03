import React, { Component } from "react";
import Newsitems from "../components/Newsitems";
import Spinner from "../components/Spinner";

export class News extends Component {
  constructor() {
    super();
    console.log("hello i am a contructor from newsitem");
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount(){
    console.log("cdm");
    let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=ccd9cf36048a4082b7fd3d85e644f863&page=1&pagesize=$(this.props.pagesize)";
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
     })
  }

  handlePrevClick = async (props)=>{
    console.log("Previous");
    let url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=ccd9cf36048a4082b7fd3d85e644f863&page=$(this.state.page - 1)&pagesize=$(this.props.pagesize)';
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles:parsedData.articles,
      loading:false
    });
  };

  handleNextClick = async (props) => {
    console.log("Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)) );
    {
    let url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=ccd9cf36048a4082b7fd3d85e644f863&page=2&pagesize=$(this.props.pagesize)';
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false})
    this.setState({
      page: this.state.page + 1,
      articles:parsedData.articles,
      loading:false
    });
  }
  }

  render() {
    console.log("Render");
    return (
      <div>
        <div className="ccontainer">
          <div className="wrapper ">
         
         {this.state.loading && <Spinner/> } 
       
            <div className="my-2">
              
              <div className="w-full flex flex-wrap gap-5">
                {!this.state.loading && this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4 mt-4 w-full sm:w-[46%] md:w-[30%] " key={element.url}>
                      <Newsitems
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description
                            ? element.description.slice(0,55)
                            : ""
                        }
                        author={element.author}
                        date={element.publishedAt}
                        newsurl={element.url}
                        source={element.source}
                        imageUrl={element.urlToImage}
                      />
                    </div>
                  );
                })}
                <div className="container d-flex justify-content-between">
                  <button
                    disabled={this.state.page <= 1}
                    type="button"
                    onClick={this.handlePrevClick}
                    className="btn btn-info dark:bg-black dark:text-white dark:border-white"
                  >
                    &laquo; Previous
                  </button>
                  <button
                    
                    type="button"
                    onClick={this.handleNextClick}
                    className="btn btn-info dark:bg-black dark:text-white dark:border-white"
                  >
                    Next &raquo;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
