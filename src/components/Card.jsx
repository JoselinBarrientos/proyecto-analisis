function Card(props) {
  return (
    <div className="col-lg-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.data?.title}</h5>
          <p className="card-text">{props.data?.subtitle}</p>
          <a href="/" className={`btn btn-${props.data?.color}`}>
            {props.data?.button}
          </a>
        </div>
        <div
          className={`bg-${props.data?.color}`}
          style={{
            minHeight: "5px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            marginTop: "-1px",
            zIndex: "2",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Card;
