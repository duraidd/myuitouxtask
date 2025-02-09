
import logo from '../assets/logo.png';

import '../App.css'

function Header() {
    return (
        <>
        <header className="site__mobile-header">
                  <div className="mobile-header">
                     <div className="container">
                        <div className="mobile-header__body">
                           <button className="mobile-header__menu-button" type="button">
                              <svg width="18px" height="14px">
                                 <path d="M-0,8L-0,6L18,6L18,8L-0,8ZM-0,-0L18,-0L18,2L-0,2L-0,-0ZM14,14L-0,14L-0,12L14,12L14,14Z"></path>
                              </svg>
                           </button>
                           <a className="mobile-header__logo" href="">
                              <div>
                                 <img src={logo} alt="Logo" style={{ "height": "30px", "width": "100px" }} className="mobile-header__logo-part-one" />
                              </div>
                           </a>
                           <div className="mobile-header__search mobile-search">
                              <form className="mobile-search__body">
                                 <input type="text" className="mobile-search__input" placeholder="Enter keyword or part number" name="title" />
                                 <button type="button" className="mobile-search__vehicle-picker" aria-label="Select Vehicle">
                                    <svg width="20" height="20">
                                       <path d="M6.6,2c2,0,4.8,0,6.8,0c1,0,2.9,0.8,3.6,2.2C17.7,5.7,17.9,7,18.4,7C20,7,20,8,20,8v1h-1v7.5c0,0.8-0.7,1.5-1.5,1.5h-1
                                       c-0.8,0-1.5-0.7-1.5-1.5V16H5v0.5C5,17.3,4.3,18,3.5,18h-1C1.7,18,1,17.3,1,16.5V16V9H0V8c0,0,0.1-1,1.6-1C2.1,7,2.3,5.7,3,4.2
                                       C3.7,2.8,5.6,2,6.6,2z M13.3,4H6.7c-0.8,0-1.4,0-2,0.7c-0.5,0.6-0.8,1.5-1,2C3.6,7.1,3.5,7.9,3.7,8C4.5,8.4,6.1,9,10,9
                                       c4,0,5.4-0.6,6.3-1c0.2-0.1,0.2-0.8,0-1.2c-0.2-0.4-0.5-1.5-1-2C14.7,4,14.1,4,13.3,4z M4,10c-0.4-0.3-1.5-0.5-2,0
                                       c-0.4,0.4-0.4,1.6,0,2c0.5,0.5,4,0.4,4,0C6,11.2,4.5,10.3,4,10z M14,12c0,0.4,3.5,0.5,4,0c0.4-0.4,0.4-1.6,0-2c-0.5-0.5-1.3-0.3-2,0
                                       C15.5,10.2,14,11.3,14,12z"></path>
                                    </svg>
                                    <span className="mobile-search__vehicle-picker-label">Vehicle</span>
                                 </button>
                                 <button type="submit" className="mobile-search__button mobile-search__button--search">
                                    <svg width="20" height="20">
                                       <path d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
                                       c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
                                       c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"></path>
                                    </svg>
                                 </button>
                                 <button type="button" className="mobile-search__button mobile-search__button--close">
                                    <svg width="20" height="20">
                                       <path d="M16.7,16.7L16.7,16.7c-0.4,0.4-1,0.4-1.4,0L10,11.4l-5.3,5.3c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L8.6,10L3.3,4.7
                                       c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L10,8.6l5.3-5.3c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L11.4,10l5.3,5.3
                                       C17.1,15.7,17.1,16.3,16.7,16.7z"></path>
                                    </svg>
                                 </button>
                                 <div className="mobile-search__field"></div>
                              </form>
                           </div>
                           <div className="mobile-header__indicators">
                              <div className="mobile-indicator mobile-indicator--search d-md-none">
                                 <button type="button" className="mobile-indicator__button">
                                    <span className="mobile-indicator__icon">
                                       <svg width="20" height="20">
                                          <path d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
                                          c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
                                          c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"></path>
                                       </svg>
                                    </span>
                                 </button>
                              </div>
                              <div className="mobile-indicator d-none d-md-block">
                                 <a href="account-login.html" className="mobile-indicator__button">
                                    <span className="mobile-indicator__icon">
                                       <svg width="20" height="20">
                                          <path d="M20,20h-2c0-4.4-3.6-8-8-8s-8,3.6-8,8H0c0-4.2,2.6-7.8,6.3-9.3C4.9,9.6,4,7.9,4,6c0-3.3,2.7-6,6-6s6,2.7,6,6
                                          c0,1.9-0.9,3.6-2.3,4.7C17.4,12.2,20,15.8,20,20z M14,6c0-2.2-1.8-4-4-4S6,3.8,6,6s1.8,4,4,4S14,8.2,14,6z"></path>
                                       </svg>
                                    </span>
                                 </a>
                              </div>
                              <div className="mobile-indicator d-none d-md-block">
                                 <a href="wishlist.html" className="mobile-indicator__button">
                                    <span className="mobile-indicator__icon">
                                       <svg width="20" height="20">
                                          <path d="M14,3c2.2,0,4,1.8,4,4c0,4-5.2,10-8,10S2,11,2,7c0-2.2,1.8-4,4-4c1,0,1.9,0.4,2.7,1L10,5.2L11.3,4C12.1,3.4,13,3,14,3 M14,1
                                          c-1.5,0-2.9,0.6-4,1.5C8.9,1.6,7.5,1,6,1C2.7,1,0,3.7,0,7c0,5,6,12,10,12s10-7,10-12C20,3.7,17.3,1,14,1L14,1z"></path>
                                       </svg>
                                    </span>
                                 </a>
                              </div>
                              <div className="mobile-indicator">
                                 <a href="cart.html" className="mobile-indicator__button">
                                    <span className="mobile-indicator__icon">
                                       <svg width="20" height="20">
                                          <circle cx="7" cy="17" r="2"></circle>
                                          <circle cx="15" cy="17" r="2"></circle>
                                          <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                          V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                          C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                       </svg>
                                       <span className="mobile-indicator__counter">7</span>
                                    </span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </header>
      
               <header className="site__header">
                  <div className="header">
                     <div className="header__megamenu-area megamenu-area">
                     </div>
                     <div className="header__topbar-classic-bg"></div>
                     <div className="header__topbar-classic">
                        <div className="topbar topbar--classic">
                           <div className="topbar__item-text"><a className="topbar__link" href="about-us.html">About Us</a></div>
                           <div className="topbar__item-text"><a className="topbar__link" href="contact-us-v1.html">Contacts</a></div>
                           <div className="topbar__item-text"><a className="topbar__link" href="">Store Location</a></div>
                           <div className="topbar__item-text"><a className="topbar__link" href="track-order.html">Track Order</a></div>
                           <div className="topbar__item-text"><a className="topbar__link" href="blog-classic-right-sidebar.html">Blog</a></div>
                           <div className="topbar__item-spring"></div>
                           <div className="topbar__item-button"><a href="" className="topbar__button"><span className="topbar__button-label">Compare:</span> <span className="topbar__button-title">5</span></a></div>
                           <div className="topbar__item-button topbar__menu">
                              <button className="topbar__button topbar__button--has-arrow topbar__menu-button" type="button">
                                 <span className="topbar__button-label">Currency:</span> <span className="topbar__button-title">RS</span>
                                 <span className="topbar__button-arrow">
                                    <svg width="7px" height="5px">
                                       <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                    </svg>
                                 </span>
                              </button>
                              <div className="topbar__menu-body"><a className="topbar__menu-item" href="#">€ Euro</a> <a className="topbar__menu-item" href="#">£ Pound Sterling</a> <a className="topbar__menu-item" href="#">$ US Dollar</a> <a className="topbar__menu-item" href="#">₽ Russian Ruble</a></div>
                           </div>
                           <div className="topbar__menu">
                              <button className="topbar__button topbar__button--has-arrow topbar__menu-button" type="button">
                                 <span className="topbar__button-label">Language:</span> <span className="topbar__button-title">EN</span>
                                 <span className="topbar__button-arrow">
                                    <svg width="7px" height="5px">
                                       <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                    </svg>
                                 </span>
                              </button>
                              
                           </div>
                        </div>
                     </div>
                     <div className="header__navbar">
                        <div className="header__navbar-departments">
                           <div className="departments">
                              <button className="departments__button" type="button">
                                 <span className="departments__button-icon">
                                    <svg width="16px" height="12px">
                                       <path d="M0,7L0,5L16,5L16,7L0,7ZM0,0L16,0L16,2L0,2L0,0ZM12,12L0,12L0,10L12,10L12,12Z"></path>
                                    </svg>
                                 </span>
                                 <span className="departments__button-title">Shop By Category</span>
                                 <span className="departments__button-arrow">
                                    <svg width="9px" height="6px">
                                       <path d="M0.2,0.4c0.4-0.4,1-0.5,1.4-0.1l2.9,3l2.9-3c0.4-0.4,1.1-0.4,1.4,0.1c0.3,0.4,0.3,0.9-0.1,1.3L4.5,6L0.3,1.6C-0.1,1.3-0.1,0.7,0.2,0.4z"></path>
                                    </svg>
                                 </span>
                              </button>
                              <div className="departments__menu">
                                 <div className="departments__arrow"></div>
                                 <div className="departments__body">
                                    <ul className="departments__list">
                                       <li className="departments__list-padding" role="presentation"></li>
                                       <li className="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
                                          <a href="" className="departments__item-link">
                                             Headlights &amp; Lighting
                                             <span className="departments__item-arrow">
                                                <svg width="7" height="11">
                                                   <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                                                   C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                                </svg>
                                             </span>
                                          </a>
                                          <div className="departments__item-menu">
                                             <div className="megamenu departments__megamenu departments__megamenu--size--xl">                                              
                                                <div className="row">
                                                   <div className="col-1of5">
                                                      <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Body Parts</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Bumpers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Hoods</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Grilles</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Door Handles</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Car Covers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tailgates</a></li>
                                                            </ul>
                                                         </li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Suspension</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Steering</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fuel Systems</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Transmission</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Filters</a></li>
                                                      </ul>
                                                   </div>
                                                   <div className="col-1of5">
                                                      <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Headlights &amp; Lighting</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Headlights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tail Lights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Turn Signals</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Switches &amp; Relays</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Corner Lights</a></li>
                                                            </ul>
                                                         </li>
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Brakes &amp; Suspension</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Brake Discs</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Wheel Hubs</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Suspension</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Ball Joints</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Brake Pad Sets</a></li>
                                                            </ul>
                                                         </li>
                                                      </ul>
                                                   </div>
                                                   <div className="col-1of5">
                                                      <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Interior Parts</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Floor Mats</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Gauges</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Consoles &amp; Organizers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Mobile Electronics</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Steering Wheels</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Cargo Accessories</a></li>
                                                            </ul>
                                                         </li>
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Engine &amp; Drivetrain</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Filters</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Oxygen Sensors</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Heating</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Exhaust</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Cranks &amp; Pistons</a></li>
                                                            </ul>
                                                         </li>
                                                      </ul>
                                                   </div>
                                                   <div className="col-1of5">
                                                      <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Tools &amp; Garage</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Repair Manuals</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Car Care</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Code Readers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tool Boxes</a></li>
                                                            </ul>
                                                         </li>
                                                      </ul>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </li>
                                       <li className="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
                                          <a href="" className="departments__item-link">
                                             Interior Parts
                                             <span className="departments__item-arrow">
                                                <svg width="7" height="11">
                                                   <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                                                   C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                                </svg>
                                             </span>
                                          </a>
                                          <div className="departments__item-menu">
                                             <div className="megamenu departments__megamenu departments__megamenu--size--lg">
                                                <div className="megamenu__image">
                                                   {/* <img src="images/departments/departments-1.jpg" alt=""> */}
      
                                                </div>
                                                <div className="row">
                                                   <div className="col-3">
                                                      <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Body Parts</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Bumpers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Hoods</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Grilles</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Door Handles</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Car Covers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tailgates</a></li>
                                                            </ul>
                                                         </li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Suspension</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Steering</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fuel Systems</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Transmission</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Filters</a></li>
                                                      </ul>
                                                   </div>
                                                   <div className="col-3">
                                                      <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Headlights &amp; Lighting</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Headlights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tail Lights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Turn Signals</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Switches &amp; Relays</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Corner Lights</a></li>
                                                            </ul>
                                                         </li>
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Brakes &amp; Suspension</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Brake Discs</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Wheel Hubs</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Suspension</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Ball Joints</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Brake Pad Sets</a></li>
                                                            </ul>
                                                         </li>
                                                      </ul>
                                                   </div>
                                                   <div className="col-3">
                                                      <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Interior Parts</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Floor Mats</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Gauges</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Consoles &amp; Organizers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Mobile Electronics</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Steering Wheels</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Cargo Accessories</a></li>
                                                            </ul>
                                                         </li>
                                                      </ul>
                                                   </div>
                                                   <div className="col-3">
                                                      <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Tools &amp; Garage</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Repair Manuals</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Car Care</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Code Readers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tool Boxes</a></li>
                                                            </ul>
                                                         </li>
                                                      </ul>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </li>
                                       <li className="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
                                          <a href="" className="departments__item-link">
                                             Switches &amp; Relays
                                             <span className="departments__item-arrow">
                                                <svg width="7" height="11">
                                                   <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                                                   C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                                </svg>
                                             </span>
                                          </a>
                                          <div className="departments__item-menu">
                                             <div className="megamenu departments__megamenu departments__megamenu--size--md">
                                                <div className="megamenu__image">
                                                   {/* <img src="images/departments/departments-3.jpg" alt=""> */}
      
                                                </div>
                                                <div className="row">
                                                   <div className="col-4">
                                                      <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Body Parts</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Bumpers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Hoods</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Grilles</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Door Handles</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Car Covers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tailgates</a></li>
                                                            </ul>
                                                         </li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Suspension</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Steering</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fuel Systems</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Transmission</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Filters</a></li>
                                                      </ul>
                                                   </div>
                                                   <div className="col-4">
                                                      <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Headlights &amp; Lighting</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Headlights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tail Lights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Turn Signals</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Switches &amp; Relays</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Corner Lights</a></li>
                                                            </ul>
                                                         </li>
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Brakes &amp; Suspension</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Brake Discs</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Wheel Hubs</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Suspension</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Ball Joints</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Brake Pad Sets</a></li>
                                                            </ul>
                                                         </li>
                                                      </ul>
                                                   </div>
                                                   <div className="col-4">
                                                      <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Interior Parts</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Floor Mats</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Gauges</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Consoles &amp; Organizers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Mobile Electronics</a></li>
                                                            </ul>
                                                         </li>
                                                      </ul>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </li>
                                       <li className="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
                                          <a href="" className="departments__item-link">
                                             Tires &amp; Wheels
                                             <span className="departments__item-arrow">
                                                <svg width="7" height="11">
                                                   <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                                                   C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                                </svg>
                                             </span>
                                          </a>
                                          <div className="departments__item-menu">
                                             <div className="megamenu departments__megamenu departments__megamenu--size--nl">
                                                <div className="megamenu__image">
                                                   {/* <img src="images/departments/departments-4.jpg" alt=""> */}
      
                                                </div>
                                                <div className="row">
                                                   <div className="col-6">
                                                      <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Body Parts</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Bumpers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Hoods</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Grilles</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Door Handles</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Car Covers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tailgates</a></li>
                                                            </ul>
                                                         </li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Suspension</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Steering</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fuel Systems</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Transmission</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Filters</a></li>
                                                      </ul>
                                                   </div>
                                                   <div className="col-6">
                                                      <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Headlights &amp; Lighting</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Headlights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tail Lights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Turn Signals</a></li>
                                                            </ul>
                                                         </li>
                                                      </ul>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </li>
                                       <li className="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
                                          <a href="" className="departments__item-link">
                                             Tools &amp; Garage
                                             <span className="departments__item-arrow">
                                                <svg width="7" height="11">
                                                   <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                                                   C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                                </svg>
                                             </span>
                                          </a>
                                          <div className="departments__item-menu">
                                             <div className="megamenu departments__megamenu departments__megamenu--size--sm">
                                                <div className="row">
                                                   <div className="col-12">
                                                      <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                         <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                            <a className="megamenu-links__item-link" href="">Body Parts</a>
                                                            <ul className="megamenu-links">
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Bumpers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Hoods</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Grilles</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Door Handles</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Car Covers</a></li>
                                                               <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tailgates</a></li>
                                                            </ul>
                                                         </li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Suspension</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Steering</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fuel Systems</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Transmission</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Filters</a></li>
                                                      </ul>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </li>
                                       <li className="departments__item"><a href="" className="departments__item-link">Clutches</a></li>
                                       <li className="departments__item"><a href="" className="departments__item-link">Fuel Systems</a></li>
                                       <li className="departments__item"><a href="" className="departments__item-link">Steering</a></li>
                                       <li className="departments__item"><a href="" className="departments__item-link">Suspension</a></li>
                                       <li className="departments__item"><a href="" className="departments__item-link">Body Parts</a></li>
                                       <li className="departments__item"><a href="" className="departments__item-link">Transmission</a></li>
                                       <li className="departments__item"><a href="" className="departments__item-link">Air Filters</a></li>
                                       <li className="departments__list-padding" role="presentation"></li>
                                    </ul>
                                    <div className="departments__menu-container"></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="header__navbar-menu">
                           <div className="main-menu">
                              <ul className="main-menu__list">
                                 <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                                    <a href="#" className="main-menu__link">
                                       Home
                                       <svg width="7px" height="5px">
                                          <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                       </svg>
                                    </a>
                                    <div className="main-menu__submenu">
                                       <ul className="menu">
                                          <li className="menu__item"><a href="#" className="menu__link">Home One</a></li>
                                          <li className="menu__item"><a href="#" className="menu__link">Home Two</a></li>
                                          <li className="menu__item menu__item--has-submenu">
                                             <a href="#" className="menu__link">
                                                Header Spaceship
                                                <span className="menu__arrow">
                                                   <svg width="6px" height="9px">
                                                      <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                                   </svg>
                                                </span>
                                             </a>
                                             <div className="menu__submenu">
                                                <ul className="menu">
                                                   <li className="menu__item"><a href="#" className="menu__link">Variant One</a></li>
                                                   <li className="menu__item"><a href="#" className="menu__link">Variant Two</a></li>
                                                   <li className="menu__item"><a href="#" className="menu__link">Variant Three</a></li>
                                                </ul>
                                             </div>
                                          </li>
                                          <li className="menu__item menu__item--has-submenu">
                                             <a href="#" className="menu__link">
                                                Header classNameic
                                                <span className="menu__arrow">
                                                   <svg width="6px" height="9px">
                                                      <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                                   </svg>
                                                </span>
                                             </a>
                                             <div className="menu__submenu">
                                                <ul className="menu">
                                                   <li className="menu__item"><a href="#" className="menu__link">Variant One</a></li>
                                                   <li className="menu__item"><a href="#" className="menu__link">Variant Two</a></li>
                                                   <li className="menu__item"><a href="#" className="menu__link">Variant Three</a></li>
                                                   <li className="menu__item"><a href="#" className="menu__link">Variant Four</a></li>
                                                   <li className="menu__item"><a href="#" className="menu__link">Variant Five</a></li>
                                                </ul>
                                             </div>
                                          </li>
                                          <li className="menu__item menu__item--has-submenu">
                                             <a href="#" className="menu__link">
                                                Mobile Header
                                                <span className="menu__arrow">
                                                   <svg width="6px" height="9px">
                                                      <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                                   </svg>
                                                </span>
                                             </a>
                                             <div className="menu__submenu">
                                                <ul className="menu">
                                                   <li className="menu__item"><a href="mobile-header-variant-one.html" className="menu__link">Variant One</a></li>
                                                   <li className="menu__item"><a href="mobile-header-variant-two.html" className="menu__link">Variant Two</a></li>
                                                </ul>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </li>
                                 <li className="main-menu__item main-menu__item--submenu--megamenu main-menu__item--has-submenu">
                                    <a href="index.html" className="main-menu__link">
                                       Megamenu
                                       <svg width="7px" height="5px">
                                          <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                       </svg>
                                    </a>
                                    <div className="main-menu__submenu">
                                       <div className="main-menu__megamenu main-menu__megamenu--size--nl">
                                          <div className="megamenu">
                                             <div className="row">
                                                <div className="col-6">
                                                   <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                      <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                         <a className="megamenu-links__item-link" href="">Headlights &amp; Lighting</a>
                                                         <ul className="megamenu-links">
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Headlights</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tail Lights</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Turn Signals</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Switches &amp; Relays</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Corner Lights</a></li>
                                                         </ul>
                                                      </li>
                                                      <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                         <a className="megamenu-links__item-link" href="">Brakes &amp; Suspension</a>
                                                         <ul className="megamenu-links">
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Brake Discs</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Wheel Hubs</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Suspension</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Ball Joints</a></li>
                                                         </ul>
                                                      </li>
                                                   </ul>
                                                </div>
                                                <div className="col-6">
                                                   <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                      <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                         <a className="megamenu-links__item-link" href="">Interior Parts</a>
                                                         <ul className="megamenu-links">
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Floor Mats</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Gauges</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Consoles &amp; Organizers</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Mobile Electronics</a></li>
                                                         </ul>
                                                      </li>
                                                      <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                         <a className="megamenu-links__item-link" href="">Engine &amp; Drivetrain</a>
                                                         <ul className="megamenu-links">
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Filters</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Oxygen Sensors</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Heating</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Exhaust</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Cranks &amp; Pistons</a></li>
                                                            <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Cargo Accessories</a></li>
                                                         </ul>
                                                      </li>
                                                   </ul>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                                    <a href="shop-grid-4-columns-sidebar.html" className="main-menu__link">
                                       Shop
                                       <svg width="7px" height="5px">
                                          <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                       </svg>
                                    </a>
                                    <div className="main-menu__submenu">
                                       <ul className="menu">
                                          <li className="menu__item menu__item--has-submenu">
                                             <a href="category-4-columns-sidebar.html" className="menu__link">
                                                Category
                                                <span className="menu__arrow">
                                                   <svg width="6px" height="9px">
                                                      <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                                   </svg>
                                                </span>
                                             </a>
                                             <div className="menu__submenu">
                                                <ul className="menu">
                                                   <li className="menu__item"><a href="category-3-columns-sidebar.html" className="menu__link">category 1</a></li>
                                                   <li className="menu__item"><a href="category-4-columns-sidebar.html" className="menu__link">category 2</a></li>
                                                   <li className="menu__item"><a href="category-5-columns-sidebar.html" className="menu__link">category 3</a></li>                                                   
                                                   <li className="menu__item"><a href="category-right-sidebar.html" className="menu__link">Right Sidebar</a></li>
                                                </ul>
                                             </div>
                                          </li>
                                          <li className="menu__item menu__item--has-submenu">
                                             <a href="shop-grid-4-columns-sidebar.html" className="menu__link">
                                                Shop Grid
                                                <span className="menu__arrow">
                                                   <svg width="6px" height="9px">
                                                      <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                                   </svg>
                                                </span>
                                             </a>
                                             <div className="menu__submenu">
                                                <ul className="menu">
                                                   <li className="menu__item"><a href="shop-grid-6-columns-full.html" className="menu__link">shop 1</a></li>
                                                   <li className="menu__item"><a href="shop-grid-5-columns-full.html" className="menu__link">shop 2</a></li>
                                                   <li className="menu__item"><a href="shop-grid-4-columns-full.html" className="menu__link">shop 3</a></li>
                                                   <li className="menu__item"><a href="shop-grid-4-columns-sidebar.html" className="menu__link">shop 4</a></li>
                                                   <li className="menu__item"><a href="shop-grid-3-columns-sidebar.html" className="menu__link">shop 3</a></li>
                                                </ul>
                                             </div>
                                          </li>
                                          <li className="menu__item"><a href="shop-list.html" className="menu__link">Shop List</a></li>
                                          <li className="menu__item"><a href="shop-table.html" className="menu__link">Shop Table</a></li>
                                          <li className="menu__item"><a href="shop-right-sidebar.html" className="menu__link">Shop Right Sidebar</a></li>
                                          <li className="menu__item menu__item--has-submenu">
                                             <a href="product-full.html" className="menu__link">
                                                Product
                                                <span className="menu__arrow">
                                                   <svg width="6px" height="9px">
                                                      <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                                   </svg>
                                                </span>
                                             </a>
                                             <div className="menu__submenu">
                                                <ul className="menu">
                                                   <li className="menu__item"><a href="product-full.html" className="menu__link">Full Width</a></li>
                                                   <li className="menu__item"><a href="product-sidebar.html" className="menu__link">Left Sidebar</a></li>
                                                </ul>
                                             </div>
                                          </li>
                                          <li className="menu__item"><a href="cart.html" className="menu__link">Cart</a></li>
                                          <li className="menu__item"><a href="checkout.html" className="menu__link">Checkout</a></li>
                                          <li className="menu__item"><a href="order-success.html" className="menu__link">Order Success</a></li>
                                          <li className="menu__item"><a href="wishlist.html" className="menu__link">Wishlist</a></li>
                                          <li className="menu__item"><a href="compare.html" className="menu__link">Compare</a></li>
                                          <li className="menu__item"><a href="track-order.html" className="menu__link">Track Order</a></li>
                                       </ul>
                                    </div>
                                 </li>
                                 <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                                    <a href="blog-classic-right-sidebar.html" className="main-menu__link">
                                       Blog
                                       <svg width="7px" height="5px">
                                          <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                       </svg>
                                    </a>
                                    <div className="main-menu__submenu">
                                       <ul className="menu">
                                          <li className="menu__item menu__item--has-submenu">
                                             <a href="blog-classic-right-sidebar.html" className="menu__link">
                                                Blog Classic
                                                <span class="menu__arrow">
                                                   <svg width="6px" height="9px">
                                                      <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                                   </svg>
                                                </span>
                                             </a>
                                             <div className="menu__submenu">
                                                <ul className="menu">
                                                   <li className="menu__item"><a href="blog-classic-left-sidebar.html" className="menu__link">Left Sidebar</a></li>
                                                   <li className="menu__item"><a href="blog-classic-right-sidebar.html" className="menu__link">Right Sidebar</a></li>
                                                </ul>
                                             </div>
                                          </li>
                                          <li className="menu__item menu__item--has-submenu">
                                             <a href="blog-list-right-sidebar.html" className="menu__link">
                                                Blog List
                                                <span className="menu__arrow">
                                                   <svg width="6px" height="9px">
                                                      <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                                   </svg>
                                                </span>
                                             </a>
                                             <div className="menu__submenu">
                                                <ul className="menu">
                                                   <li className="menu__item"><a href="blog-list-left-sidebar.html" className="menu__link">Left Sidebar</a></li>
                                                   <li className="menu__item"><a href="blog-list-right-sidebar.html" className="menu__link">Right Sidebar</a></li>
                                                </ul>
                                             </div>
                                          </li>
                                          <li className="menu__item menu__item--has-submenu">
                                             <a href="blog-grid-right-sidebar.html" className="menu__link">
                                                Blog Grid
                                                <span className="menu__arrow">
                                                   <svg width="6px" height="9px">
                                                      <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                                   </svg>
                                                </span>
                                             </a>
                                             <div className="menu__submenu">
                                                <ul className="menu">
                                                   <li className="menu__item"><a href="blog-grid-left-sidebar.html" className="menu__link">Left Sidebar</a></li>
                                                   <li className="menu__item"><a href="blog-grid-right-sidebar.html" className="menu__link">Right Sidebar</a></li>
                                                </ul>
                                             </div>
                                          </li>
                                          <li className="menu__item menu__item--has-submenu">
                                             <a href="post-full-width.html" className="menu__link">
                                                Post Page
                                                <span className="menu__arrow">
                                                   <svg width="6px" height="9px">
                                                      <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                                   </svg>
                                                </span>
                                             </a>
                                             <div className="menu__submenu">
                                                <ul className="menu">
                                                   <li className="menu__item"><a href="post-full-width.html" className="menu__link">Full Width</a></li>
                                                   <li className="menu__item"><a href="post-left-sidebar.html" className="menu__link">Left Sidebar</a></li>
                                                   <li className="menu__item"><a href="post-right-sidebar.html" className="menu__link">Right Sidebar</a></li>
                                                </ul>
                                             </div>
                                          </li>
                                          <li className="menu__item"><a href="post-without-image.html" className="menu__link">Post Without Image</a></li>
                                       </ul>
                                    </div>
                                 </li>
                                 <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                                    <a href="account-login.html" className="main-menu__link">
                                       Account
                                       <svg width="7px" height="5px">
                                          <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                       </svg>
                                    </a>
                                    <div className="main-menu__submenu">
                                       <ul className="menu">
                                          <li className="menu__item"><a href="account-login.html" className="menu__link">Login &amp; Register</a></li>
                                          <li className="menu__item"><a href="account-dashboard.html" className="menu__link">Dashboard</a></li>
                                          <li className="menu__item"><a href="account-garage.html" className="menu__link">Garage</a></li>
                                          <li className="menu__item"><a href="account-profile.html" className="menu__link">Edit Profile</a></li>
                                          <li className="menu__item"><a href="account-orders.html" className="menu__link">Order History</a></li>
                                          <li className="menu__item"><a href="account-order-details.html" className="menu__link">Order Details</a></li>
                                          <li className="menu__item"><a href="account-addresses.html" className="menu__link">Address Book</a></li>
                                          <li className="menu__item"><a href="account-edit-address.html" className="menu__link">Edit Address</a></li>
                                          <li className="menu__item"><a href="account-password.html" className="menu__link">Change Password</a></li>
                                       </ul>
                                    </div>
                                 </li>
                                 <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                                    <a href="about-us.html" className="main-menu__link">
                                       Pages
                                       <svg width="7px" height="5px">
                                          <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                       </svg>
                                    </a>
                                    <div className="main-menu__submenu">
                                       <ul className="menu">
                                          <li className="menu__item"><a href="about-us.html" className="menu__link">About Us</a></li>
                                          <li className="menu__item"><a href="contact-us-v1.html" className="menu__link">Contact Us</a></li>
                                          <li className="menu__item"><a href="terms.html" className="menu__link">Terms And Conditions</a></li>
                                          <li className="menu__item"><a href="faq.html" className="menu__link">FAQ</a></li>
                                          <li className="menu__item"><a href="components.html" className="menu__link">Components</a></li>
                                          <li className="menu__item"><a href="typography.html" className="menu__link">Typography</a></li>
                                       </ul>
                                    </div>
                                 </li>
                                 <li className="main-menu__item"><a href="" className="main-menu__link" target="_blank">Buy Theme</a></li>
                              </ul>
                           </div>
                        </div>
                        <div className="header__navbar-phone phone">
                           <a href="" className="phone__body">
                              <div className="phone__title">Call Us:</div>
                              <div className="phone__number">089252 97807</div>
                           </a>
                        </div>
                     </div>
                     <div className="header__logo">
                        <a href="index.html" className="logo">
                           <div className="logo__slogan">Auto parts for Cars, trucks and motorcycles</div>
                           <div className="logo__image">
      
                              <img src={logo} style={{ "height": "50px", "width": "150px" }} alt='logo' />
      
                           </div>
                        </a>
                     </div>
                     <div className="header__search">
                        <div className="search">
                           <form action="" className="search__body">
                              <div className="search__shadow"></div>
                              <button className="search__button search__button--start" type="button">
                                 <span className="search__button-icon">
                                    <svg width="20" height="20">
                                       <path d="M6.6,2c2,0,4.8,0,6.8,0c1,0,2.9,0.8,3.6,2.2C17.7,5.7,17.9,7,18.4,7C20,7,20,8,20,8v1h-1v7.5c0,0.8-0.7,1.5-1.5,1.5h-1
                                       c-0.8,0-1.5-0.7-1.5-1.5V16H5v0.5C5,17.3,4.3,18,3.5,18h-1C1.7,18,1,17.3,1,16.5V16V9H0V8c0,0,0.1-1,1.6-1C2.1,7,2.3,5.7,3,4.2
                                       C3.7,2.8,5.6,2,6.6,2z M13.3,4H6.7c-0.8,0-1.4,0-2,0.7c-0.5,0.6-0.8,1.5-1,2C3.6,7.1,3.5,7.9,3.7,8C4.5,8.4,6.1,9,10,9
                                       c4,0,5.4-0.6,6.3-1c0.2-0.1,0.2-0.8,0-1.2c-0.2-0.4-0.5-1.5-1-2C14.7,4,14.1,4,13.3,4z M4,10c-0.4-0.3-1.5-0.5-2,0
                                       c-0.4,0.4-0.4,1.6,0,2c0.5,0.5,4,0.4,4,0C6,11.2,4.5,10.3,4,10z M14,12c0,0.4,3.5,0.5,4,0c0.4-0.4,0.4-1.6,0-2c-0.5-0.5-1.3-0.3-2,0
                                       C15.5,10.2,14,11.3,14,12z"></path>
                                    </svg>
                                 </span>
                                 <span className="search__button-title">Select Vehicle</span>
                              </button>
                              <div style={{display:'flex',flexDirection:'row',backgroundColor:'#EDEDED'}}>
                                 <input style={{border:'none',backgroundColor:'#EDEDED',outline:'none',width:"250px"}} placeholder='Enter Keyword or Part Number' />
                              <button className="search__button search__button--end1" type="submit">                                 
                                 <span className="search__button-icon">                                 
                                    <svg width="20" height="20" fill='#b2b2b2' >
                                       <path d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
                                       c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
                                       c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"></path>
                                    </svg>
                                 </span>
                              </button>
                              </div>
                              
                              
                           </form>
                        </div>
                     </div>
                     <div className="header__indicators">
                        <div className="indicator">
                           <a href="wishlist.html" className="indicator__button">
                              <span className="indicator__icon">
                                 <svg width="32" height="32">
                                    <path d="M23,4c3.9,0,7,3.1,7,7c0,6.3-11.4,15.9-14,16.9C13.4,26.9,2,17.3,2,11c0-3.9,3.1-7,7-7c2.1,0,4.1,1,5.4,2.6l1.6,2l1.6-2
                                    C18.9,5,20.9,4,23,4 M23,2c-2.8,0-5.4,1.3-7,3.4C14.4,3.3,11.8,2,9,2c-5,0-9,4-9,9c0,8,14,19,16,19s16-11,16-19C32,6,28,2,23,2L23,2
                                    z"></path>
                                 </svg>
                                 <span className="indicator__counter">0</span>
                              </span>
                           </a>
                        </div>
                        <div className="indicator indicator--trigger--click">
                           <a href="account-login.html" className="indicator__button">                              
                              <span className="indicator__icon">
                                 <svg width="32" height="32">
                                    <path d="M16,18C9.4,18,4,23.4,4,30H2c0-6.2,4-11.5,9.6-13.3C9.4,15.3,8,12.8,8,10c0-4.4,3.6-8,8-8s8,3.6,8,8c0,2.8-1.5,5.3-3.6,6.7
                                    C26,18.5,30,23.8,30,30h-2C28,23.4,22.6,18,16,18z M22,10c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S22,13.3,22,10z"></path>
                                 </svg>
                              </span>
                              <span className="indicator__title">Hello, Log In</span> <span className="indicator__value">My Account</span>
                           </a>
                           
                        </div>
                        <div className="indicator indicator--trigger--click">
                           <a href="cart.html" className="indicator__button">
                              <span className="indicator__icon">
                                 <svg width="32" height="32">
                                    <circle cx="10.5" cy="27.5" r="2.5"></circle>
                                    <circle cx="23.5" cy="27.5" r="2.5"></circle>
                                    <path d="M26.4,21H11.2C10,21,9,20.2,8.8,19.1L5.4,4.8C5.3,4.3,4.9,4,4.4,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h3.4C5.8,2,7,3,7.3,4.3
                                    l3.4,14.3c0.1,0.2,0.3,0.4,0.5,0.4h15.2c0.2,0,0.4-0.1,0.5-0.4l3.1-10c0.1-0.2,0-0.4-0.1-0.4C29.8,8.1,29.7,8,29.5,8H14
                                    c-0.6,0-1-0.4-1-1s0.4-1,1-1h15.5c0.8,0,1.5,0.4,2,1c0.5,0.6,0.6,1.5,0.4,2.2l-3.1,10C28.5,20.3,27.5,21,26.4,21z"></path>
                                 </svg>
                                 <span className="indicator__counter">7</span>
                              </span>
                              <span className="indicator__title">Shopping Cart</span> <span className="indicator__value">$1468.60</span>
                           </a>
                           
                        </div>
                     </div>
                  </div>
               </header>
        </>
    )
}

export default Header;