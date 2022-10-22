import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Foot>
      <div>
        <div>
          <div>
            <Notes>
              <div>
                <h4>Product</h4>
                <small>Our Plan</small>
                <small>Free Trail</small>
              </div>
              <div>
                <h4>About Us</h4>
                <small>Request Demo</small>
                <small>FAQs</small>
              </div>
              <div>
                <h4>Support</h4>
                <small>Features</small>
                <small>Contact Us</small>
              </div>
              <div>
                <h4>Explore</h4>
                <small>Find a nonprofite</small>
                <small>Corporate Solution</small>
              </div>
            </Notes>
          </div>
          <div>
            <div>
              <div>
                <small>support@Xypo.com</small>
                <small>copyright 2020 Xypo</small>
              </div>
              <div>
                <button>English</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Foot>
  );
}
const Foot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: absolute;
  /* bottom: 0px; */
div{
    margin: 2px;
    /* padding: 2px; */
}
  h4 {
    color: white;
    margin-bottom: 20px;
  }

  small {
    background-color: lightgrey;
    font-size: 13px;
    color: black;
  }
  button {
    padding: 12px 38px;
    margin: 20px;
    font-size: 10px;
  }
`;

const Notes = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;
