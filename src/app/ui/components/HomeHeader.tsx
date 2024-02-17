
import Image from 'next/image';
import Link from 'next/link';

export default function HomeHeader () {
    return (
        <>
            {/* Header */}
            <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between position-relative">

              <div className="logo">
                <a href="/" className="logo d-flex align-items-center w-auto">
                  <Image
                    src="/img/logo.png"
                    width={120}
                    height={53}
                    className=""
                    alt="Swimtech Solutions Logo"
                  />
                  <span className="logo-text ms-3">Swimtech Solutions</span>
                </a>
              </div>

              <nav id="navbar" className="navbar">
                <ul>
                  <li><Link className="nav-link" href="#about">About</Link></li>
                  {/* <li><Link className="nav-link scrollto" href="#services">Services</Link></li> */}
                  <li><Link className="nav-link" href="#footer">Contact</Link></li>
                    {/* {% if user.is_authenticated %} */}
                        <li><a className="nav-link" href="/dashboard">Dashboard</a></li>
                    {/* {% else %}
                        <li><a class="nav-link scrollto" href="{% url 'login' %}">Login</a></li>
                    {%  endif %} */}
              </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>

            </div>
          </header> 
          {/* End Header */}
  
        </>
    )
}