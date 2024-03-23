//import React from 'react';

const Pricing = () => {
    return(
    <div id="pricing">
      <h2>A Plan for Every Dog&#39;s Needs</h2>
      <p>Simple and affordable price plans for your and your dog.</p>

      <div className="row">
        <div className="card-group price">
          <div className="pricing-column col-md-4 col-sm-6 col-xs-12 cards" id="card1">
            <div className="card">
              <div className="card-header"><h3>Free</h3></div>
              <div className="card-body">
                <h2>Risk free</h2>
                <p>5 Matches Per Week</p>
                <p>10 Messages Per Day</p>
                <p>Unlimited App Usage</p>
                <p style={{ visibility: 'hidden' }}>.</p>
                <button className="w-100 btn btn-lg btn-dark" type="button">
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          <div className="pricing-column col-md-4 col-sm-6 col-xs-12 cards">
            <div className="card">
              <div className="card-header"><h3>Premium Plus</h3></div>
              <div className="card-body">
                <h2>$49 / mo</h2>
                <p>Unlimited Matches</p>
                <p>Unlimited Messages</p>
                <p>Unlimited App Usage</p>
                <p style={{ visibility: 'hidden' }}>.</p>

                <button className="w-100 btn btn-lg btn-dark" type="button">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
};


export default Pricing