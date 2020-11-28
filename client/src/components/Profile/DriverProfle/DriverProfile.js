import React from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import DriverPhoto from './DriverPhoto/DriverPhoto';
import DriverName from './DriverName/DriverName';
import DriverBasicInformation from './DriverBasicInformation/DriverBasicInformation';
import Footer from '../../Footer/Footer';
import styles from './DriverProfile.module.css';
import {
  Link
} from "react-router-dom";

export default function DriverProfile() {
  return (


    <div className="container">
      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="driverprofile" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <DriverPhoto />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <DriverName />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <DriverBasicInformation />
        </div>
      </div>

      {/* Change PX  if HAS BASIC INFORMATION already */}
      {/* style={{ marginBottom: "105px" }} */}
      <div class="row" style={{ marginBottom: "55px" }}>
        <div class="col">
          <Link to="/driverhome">
            <button type="button" class="btn btn-primary btn-block">Save Information</button>
          </Link>
        </div>
      </div>

      {/* Render if has BASIC INFORMATION already */}
      {/* <Footer /> */}

    </div>

  );
}