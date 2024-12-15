const NewsItem = ({ title, description, src, url }) => {
    return (
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3" style={{ width: "345px" }}>
        <img src={src?src:image} style={{height:"200px", width:"343"}}className="card-img-top" alt="News thumbnail" />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description?description.slice(0,90):"this is breaking news right now"}</p>
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      </div>
    );
  };
  
  export default NewsItem;
  