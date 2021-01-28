import React, { Component } from "react";
import "./StaticPages.css";
import Sidebar from "../sidebar/Sidebar";
class TowingProcess extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 zoom">
            <h2 class="news-heading">TowingProcess</h2>
            <div className="staticdetails">
              <div class="row">
                <div class="col-lg-6">
                  <img src={"./avatars/Towing-Service.jpg"} />
                </div>
                <div class="col-lg-6">
                  <p>
                    If you have never pulled a trailer behind your vehicle, then
                    you will find these information about towing fascinating and
                    would help you plan towing safely. Towing a car using your
                    Car, SUV or 4WD is one aspect and Towing Cars, SUV, 4WDs and
                    Trucks for your Wrecking business is another ball game.Most
                    important information about the car or truck is found in
                    your vehicle’s owner’s manual. It is also displayed in the
                    certification sticker or plate inside driver’s door frame.
                    For towing information you would need to know the following
                    acronyms:
                  </p>
                </div>
              </div>
              <p>
                <span class="bold">GVWR:</span> Manufacturers use a gross
                vehicle weight rating to show how much total weight the car or
                truck can handle without a trailer. This would include the
                weight of the vehicle, passengers, and cargo.
              </p>
              <p>
                <span class="bold">GVW:</span> Gross vehicle weight is the
                manufacturer’s estimated total weight of the car or truck with
                all fluids (gas, transmission, etc.), passengers, and cargo. The
                actual weight, though, could vary depending on what your cargo
                is and how many passengers are riding with you at one time.
              </p>
              <p>
                <span class="bold">GCWR:</span> This is the gross combined
                weight rating. It includes the weight of the vehicle,
                passengers, cargo, and trailer with a load. The GCWR number is
                your maximum allowed total combined weight. Exceeding that could
                damage your vehicle.
              </p>
              <h4 className="StaticHeading">
                Questions to Define Towing Requirements
              </h4>
              <h6 className="SmallHeading">
                1. Do I tow one Car or SUV or multiple Car of SUV in one trip?
              </h6>
              <p>
                Often more than one Car/ SUV might be needed to be towed at the
                same time. For such applications, Heavy Duty towing trucks which
                can tackle toughest lifting and recovery jobs are needed. They
                need to have combination of heavy-duty capabilities, incredible
                rotation, extreme stability, and unsurpassed pulling capacity.
                They need to be designed to maximize payload and haul large
                loads on rough terrain.
              </p>
              <h6 className="SmallHeading">
                2. How much weight will be hauled?
              </h6>
              <p>
                Look at a list of the different combinations of cargo the truck
                will need to haul. Typically we would need to handle Cars, SUVs.
                Trucks which are junked and would need to be picked up and
                loaded on the towing truck and secured. Those Cars, SUVs and
                Trucks which are in driving condition can be towed. Cars, SUVs
                can be loaded on to the Towing Truck and in addition one vehicle
                which can be towed can be pulled provided it is within the
                towing capacity. We need to know the estimated weight to be
                hauled? What is the weight being towed like a trailer? What is
                the total payload weight?
                <br />
                As a general rule of thumb, add a buffer of at least 20-percent
                or more to capacity calculations to reduce risk of
                under-spec’ing the tow vehicle.
              </p>
              <h4 className="StaticHeading">
                Understanding Towing Truck Classification
              </h4>
              <p>
                We need to understand the calculations with respect to the
                weight of the towing truck, what kind of trailers it need to
                pull, hauling equipments to get a clear idea of the weight. The
                next step is identifying the truck classification required to
                handle the load. Here are key terms to know when determining
                truck class:
              </p>
              <p>
                <span class="bold">As-spec’d curb weight:</span> This factor is
                defined as the shipping weight of the truck or cab and chassis,
                without aftermarket upfits, including all standard equipment and
                options, fluids, and a full tank of fuel. Consult the truck’s
                original equipment manufacturer (OEM) or dealer representative
                for curb weight estimates on chassis closest to spec
                requirements.
              </p>
              <p>
                <span class="bold">Gross vehicle weight rating (GVWR):</span>{" "}
                This refers to the maximum allowable weight, as certified by the
                manufacturer, a vehicle can weigh (including all fluids, people,
                and cargo) to safely start and stop.
              </p>
              <p>
                <span class="bold">Payload capacity:</span> This is the maximum
                amount of combined weight of cargo, equipment, and occupants a
                vehicle can safely carry. Calculate payload capacity by
                subtracting the vehicle’s as-shipped curb weight from its GVWR.
                For example, if the GVWR is 19,500-lbs., and as-shipped curb
                weight is 9,500-lbs., the truck’s payload capacity is
                10,000-lbs.
              </p>
              <h4 className="StaticHeading">Putting Towing Needs Together</h4>
              <p>
                How is this all put together? If a truck’s actual payload,
                including weight of occupants, is 2,000 lbs., and as-spec’d curb
                weight is 4,500 lbs., then the estimated gross vehicle weight
                (GVW) of the tow vehicle is 6,500 lbs.
                <br />
                What Class does this truck’s GVW fit within? The following is a
                truck classification breakdown by GVWR:
              </p>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Class 1: 0-6,000
                lbs.
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Class 2:
                6,001-10,000 lbs.
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Class 3:
                10,001-14,000 lbs.
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Class 4:
                14,001-16,000 lbs.
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Class 5:
                16,001-19,500 lbs.
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Class 6:
                19,501-26,000 lbs.
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Class 7:
                26,001-33,000 lbs.
              </li>
              <p>
                In the example above, the truck would fit within the Class 2
                range.
              </p>
              <h4 className="StaticHeading">Value of Vehicle Type</h4>
              <p>
                Once the truck class is determined, what type of truck will best
                suit the fleet’s application?
                <br />
                The following are vehicle types, segmented by truck
                classification:
              </p>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Class 1-2:
                Options include pickups, vans, SUVs, and smaller (single rear
                wheel) van cutaways.
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Class 3-4:
                Options include pickups (dual-rear-wheel), van cutaways, and
                medium-duty cab and chassis (including cab-forward and
                conventional cabs).
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> Class 5-7:
                Medium-duty cab and chassis.
              </li>
              <h4 className="StaticHeading">Importance of Towing Capacity</h4>
              <p>
                Now that the proper truck class and type is selected, the next
                factor to consider is gross combination weight rating (GCWR),
                which is the maximum allowable combined weight (as determined by
                the truck OEM) of the truck and its payload, with the trailer
                weight at maximum load.
                <br />
                GCWR is essential to calculating accurate tow capacity because
                it takes into account the tow vehicle’s intended payload. Why is
                this important? Most tow capacity charts published by truck OEMs
                don’t account for a truck’s specific application. When adding
                weight to the truck, this detracts from the vehicle’s towing
                capacity.
                <br />
                For example, suppose a truck, at maximum load, has a GVW of
                6,500 lbs. and its GCWR is 18,500 lbs. Subtract the GVW (6,500
                lbs.) from the GCWR (18,500 lbs.) to come up with an estimated
                maximum towing capacity of 12,000 lbs.
                <br />
                An additional 500 lbs. to the truck’s payload, which would bring
                the GVW to 7,000 lbs., would then reduce towing capacity by 500
                lbs., to 11,500 lbs.
                <br />
                The tow vehicle’s payload, therefore, directly impacts tow
                capacity. Lightening the truck’s payload boosts towing capacity
                and vice versa
              </p>
              <h4 className="StaticHeading">Tips in Powertrain Selection</h4>
              <p>
                However, how does all of this explain that ½-ton pickups,
                despite being the same size, offer such a wide variance in
                maximum towing capacities – from 5,000 lbs. to more than 11,000
                lbs.? The differences lie in powertrain specification, including
                the engine, transmission, and rear (drive) axle ratio – all of
                which directly impact GCWR.
              </p>
              <p>
                <span class="bold">Engine:</span> Which is the best engine
                choice for a fleet’s towing requirements? For Class 1-3 trucks,
                the decision is usually between one diesel engine option and a
                variety of sizes of gas engines. As a general rule of thumb, the
                diesel offers the largest GCWR, and thus highest towing capacity
                because of its significantly higher torque. The downside is that
                the diesel option costs $8,000 more up-front than the
                gasoline-powered engine, so make sure the towing weight requires
                diesel.
                <br />
                For larger medium-duty trucks, especially in the Class 6-7
                range, engine selection is a bit more complicated because there
                could be more than a dozen different diesel engine options to
                choose from, based on horsepower and torque, that determine
                GCWR.
              </p>
              <p>
                <span class="bold">Transmission:</span> Should a manual or
                automatic transmission be spec’d? Depending on the vehicle type
                or manufacturer, options may not be available. In most cases,
                the automatic is the only transmission available. However, where
                there is an option, check with the vehicle manufacturer or
                dealer representative about which transmission will best handle
                your trailer load.
                <br />
                Also, for most Class 2 through Class 3 pickup trucks and vans,
                OEMs offer a tow package that includes a transmission cooler to
                help prolong transmission life when the truck is under constant,
                heavy loads.
              </p>
              <p>
                <span class="bold">Rear axle ratio:</span> he rear axle ratio
                represents the relationship between driveshaft revolutions
                (driven by the transmission) and rear axle revolutions.
                Typically, the higher the ratio, greater pulling power is
                gained, but at the expense of fuel economy. The inverse often
                holds true. Lowering the ratio improves fuel economy, but
                sacrifices pulling power. Speak with a truck OEM rep to
                determine the ratio that best fits the fleet’s trailering
                requirements and fuel efficiency objectives.
              </p>
              <h4 className="StaticHeading">Other Towing Considerations</h4>
              <p>
                In addition to powertrain specs, here are other options to
                consider when selecting the right tow vehicle:
              </p>
              <p>
                <span class="bold">Two- or four-wheel drive:</span> Will the
                truck and trailer need to operate in off-road conditions? If so,
                how often would the four-wheel drive need to be engaged for
                added traction?
                <br />
                These questions are important because the incremental cost for
                four-wheel drive can be as much as $4,000. Also, four-wheel
                drive adds substantial weight to the truck, diminishing payload
                and trailering capacity. Does the fleet’s application warrant
                this extra cost and weight? If not, stick with two-wheel drive.
              </p>
              <p>
                <span class="bold">Rear suspension:</span> If spec’ing a “smooth
                ride” suspension but keeping the truck under a constant heavy
                load pulling a trailer, there is a risk in creating premature
                maintenance issues and shortening the truck life. Select a rear
                suspension designed to handle the rigors of regular trailering.
              </p>
              <p>
                <span class="bold">Side-view mirror configuration:</span> With
                full-size pickups and some full-size SUVs, there is an option
                for extendable side-view mirrors. These help improve visibility
                and safety, especially when pulling an enclosed trailer that may
                impede a driver’s rear-view capabilities.
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

export default TowingProcess;
