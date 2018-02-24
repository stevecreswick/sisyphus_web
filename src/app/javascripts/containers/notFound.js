import React from 'react';
import { Link } from 'react-router-dom';

const template = (
  <div className="scene">
    <div className="scene-inner-container">
      <div className="mountains">
        <div className="mountain mountain-1">
              1
        </div>
        <div className="mountain mountain-2 main-mountain">
          2
        </div>
        <div className="mountain mountain-1 offset-mountain">
              1
        </div>
        <div className="mountain mountain-2 override-shade">
          2
        </div>

        {/* <div className="mountain mountain-1">
              1
        </div> */}

        {/* <div className="mountain mountain-1 offset-mountain">
              1
        </div> */}
        {/* <div className="mountain mountain-3">
          3
        </div> */}
        <div className="mountain mountain-1 offset-mountain">
              1
        </div>

        <div className="mountain mountain-2 override-shade">
          2
        </div>

        <div className="mountain mountain-4">
          4
        </div>
      </div>

      <div className="ground">5</div>
    </div>
  </div>
);

const NotFound = () =>
  <div style={{ margin: '2rem auto', textAlign: 'center' }}>
    <p>Page not found</p>
    <p><Link to="/">Go to the home page →</Link></p>
    {template}
  </div>;

export default NotFound;
