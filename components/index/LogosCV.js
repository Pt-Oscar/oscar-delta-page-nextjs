const LogosCV = (props) => {

    return(
        <div>
        <div className="logos-container">
        <div className="first-logo-container">
            <img src="/logo/react.png"/>
            <img src="/logo/nodejs.png" className="second-img-logo"/>
            <img src="/logo/next-js.png" />
        </div>
        <div className="second-logo-container">
            <img src="/logo/mongodb.png"/>
            <img src="/logo/npm.png" />
            <img src="/logo/github.png" />
        </div>
        </div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src="/logo/first-logos.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/logo/second-logos.png" className="d-block w-100" alt="..." />
    </div>
  </div>
</div>
    </div>
    )
}

export default LogosCV;