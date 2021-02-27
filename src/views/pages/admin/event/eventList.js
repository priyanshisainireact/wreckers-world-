import React from "react";

const EventList = () => {
  return (
    <>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>S.No.</th>
            <th> Event Title </th>
            <th>Date</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2010 Maruti Alto LXI</td>
            <td>2020/09/22</td>
            <td>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </td>
            <td>
              <button type="button" className="approve">
                Publish
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>2018 Maruti Eeco 5 STR</td>
            <td>2020/09/21</td>
            <td>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </td>
            <td>
              <button type="button" className="pending">
                Pending
              </button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>2015 Maruti Swift VDI ABS</td>
            <td>2020/09/20</td>
            <td>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </td>
            <td>
              <button type="button" className="approve">
                Publish
              </button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>2010 Maruti Alto LXI</td>
            <td>2020/09/22</td>
            <td>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </td>
            <td>
              <button type="button" className="approve">
                Publish
              </button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>2018 Maruti Eeco 5 STR</td>
            <td>2020/09/21</td>
            <td>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </td>
            <td>
              <button type="button" className="pending">
                Pending
              </button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>2015 Maruti Swift VDI ABS</td>
            <td>2020/09/20</td>
            <td>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </td>
            <td>
              <button type="button" className="approve">
                Publish
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default EventList;
