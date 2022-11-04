import React from 'react';
import Ratings from "react-ratings-declarative";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './Navbar';
import {SSRProvider} from 'react-aria';
import Link from 'next/link';
// import { Link } from "react-router-dom";

// <div className="row g-3 mb-4">
//   <div className="col">
//     <button className="btn btn-outline-dark py-2 w-100">
//       Add to cart
//     </button>
//   </div>
//   <div className="col">
//     <button className="btn btn-dark py-2 w-100">Buy now</button>
//   </div>
// </div>

export default function ProductDetail() {
return(
      <SSRProvider>
        <Navigation />
        <div className="row mb-4 ms-5">
          <div className="d-none d-lg-block col-lg-1 mt-5">
            <div className="image-vertical-scroller">
              <div className="d-flex flex-column">
                {Array.from({ length: 3 }, (_, i) => {
                  let selected = i !== 1 ? "opacity-6" : "";
                  return (
                    <a key={i} href="#">
                      <img
                        className={"rounded mb-2 ratio flex" + selected}
                        alt=""
                        src="https://th.bing.com/th/id/OIP.UjD_XbAfJo1rEUDRw-PZhgHaHa?pid=ImgDet&rs=1"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="row">
              <div className="col-12 mb-4">
                <img
                  className="border rounded ratio ratio-1x1"
                  alt=""
                  src="https://i5.walmartimages.com/asr/d63cc29a-1802-4b13-bee5-30f1f03435e7.ef5de3226a1d75ce0e8dd94e4f79eaca.jpeg"
                  style={{width:'100%'}}
                />
              </div>
            </div>
          </div>
          <div className="col mt-5 me-5 ms-5">
            <div className="d-flex flex-column" style={{width:'40rem'}}>
              <h2 className="mb-1 ">Titan Watch</h2>
              <h4 className="text-muted mb-4"> ₹ 10000</h4>
              <h4 className="mb-0">Details</h4>
              <hr />
              <dl className="row">
                <dt className="col-sm-4">Code</dt>
                <dd className="col-sm-8 mb-3">C0001</dd>

                <dt className="col-sm-4">Category</dt>
                <dd className="col-sm-8 mb-3">Cases & Covers</dd>

                <dt className="col-sm-4">Brand</dt>
                <dd className="col-sm-8 mb-3">iPhone X</dd>

                <dt className="col-sm-4">Manufacturer</dt>
                <dd className="col-sm-8 mb-3">Nillkin</dd>

                <dt className="col-sm-4">Color</dt>
                <dd className="col-sm-8 mb-3">Red, Green, Blue, Pink</dd>

                <dt className="col-sm-4">Status</dt>
                <dd className="col-sm-8 mb-3">Instock</dd>

                <dt className="col-sm-4">Rating</dt>
                <dd className="col-sm-8 mb-3">
                  <Ratings
                    rating={4.5}
                    widgetRatedColors="rgb(253, 204, 13)"
                    widgetSpacings="2px"
                  >
                    {Array.from({ length: 5 }, (_, i) => {
                      return (
                        <Ratings.Widget
                          key={i}
                          widgetDimension="20px"
                          svgIconViewBox="0 0 19 20"
                          widgetHoverColor="rgb(253, 204, 13)"
                        />
                      );
                    })}
                  </Ratings>
                </dd>
              </dl>
            </div>
          </div>
          <br />
          <br />
          <h4 style={{marginLeft: '10%'}} className="mb-0">Description</h4>
          <hr style={{marginLeft: '10%', width: '80%'}}/>
          <p style={{width:'80%', marginLeft: '10%'}} className="lead">
            <small>
              Nature (TPU case) use environmental non-toxic TPU, silky smooth
              and ultrathin. Glittering and translucent, arbitrary rue
              reserved volume button cutouts, easy to operate. Side frosted
              texture anti-slipping, details show its concern; transparent
              frosted logo shows its taste. The release of self, the flavor of
              life. Nillkin launched Nature transparent soft cover, only to
              retain the original phone style. Subverting tradition,
              redefinition. Thinner design Environmental texture better hand
              feeling.
            </small>
          </p>
        </div>
      </SSRProvider>
  );
}

export {ProductDetail};
