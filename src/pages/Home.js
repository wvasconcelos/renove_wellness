import thumbHealthAndWellness     from '../images/thumb/thumb-health-and-wellness.jpg';
import thumbWomensHealth          from '../images/thumb/thumb-womens-health.jpg';
import thumbChronicConditions     from '../images/thumb/thumb-chronic-conditions.jpg';
import thumbWeightManagement      from "../images/thumb/thumb-weight-management.jpg";
import thumbBeautyAndHealthyAging from "../images/thumb/thumb-beauty-and-healthy-aging.jpg";
import thumbSkinBodyTreatment     from "../images/thumb/thumb-non-invasive-skin-and-body-treatments.jpg";

export default function HomePage() {
    return (
      <>
        <div className="row content">
        
            <div className="col-md-4">
              <div id="home-photo"></div>
            </div>
            <div className="col-md-8">
              <p>RENOVE INTEGRATIVE WELLNESS AND BEAUTY</p>
              <h1 className="welcome">Welcome to Renove!</h1>
              <p className="lead text-body-secondary">We are thrilled to have you here! We believe that you can experience complete wellness by adopting a holistic approach to life. That's what Renove stands for - RENEWAL! We will work closely with you to understand your unique needs and design a personalized wellness plan to help you achieve balance and harmony in all aspects of your life, including your body, mind, heart, and spirit. We will partner with you throughout your health journey to create and establish a customized wellness plan that caters to your specific needs.</p>
            </div>
            
            <div className="album my-3 py-3 bg-body-tertiary">
              <div className="container">
                <h1 className="home-titles">Specialties</h1>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  <a href='/specialty-health-and-wellness.html' className="col home-thumb">
                    <div className="card shadow-sm">
                    <img src={thumbHealthAndWellness} alt="Health and Wellness" />
                    <div className="card-body">
                      <h5 className="card-title">Health and Wellness</h5>
                      <p className="card-text">Elaborate an integrative health plan that will lead you to optimal health.</p>
                    </div>
                    </div>
                  </a>
                  
                  <a href='/specialty-womens-health.html' className="col home-thumb">
                    <div className="card shadow-sm">
                    <img src={thumbWomensHealth} alt="Woman's Health" />
                    <div className="card-body">
                      <h5 className="card-title">Women's Health</h5>
                      <p className="card-text">Women support covering the whole spectrum of their healthcare needs.</p>
                    </div>
                    </div>
                  </a>
                  
                  <a href="/specialty-chronic-conditions.html" className="col home-thumb">
                    <div className="card shadow-sm">
                    <img src={thumbChronicConditions} alt="Chronic Conditions" />
                    <div className="card-body">
                      <h5 className="card-title">Chronic Conditions</h5>
                      <p className="card-text">Help patients with chronic and metabolic conditions and their family members.</p>
                    </div>
                    </div>
                  </a>
                  
                  <a href='/specialty-weight-management.html' className="col home-thumb">
                    <div className="card shadow-sm">
                    <img src={thumbWeightManagement} alt="Weight Management" />
                    <div className="card-body">
                      <h5 className="card-title">Weight Management</h5>
                      <p className="card-text">Uncover the best strategies in nutrition and exercise plan to manage your weight.</p>
                    </div>
                    </div>
                  </a>
                  
                  <a href='/specialty-beauty-and-healthy-aging.html' className="col home-thumb">
                    <div className="card shadow-sm">
                    <img src={thumbBeautyAndHealthyAging} alt="Beauty &amp; Healty Aging" />
                    <div className="card-body">
                      <h5 className="card-title">Beauty &amp; Healty Aging</h5>
                      <p className="card-text">Treatments to promote health and longevity, aging control, and beauty.</p>
                    </div>
                    </div>
                  </a>
                  
                  <a href='/services-non-invasive-skin-and-body-treatments.html' className="col home-thumb">
                    <div className="card shadow-sm">
                    <img src={thumbSkinBodyTreatment} alt="Non-Invasive Skin and Body Treatments" />
                    <div className="card-body">
                      <h5 className="card-title">Non-Invasive Skin/Body Treatments</h5>
                      <p className="card-text">Skin tightening procedures that restores and maintain your natural collagen production.</p>
                    </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

      </div>
      </>
    );
  }
  