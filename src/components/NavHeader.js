import { Outlet, Link } from "react-router-dom";
import logo from '../images/logo.png';
import en from '../language/english.json';

export default function NavHeader() {
    return (
        <>
        <div className="navbar" style={{paddingTop:0}}>
            <div className="bg-renove">
                <span className="float-end">{en.contact.phone}</span>
            </div>
            
            <nav className="content renove-head">
            
                <Link to="/"><img src={logo} id="logo" alt="Renove Wellness Logo" /></Link>

                <div className="navbar-expand renove-top-menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">{en.menu.home}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" aria-current="page">{en.menu.about}</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{en.menu.services}</button>
                            <ul className="dropdown-menu">
                                <li><Link to="/services-consultation" className="dropdown-item">{en.menu.services_consultation}</Link></li>
                                <li><Link to="services-integrative-wellness-and-lifestyle-medicine" className="dropdown-item">Integrative Wellness and Lifestyle Medicine</Link></li>
                                <li className="hidden"><Link to="services-exercise-counseling" className="dropdown-item">Exercise Counseling</Link></li>
                                <li><Link to="services-functional-nutrition-and-supplements" className="dropdown-item">Functional Nutrition & Supplements</Link></li>
                                <li><Link to="services-non-invasive-skin-and-body-treatments" className="dropdown-item">Non-invasive skin & body treatments</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Specialities</button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="specialty-health-and-wellness">Health and Wellness</Link></li>
                                <li><Link className="dropdown-item" to="specialty-womens-health">Woman's Health</Link></li>
                                <li><Link className="dropdown-item" to="specialty-chronic-conditions">Chronic Conditions</Link></li>
                                <li><Link className="dropdown-item" to="specialty-weight-management">Weight Management</Link></li>
                                <li><Link className="dropdown-item" to="specialty-beauty-and-healthy-aging">Beauty & Healthy Aging</Link></li>
                                <li className="hidden"><Link className="dropdown-item" to="specialty-children-and-teens-health">Children & Teens Health</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <Outlet />
        </>
    );
  }
