import React from "react";

const ManageYard = () => {
  return (
    <>
      <h2 className="news-heading">Manage Yard</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title </th>
            <th>Date</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Samir Car Removal</td>
            <td>2020/09/22</td>
            <td>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </td>
            <td>
              <button type="button" className="approve">
                Approved
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>King Auto Group</td>
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
            <td>Viper Cash For Car</td>
            <td>2020/09/20</td>
            <td>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </td>
            <td>
              <button type="button" className="notapprove">
                Not Approved
              </button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Hunter Auto Removal</td>
            <td>2020/09/22</td>
            <td>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </td>
            <td>
              <button type="button" className="approve">
                Approved
              </button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>AtoZ Auto Removal</td>
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
            <td>Taha Auto Group</td>
            <td>2020/09/20</td>
            <td>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </td>
            <td>
              <button type="button" className="notapprove">
                Not Approved
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ManageYard;
