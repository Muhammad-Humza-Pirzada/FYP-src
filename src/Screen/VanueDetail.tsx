import React from "react";
import NavData from "../compoent/NavData";
import WAButton from "../compoent/WAButton";
import "./VanueDetailstyle.css";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import CallIcon from "@mui/icons-material/Call";
import WInput from "../compoent/WInput";
export default function VanueDetail() {
  let btnstyle = {
    backgroundcolor: "red",
    color: "white",
  };
  return (
    <>
      <NavData />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 border my-3">
            <div className="py-3">
              <img
                src="https://image.wedmegood.com/resized/1000X/uploads/member/99817/1692425776_S_R_Sangeet_04_00954_1.jpg?crop=0,147,2048,1152"
                className="w-100"
                alt=""
              />
            </div>
            <div className="py-1">
              <div className=" border">
                <div>
                  <p className="fw-bold">Rainforest Resort, Igatpuri</p>
                </div>
                <div className="py-2">
                  <span className="fw-bold fs-5 ">
                    <LocationOnIcon /> Igatpuri, Mumbai
                  </span>
                  <span>(View on Map)</span>
                </div>
                <div>
                  <span className="m-2">Igatpuri, Mumbai</span>
                  <span>
                    RainForest Resort Igatpuri, Igatpuri, Maharashtra, India
                  </span>
                </div>
                <div className="py-2">
                  <span className="contactIcon">
                    {" "}
                    <LocalPhoneIcon /> Contact
                  </span>
                </div>

                <div className="row justify-content-around">
                  <div className=" col-lg-3 col-md-3 text-center border-end">
                    <InsertPhotoIcon /> Photo 22{" "}
                  </div>
                  <div className=" col-lg-3 col-md-3 text-center border-end">
                    <FavoriteBorderIcon />
                    ShortList{" "}
                  </div>
                  <div className=" col-lg-3 col-md-3 text-center border-end">
                    <InsertPhotoIcon /> Write A Review{" "}
                  </div>
                  <div className=" col-lg-3 col-md-3 text-center ">
                    <ShareIcon /> Share{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 border my-3 border">
            <div className="py-3">
              <div className="bg-white border-bottom">
                <div className="card p-2">
                  <div className="border-bottom">
                    <span className="float-start fs-5 fw-bold">
                      Starting Prices
                    </span>
                    <span
                      className="float-end fs-5 fw-bold"
                      style={{ color: "#e72e77" }}
                    >
                      Pricing Info
                    </span>
                  </div>

                  <div className="border-bottom py-2">
                    <span
                      className="float-strat fs-5"
                      style={{ color: "#e72e77" }}
                    >
                      1,500 per plate
                    </span>
                    <span>(Textes Extra)</span>
                    <span className="float-end ">Veg price</span>
                  </div>

                  <div className="row ">
                    <div className=" col-lg-6 col-md-6 col-sm-12 py-2 text-center">
                      <span>
                        {" "}
                        <WAButton
                          Icon={<ForwardToInboxIcon />}
                          Text={"Send Massage"}
                          className="btn  btnColorSend px-3 py-2"
                        />
                      </span>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 py-2 text-center">
                      <span>
                        <WAButton
                          Text={"View Contact"}
                          Icon={<CallIcon />}
                          className="btn btnColorcontact px-3 py-2 "
                        />
                      </span>
                    </div>
                  </div>

                  <hr />

                  <div>
                    <p className="fw-bold">
                      Hi Hyatt Centric Sector 17 Chandigarh,
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 py-2">
                      <WInput
                        variant="standard"
                        type="text"
                        label="Name"
                        fullwidth
                      />
                    </div>
                    <div className="col-lg-6 py-2">
                      <WInput
                        variant="standard"
                        type="text"
                        label="Phone Number"
                        fullwidth
                      />
                    </div>

                    <div className="col-lg-6 py-2">
                      <WInput
                        variant="standard"
                        type="email"
                        label="Email"
                        fullwidth
                      />
                    </div>

                    <div className="col-lg-6 py-2">
                      <WInput
                        variant="standard"
                        type="date"
                        label="Date"
                        fullwidth
                      />
                    </div>

                    <div className="col-lg-6 py-2">
                      <WInput
                        variant="standard"
                        type="email"
                        label="No of guest *(min 50)"
                        fullwidth
                      />
                    </div>

                    <div className="col-lg-6 py-2">
                      <WInput
                        variant="standard"
                        type="text"
                        label="No of room"
                        fullwidth
                      />
                    </div>
                  </div>

                  <div className="container text-center py-2">
                    <h1 className="">Funtion Time</h1>
                  <div className="row">
                    <div className="col text-center">
                      <span>Day</span>
                      <br/>
                      <input type="radio" className="btn" name="Day" />

                    </div>
                    <div className="col">

                    <div className="col text-center">
                     <span>Nigth</span>
                     <br/>
                      <input type="radio" className="btn" name="Day"/>

                    </div>


                    </div>
                  </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
