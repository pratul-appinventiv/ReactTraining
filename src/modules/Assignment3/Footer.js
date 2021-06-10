import React from "react";

const Footer = () => {
  return (
    <div className={"footerContainer"}>
      <footer>
        <div className={"sectionA"}>
          <div className={"sectionALeft"}>
            <img src={"Assignment3Images/logo.svg"} alt="" />
            <img src={"Assignment3Images/review.png"} alt="" />
            <p>{"14 East, Level 8, Sliema Road, GZR1639, Malta"}</p>
          </div>

          <div className={"sectionARight"}>
            <div className={"Link Link1"}>
              <ul>
                <li>{"Company"}</li>
                <li>
                  <a href="https://www.google.com">{"About us"}</a>
                </li>
                <li>
                  <a href="https://www.google.com">{"Careers"}</a>
                </li>
                <li>
                  <a href="https://www.google.com">{"Press kit"}</a>
                </li>
              </ul>
            </div>
            <div className={"Link Link2"}>
              <ul>
                <li>{"Support"}</li>
                <li>
                  <a href="https://www.google.com">{"Help Center"}</a>
                </li>
                <li>
                  <a href="https://www.google.com">{"Contact"}</a>
                </li>
              </ul>
            </div>
            <div className={"Link Link3"}>
              <ul>
                <li>{"Social"}</li>
                <li className={"socialFlex"}>
                  <img src={"Assignment3Images/instagram-brands.svg"} alt="" />
                  <p>
                    <a href="https://www.google.com">{"Blog"}</a>
                  </p>
                </li>
                <li className={"socialFlex"}>
                  <img src={"Assignment3Images/twitter.svg"} alt="" />
                  <p>
                    <a href="https://www.google.com">{"Twitter"}</a>
                  </p>
                </li>
                <li className={"socialFlex"}>
                  <img src={"Assignment3Images/facebook.svg"} alt="" />
                  <p>
                    <a href="https://www.google.com">{"Facebook"}</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={"sectionB"}>
          <div className={"sectionBLink"}>
            <ul>
              <li>
                <a href="https://www.google.com">&copy;Xcoins.com</a>
              </li>
              <li>
                <a href="https://www.google.com">{"Terms of Service"}</a>
              </li>
              <li>
                <a href="https://www.google.com">{"Privacy Policy"}</a>
              </li>
              <li>
                <a href="https://www.google.com">{"Legal Notice"}</a>
              </li>
              <li>
                <a href="https://www.google.com">{"Sitemap"}</a>
              </li>
            </ul>

            <div className={"select"}>
              <p>{"Language:"}</p>
              <select>
                <option value="0">English</option>
              </select>
            </div>
          </div>

          <p>
            {
              "Xcoins is property of CF Technologies Ltd - Company #204616970 4 East, Level 8, Sliema Road, GZR1639, Malta. All trademarks and copyrights belong to their respective owners. All rights reserved."
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
