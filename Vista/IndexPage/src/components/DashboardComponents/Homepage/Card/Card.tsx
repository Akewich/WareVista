import "./Card.scss";

const blog = (props: any) => {
  return (
    <>
      <div className="blog">
        <img src={props.img} className="propImg" />
        <div className="cardText">
          <span>
            {props.name}
            <i className="bi bi-heart ps-3" />
          </span>
        </div>
      </div>
    </>
  );
};

export default blog;
