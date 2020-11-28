import React from 'react';

export default function HeroSection(props) {
  const { styles, openModal, handleCurrentUser } = props;

  const handleButtonClick = (buttonName) => {
    openModal();

    handleCurrentUser(buttonName);
  }

  return (
    <section className="hero-section" id="hero">

      <div className="wave">

        <svg width="100%" height="355px" viewBox="0 0 1920 355" version="1.1" xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Apple-TV" transform="translate(0.000000, -402.000000)" fill="#FFFFFF">
              <path
                d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z"
                id="Path"></path>
            </g>
          </g>
        </svg>

      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 hero-text-image">
            <div className="row">
              <div className="col-lg-7 text-center text-lg-left">
                <h1 data-aos="fade-right">Hello World</h1>
                <p className="mb-5" data-aos="fade-right" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</p>

                <div class={`${styles.landingContainer_buttons} d-flex justify-content-center`}>
                  <p data-aos="fade-right" data-aos-delay="200" data-aos-offset="-500">
                    <span className="btn btn-outline-white" name="passenger" onClick={() => handleButtonClick('passenger')}>I'm a passenger</span>
                  </p>
                  <p data-aos="fade-right" data-aos-delay="200" data-aos-offset="-500">
                    <span className="btn btn-outline-white" name="driver" onClick={() => handleButtonClick('driver')}>I'm a driver</span>
                  </p>
                </div>

              </div>
              <div className="col-lg-5 iphone-wrap">
                <img src="assets/img/frontdesign.png" width="400" alt="descriptiveLogo"
                  className="front-1" data-aos="fade-right" />
              </div>
            </div>
          </div>
        </div>
      </div >

    </section >
  );
}