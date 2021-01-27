import React, { Component } from "react";
import "./StaticPages.css";
import Sidebar from "../sidebar/Sidebar";
class InsideWreckers extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 zoom">
            <h2 class="news-heading">Inside the Wreckers World</h2>
            <div className="staticdetails">
              <div class="row">
                <div class="col-lg-6">
                  <img src={"./avatars/wrecker1.png"} />
                </div>
                <div class="col-lg-6">
                  <h4 className="StaticHeading">
                    Auto Wrecking is a large and growing business
                  </h4>
                  <p>
                    Auto Wrecking has grown to become a huge business all over
                    the world. With the transportation needs of human beings
                    increasing with development of civilization and increasing
                    standards of living, this business is going to stay and grow
                    in the next several decades.
                  </p>
                </div>
              </div>
              <p>
                According to research done by Grand View Research the global
                automotive aftermarket size was valued at USD 378.4 billion in
                2019 and is expected to grow at a compound annual growth rate
                (CAGR) of 4.0 % from 2020 to 2027.
                <br />
                The market is driven by the need to enhance vehicle performance
                in terms of sound, speed, exhaust, appearance. Meeting and
                bettering the environmental regulations, driving energy
                efficiency and a balance between cost and performance. <br />
                Regulatory authorities monitor built-up standards and
                environmental impacts associated with automotive component
                functioning. <br />
                Cars and SUVs which are used are often becomes unneeded for the
                current owner when a new vehicle is acquired as per the
                preference, affordability and style statement of owner. Despite
                the used Car/ SUV being an excess possession, and may not be of
                much value, in the automotive aftermarket it can still fetch a
                lot of value depending on the condition and the age of the
                vehicle and the remaining useful life of the vehicle. <br />
                This leads to the Car and Auto Wreckers who keep looking for
                used Cars or damaged cars or wrecked cars which can be acquired
                usually for a fair value that can be determined based on an
                evaluation of the car. <br />
                The ecosystem in which the Wreckers operate consists of:
              </p>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Seller of the car
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Auto Wrecker
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Used Car Auction/
                Car bidding
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Buyer of Used and
                Refurbished Vehicles/ Trucks
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Part sellers,
                Certified/ Uncertified
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Recyclers – who
                salvages the materials.
              </li>
              <p>The main processes involved are:</p>
              <h4 className="StaticHeading">Buying used cars</h4>
              <p>
                The Wrecker identifies the Car/ Truck sellers by various means.
                Some of the common means are by using traditional and digital
                means to make your Wrecking business known in the local city and
                its suburbs, reach out to potential car sellers based on email,
                sms and phone campaigns and by Digital Marketing means. The
                Seller expects a fair price for the used car, proper and easy
                paperwork, quick and scheduled pick up service and on the spot
                settlement of cash for car/ bank transaction. The Buyer has to
                ensure collecting relevant information about the car, make a
                quote (usually with the help of quotation engine which is fed
                key parameters about the car) and if a deal is done the pick-up/
                towing is arranged.
              </p>
              <h4 className="StaticHeading">Towing Process:</h4>
              <p>
                The Wrecker utilizes his fleet of towing trucks which are
                equipped with GPS and Smartphone Apps which help with route
                planner apps. Based on the location and status of the towing
                trucks and the location from where the next vehicle is required
                to be towed, the towing time window is scheduled. There are
                variables like the towing trucks/ vans’ capacity, the estimated
                weight of the vehicle to be towed based on which dynamically
                optimizations may be required to be done.
              </p>
              <h4 className="StaticHeading">Wrecking of the car</h4>
              <p>
                The Car/ Truck is towed to the Wrecking Yard and assigned a
                location in the yard. It is first determined if it is worth to
                repair and refurbish the car or it needs to be salvaged for
                recycling the materials (i.e., plastics, metals, salvage the
                parts). If the car/ truck has authorized life and its can be
                repaired cost effectively, then it goes through a detailed
                check, parts which require replacement are replaced and a price
                tag is assigned for resale. Such vehicles may be put through the
                used car auction process.
              </p>
              <p></p>
              <h4 className="StaticHeading">Dismantling of the Car</h4>
              <p>
                The yard which follow the DIFM (Do It for Me) service channel
                have experts who dismantle the parts determine its status,
                certifies its goodness for usage. The price for the used but
                certified parts is determined, tagged and the part information
                are uploaded to databases for listing. Customer can look up the
                available parts and order it either at the location of the yard
                or get it delivered to their desired location. Technicians
                drains the fluids and gases (Oils, coolant, other liquids, AC
                gases) and stores or disposes them in a safe and environmentally
                friendly way following the regulations to ensure safety and
                protection of the environment. The metal parts are separated,
                the plastics are separate and they are crushed or compacted and
                readied for the professional Recyclers to process further.
              </p>
              <h4 className="StaticHeading">
                Recycling and Salvaging of materials:
              </h4>
              <p>
                This is the process of extracting the materials from the waste
                materials of the car from its body, parts, tyres, etc. The aim
                is to minimize the pressure on the landfills and to extract as
                much materials from the car/ truck as possible to put the
                materials to good economic use. Metals, Plastics, Rubber, are
                segregated and processed or reprocessed. These processes are
                usually done by the Recyclers who tie up with the Wreckers to
                process the junk.
              </p>
              <h4 className="StaticHeading">Auto Parts Listing</h4>
              <p>
                Auto Parts which are usable are certified, its description are
                tagged and uploaded to online databases through which its
                availability can be made visible to potential customers.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <Sidebar />
            <Sidebar />
            <img
              src={"./avatars/Banner.png"}
              style={{ height: "auto", width: "60%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default InsideWreckers;
