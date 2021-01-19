import React from "react";
import "./bidding.css";

class ListingSidebar extends React.Component {
  render() {
    return (
      <div className="carlistsidebar">
        <div class="panel-group" id="accordion">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse1"
                >
                  <h3 className="brndsidebar title">By Brand or Model</h3>
                </a>
              </h4>
            </div>
            <div id="collapse1" class="panel-collapse collapse in">
              <div class="panel-body">
                <div className="bybrand">
                  <div class="search-container">
                    <form action="/action_page.php">
                      <input
                        type="text"
                        placeholder="Search By Brand"
                        name="search"
                      />
                      <button type="submit" class="searchsubmit">
                        <i class="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="brandscroll">
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1"> Maruti</label>
                      <br />
                    </div>

                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <label for="vehicle2"> Hyundai</label>
                      <br />
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle3"
                        name="vehicle3"
                        value="Boat"
                      />
                      <label for="vehicle3"> Honda</label>
                      <br />
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1"> Tata</label>
                      <br />
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <label for="vehicle2"> Toyota</label>
                      <br />
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle3"
                        name="vehicle3"
                        value="Boat"
                      />
                      <label for="vehicle3"> Chevrolet</label>
                      <br />
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1"> Mahindra</label>
                      <br />
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <label for="vehicle2"> Volkswagen</label>
                      <br />
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle3"
                        name="vehicle3"
                        value="Boat"
                      />
                      <label for="vehicle3"> Mercedes Benz</label>
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle3"
                        name="vehicle3"
                        value="Boat"
                      />
                      <label for="vehicle3"> Mercedes Benz</label>
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle3"
                        name="vehicle3"
                        value="Boat"
                      />
                      <label for="vehicle3"> Mercedes Benz</label>
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle3"
                        name="vehicle3"
                        value="Boat"
                      />
                      <label for="vehicle3"> Mercedes Benz</label>
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle3"
                        name="vehicle3"
                        value="Boat"
                      />
                      <label for="vehicle3"> Mercedes Benz</label>
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle3"
                        name="vehicle3"
                        value="Boat"
                      />
                      <label for="vehicle3"> Mercedes Benz</label>
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle3"
                        name="vehicle3"
                        value="Boat"
                      />
                      <label for="vehicle3"> Mercedes Benz</label>
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle3"
                        name="vehicle3"
                        value="Boat"
                      />
                      <label for="vehicle3"> Mercedes Benz</label>
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle3"
                        name="vehicle3"
                        value="Boat"
                      />
                      <label for="vehicle3"> Mercedes Benz</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse2"
                >
                  <h3 className="brndsidebar title">By Body Type</h3>
                </a>
              </h4>
            </div>
            <div id="collapse2" class="panel-collapse collapse">
              <div class="panel-body">
                <div className="bybrand">
                  <div className="bodytype">
                    <div className="bodytypecol">
                      <button type="button" className="bodytype">
                        Hatchback
                      </button>
                    </div>
                    <div className="bodytypecol">
                      <button type="button" className="bodytype">
                        SUV
                      </button>
                    </div>
                  </div>
                  <div className="bodytype">
                    <div className="bodytypecol">
                      <button type="button" className="bodytype">
                        Sedan
                      </button>
                    </div>
                    <div className="bodytypecol">
                      <button type="button" className="bodytype">
                        Luxury Sedan
                      </button>
                    </div>
                  </div>
                  <div className="bodytype">
                    <div className="bodytypecol">
                      <button type="button" className="bodytype">
                        Luxury SUV
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse3"
                >
                  Collapsible Group 3
                </a>
              </h4>
            </div>
            <div id="collapse3" class="panel-collapse collapse">
              <div class="panel-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingSidebar;
