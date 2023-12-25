import React from 'react';
import f1 from './image/f1.png';
import f2 from './image/f2.png';
import f3 from './image/f3.png';
import f4 from './image/f4.png';
import f5 from './image/f5.png';
import f6 from './image/f6.png';
const FurnitureSection = () => {
  return (
    <section className="furniture_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Our Furniture</h2>
          <p>
            which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an
          </p>
        </div>
        <div className="row">
          <div className="col-md-6-fur col-lg-4">
            <div className="box">
              <div className="img-box">
                <img src={f1} alt="" />
              </div>
              <div className="detail-box">
                <h5>brown Chair Design</h5>
                <div className="price_box">
                  <h6 className="price_heading">
                    <span>$</span> 100.00
                  </h6>
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6-fur col-lg-4">
            <div className="box">
              <div className="img-box">
              <img src={f2} alt="" />
              </div>
              <div className="detail-box">
                <h5>Double Bed Design</h5>
                <div className="price_box">
                  <h6 className="price_heading">
                    <span>$</span> 200.00
                  </h6>
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6-fur col-lg-4">
            <div className="box">
              <div className="img-box">
              <img src={f3} alt="" />
              </div>
              <div className="detail-box">
                <h5>House Chair Design</h5>
                <div className="price_box">
                  <h6 className="price_heading">
                    <span>$</span> 200.00
                  </h6>
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6-fur col-lg-4">
            <div className="box">
              <div className="img-box">
              <img src={f4} alt="" />
              </div>
              <div className="detail-box">
                <h5>brown Table Design</h5>
                <div className="price_box">
                  <h6 className="price_heading">
                    <span>$</span> 100.00
                  </h6>
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6-fur col-lg-4">
            <div className="box">
              <div className="img-box">
              <img src={f5} alt="" />
              </div>
              <div className="detail-box">
                <h5>Blue Chair Design</h5>
                <div className="price_box">
                  <h6 className="price_heading">
                    <span>$</span> 200.00
                  </h6>
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6-fur col-lg-4">
            <div className="box">
              <div className="img-box">
              <img src={f6} alt="" />
              </div>
              <div className="detail-box">
                <h5>Brown Table Design</h5>
                <div className="price_box">
                  <h6 className="price_heading">
                    <span>$</span> 200.00
                  </h6>
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurnitureSection;
