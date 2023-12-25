import React from 'react';
import client1 from './image/client.jpg'
import client2 from './image/client.jpg'
import client3 from './image/client.jpg'
const Clientsection = () => {
  return (
    <section className="client_section layout_padding-bottom">
      <div className="container-client">
        <div className="heading_client">
          <h2>Testimonial</h2>
        </div>
        <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-11 col-lg-10 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img src={client1} alt="" />
                    </div>
                    <div className="detail-box">
                      <div className="name">
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                        <h6>Siaalya</h6>
                      </div>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable cIt is a long established fact
                        that a reader will be distracted by the readable c
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-11 col-lg-10 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img src={client2} alt="" />
                    </div>
                    <div className="detail-box">
                      <div className="name">
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                        <h6>Siaalya</h6>
                      </div>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable cIt is a long established fact
                        that a reader will be distracted by the readable c
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-11 col-lg-10 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img src={client3} alt="" />
                    </div>
                    <div className="detail-box">
                      <div className="name">
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                        <h6>Siaalya</h6>
                      </div>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable cIt is a long established fact
                        that a reader will be distracted by the readable c
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn-container">
            <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default  Clientsection ;
