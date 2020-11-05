import { isNil } from "lodash";

const Card = (props) => {

    return (
        <div className="card-container">
                <div style={props.style} className={isNil(props.cardClass) === false ?  props.cardClass : 'card-project'}>
    <div className="post-project">
    <div className="img-card-project">
    <img className="post-image-project" src={props.mainImage}/>
    </div>
      <div className="post-content-project">
        <p className="post-header-project"> <h2>{props.title}</h2> </p>
        <p className="post-text-project">
          {props.content}
        </p>

         <a href={props.urlBottom} target="_blank"> <img src={props.bottomImg} alt="" className="author-image" /></a>

        {props.isVisibleSecondAnchor === true ? 
          <a href={props.secondUrlButton} target="_blank"> <img src={props.secondBottomImg} alt="" className="author-image" /></a>
        : null}


      </div>
      
    </div>
  </div>
        </div>
    )
}

export default Card;