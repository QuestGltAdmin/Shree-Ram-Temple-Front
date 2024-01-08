import React from 'react'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className="header__top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="left d-flex align-items-center">
                                    <a href="tel:+917065081062">
                                        <i className="las la-phone-volume" /> Call Us
                                    </a>
                                    {/* <div className="language">
            <div className="google-translate">
              {" "}
              <div id="google_translate_element">
                <div
                  className="skiptranslate goog-te-gadget"
                  dir="ltr"
                  style={{}}
                >
                  <div id=":0.targetLanguage" style={{ display: "inline" }}>
                    <select
                      className="goog-te-combo"
                      aria-label="Language Translate Widget"
                    >
                      <option value="">Select Language</option>
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="or">Odia (Oriya)</option>
                    </select>
                  </div>
                  &nbsp;&nbsp;Powered by{" "}
                  <span style={{ whiteSpace: "nowrap" }}>
                    <a
                      className="VIpgJd-ZVi9od-l4eHX-hSRGPd"
                      href="https://translate.google.com"
                      target="_blank"
                    >
                      <img
                        src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png"
                        width="37px"
                        height="14px"
                        style={{ paddingRight: 3 }}
                        alt="Google Translate"
                      />
                      Translate
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div> */}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="right text-sm-right text-center">
                                    <a href="">
                                        <i className="fas fa-user fa-fw" /> Login
                                    </a>
                                    <a href="">
                                        <i className="fas fa-user-plus fa-fw" /> Registration
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
