function SecurityItem(props) {
  return (
    <div class="list-group-item">
      <div class="row align-items-center">
        <div class="col">
          <strong class="mb-0">{props.data.title}</strong>
          <p class="text-muted mb-0">{props.data.subtitle}</p>
        </div>
        <div class="col-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="alert1"
              checked=""
            />
            <span class="custom-control-label"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityItem;
