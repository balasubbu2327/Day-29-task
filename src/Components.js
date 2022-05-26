export function Components() {
  return (
    <div>
      <h3> Components</h3>
      <div className="row">
        <div className="col-lg-12 m-3">
          <h5>Buttons</h5>
          <button type="button" className="btn btn-primary m-1">
            Primary
          </button>
          <button type="button" className="btn btn-secondary m-1">
            Secondary
          </button>
          <button type="button" className="btn btn-success m-1">
            Success
          </button>
          <button type="button" className="btn btn-danger m-1">
            Danger
          </button>

          <button type="button" className="btn btn-warning m-1">
            Warning
          </button>
          <button type="button" className="btn btn-info m-1">
            Info
          </button>
          <button type="button" className="btn btn-light m-1">
            Light
          </button>
          <button type="button" className="btn btn-dark m-2">
            Dark
          </button>

          <button type="button" className="btn btn-link m-2">
            Link
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 m-3">
          <h5>Outline Buttons</h5>
          <button type="button" className="btn btn-outline-primary m-1">
            Primary
          </button>
          <button type="button" className="btn btn-outline-secondary m-1">
            Secondary
          </button>
          <button type="button" className="btn btn-outline-success m-1">
            Success
          </button>
          <button type="button" className="btn btn-outline-danger m-1">
            Danger
          </button>

          <button type="button" className="btn btn-outline-warning m-1">
            Warning
          </button>
          <button type="button" className="btn btn-outline-info m-1">
            Info
          </button>
          <button type="button" className="btn btn-outline-light m-1">
            Light
          </button>
          <button type="button" className="btn btn-outline-dark m-2">
            Dark
          </button>

          <button type="button" className="btn btn-outline-link m-2">
            Link
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 m-3">
          <h5>Cards</h5>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-12 m-3">
          <h5>Cards</h5>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
