import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {

   const information = ["About Us", "Delivery Information", "Privacy Policy", "Brands", "Contact Us", "Returns", "Site Map"];
   const myaccount = ["Store Location","Order History","Wish List","Newsletter","Specials","Gift Certificates","Affiliate"];
   const socialData = ["facebook","twitter","youtube","instagram","rss"];
   const payImg = ["rupay","paypal","visa"];

   return (
      <>
         <footer className="site__footer">
            <div className="site-footer">
               <div className="decor site-footer__decor decor--type--bottom">
                  <div className="decor__body">
                     <div className="decor__start"></div>
                     <div className="decor__end"></div>
                     <div className="decor__center"></div>
                  </div>
               </div>
               <div className="site-footer__widgets">
                  <div className="container">
                     <div className="row">
                        <div className="col-12 col-xl-4">
                           <div className="site-footer__widget footer-contacts">
                              <h5 className="footer-contacts__title">Contact Us</h5>
                              <div className="footer-contacts__text">Hi, we are always open for cooperation and suggestions, contact us in one of the ways below</div>
                              <address className="footer-contacts__contacts">
                                 <dl>
                                    <dt>Phone Number</dt>
                                    <dd>+1 (800) 060-07-30</dd>
                                 </dl>
                                 <dl>
                                    <dt>Email Address</dt>
                                    <dd>uitoux@example.com</dd>
                                 </dl>
                                 <dl>
                                    <dt>Our Location</dt>
                                    <dd>102, Athipalayam Rd, Ramakrishnapuram, Chinnavedampatti, Coimbatore, Tamil Nadu 641049</dd>
                                 </dl>
                                 <dl>
                                    <dt>Working Hours</dt>
                                    <dd>Mon-Sat 10:00pm - 7:00pm</dd>
                                 </dl>
                              </address>
                           </div>
                        </div>
                        <div className="col-6 col-md-3 col-xl-2">
                           <div className="site-footer__widget footer-links">
                              <h5 className="footer-links__title">Information</h5>
                              <ul className="footer-links__list">
                                 {information && information.map((txt) => (
                                    <li className="footer-links__item"><a href="" className="footer-links__link">{txt}</a></li>
                                 ))}


                              </ul>
                           </div>
                        </div>
                        <div className="col-6 col-md-3 col-xl-2">
                           <div className="site-footer__widget footer-links">
                              <h5 className="footer-links__title">My Account</h5>
                              <ul className="footer-links__list">
                                 {myaccount && myaccount.map((txt)=>(
                                    <li className="footer-links__item"><a href="" className="footer-links__link">{txt}</a></li>
                                 ))}
                                 
                                 
                              </ul>
                           </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                           <div className="site-footer__widget footer-newsletter">
                              <h5 className="footer-newsletter__title">Newsletter</h5>
                              <div className="footer-newsletter__text">Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.</div>
                              <form action="" className="footer-newsletter__form"><label className="sr-only" for="footer-newsletter-address">Email Address</label>
                                 <input placeholder='example@gmail.com' />
                                 <button className="footer-newsletter__form-button" style={{ backgroundColor: "green" }}>Subscribe</button></form>
                              <div className="footer-newsletter__text footer-newsletter__text--social">Follow us on social networks</div>
                              <div className="footer-newsletter__social-links social-links">
                                 <ul className="social-links__list">
                                    {socialData && socialData.map((txt)=>(
                                    <li className={`social-links__item social-links__item--${txt}`}><a href="" target="_self"><i className={`fab fa-${txt}`}></i></a></li>
                                    ))}
                                   
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="site-footer__bottom">
                  <div className="container">
                     <div className="site-footer__bottom-row">
                        <div className="site-footer__copyright">
                           Powered by www://uitouxsolutions.com — Designed by <a href="https://duraidd.github.io/myprofile/" target="_blank">Durai</a>
                        </div>
                        <div className="site-footer__payments" style={{ display: "flex", gap: "20px" }} >
                           {payImg&&payImg.map((txt)=>(
                              <img height={'40px'} width={'40px'} src={require(`../assets/${txt}.png`)} alt="" />
                           ))}                       
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}

export default Footer;