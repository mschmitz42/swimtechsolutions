import Link from 'next/link';

export default function HomeFooter () {
    return (
        <>
          {/* ======= Footer ======= */}
          <footer id="footer">
            <div className="footer-top">
              <div className="container">
                <div className="row  justify-content-between">

                  <div className="col-lg-4 col-md-6">
                    <div className="footer-info">
                      <h3>Swimtech Solutions</h3>
                      <p className="pb-3"><em>Swim with coach Carina Peritore.</em></p>
                      <p>
                          <strong>Email:</strong> <a href="mailto:carina@swimtechsolutions.com">carina@swimtechsolutions.com</a>
                      </p>
                      <div className="social-links mt-3">
                        <Link href="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                        <Link href="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                        <Link href="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                        <Link href="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                        <Link href="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><i className="bx bx-chevron-right"></i> <Link href="#about">About</Link></li>
                      <li><i className="bx bx-chevron-right"></i> <Link href="#services">Services</Link></li>
                      <li><i className="bx bx-chevron-right"></i> <Link href="#">Terms of service</Link></li>
                      <li><i className="bx bx-chevron-right"></i> <Link href="#">Privacy policy</Link></li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

            <div className="container">
              <div className="copyright">
                &copy; Copyright <strong><span>Swimtech Solutions</span></strong> 2024. All Rights Reserved
              </div>

            </div>
          </footer>
          {/* End Footer  */}
        </>
    )
}