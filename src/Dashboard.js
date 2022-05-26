export function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>
      <div className="row">
        <div className="col-lg-3">
          <div className="card border-left-primary">
            <div className="card-body">
              <div className="card-title monthly">EARNINGS (MONTHLY)</div>
              <div className="cardicon">
                <div className="card-text">₹68,000</div>
                <div>
                  <i class="fa fa-calendar-o dashicon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card border-left-success">
            <div className="card-body">
              <div className="card-title annual">EARNINGS (ANNUAL)</div>
              <div className="cardicon">
                <div className="card-text">₹215,397</div>
                <div>
                  <i class="fa fa-usd dashicon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card border-left-info">
            <div className="card-body">
              <div className="card-title task">TASKS</div>
              <div className="cardicon">
                <div className="card-text">70%</div>
                <div>
                  <i class="fa fa-list-alt dashicon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card border-left-warning">
            <div className="card-body">
              <div className="card-title pending">PENDING REQUESTS</div>
              <div className="cardicon">
                <div className="card-text">28</div>
                <div>
                  <i class="fa fa-comments dashicon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="row m-3">
            <div className=" col-lg-6 ">
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h6 className="card-title">Primary</h6>
                  <p className="text">#4e73df</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-secondary mb-3">
                <div className="card-body">
                  <h6 className="card-title">secondary</h6>
                  <p className="text">#858796</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h6 className="card-title">success</h6>
                  <p className="text">#1cc88a</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-danger mb-3">
                <div className="card-body">
                  <h6 className="card-title">Danger</h6>
                  <p className="text">#e74a3b</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-warning  mb-3">
                <div className="card-body">
                  <h6 className="card-title">warning </h6>
                  <p className="text">#f6c23e</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-info  mb-3">
                <div className="card-body">
                  <h6 className="card-title">Info </h6>
                  <p className="text">#36b9cc</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-black-50 bg-light  mb-3">
                <div className="card-body">
                  <h6 className="card-title">Light </h6>
                  <p className="text">#f8f9fc</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-dark  mb-3">
                <div className="card-body">
                  <h6 className="card-title">Dark </h6>
                  <p className="text">#5a5c69</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mt-3">
            <div className="card-header font-weight-bold text-primary">
              Development Approach
            </div>
            <div className="card-body">
              <p>
                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                order to reduce CSS bloat and poor page performance.{" "}
              </p>
              <p>
                Custom CSS classes are used to create custom components and
                custom utility classes. Before working with this theme, you
                should become familiar with the Bootstrap framework, especially
                the utility classes.
              </p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <img className="dashboardimg img-responsive" src="https://ubiq.co/analytics-blog/wp-content/uploads/2020/07/create-project-management-dashboard.jpeg"  />
              <span>
                Add some quality, svg illustrations to your project courtesy of
                unDraw, a constantly updated collection of beautiful svg images
                that you can use completely free and without attribution!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
