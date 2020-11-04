import { isNil } from "lodash";

const Card = (props) => {

    return (
        <div className="card-container">
                <div className={isNil(props.cardClass) === false ?  props.cardClass : 'card-project'}>
    <div className="post-project">
    <img className="post-image-project" src={props.mainImage}/>
      <div className="post-content-project">
        <p className="post-header-project"> <h2>{props.title}</h2> </p>
        <p className="post-text-project">
          {props.content}
        </p>
        <div className="author">
          <img src={props.bottomImg} alt="" className="author-image" />
          </div>
      </div>
      
    </div>
  </div>
        </div>
    )
}

export default Card;