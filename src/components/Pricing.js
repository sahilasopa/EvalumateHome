import React from "react";

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>Start Your Journey Today</h2>
          <p className="pricing-subtitle">
            Join thousands of educators and institutions already transforming
            their teaching experience. Create your free account and explore all
            features.
          </p>
        </div>

        <div className="pricing-cards">
          {/* Teachers Plan */}
          <div className="pricing-card">
            <div className="card-icon">🎓</div>
            <h3>For Teachers</h3>
            <p className="plan-subtitle">Perfect for individual educators</p>
            <div className="price">Free</div>
            <div className="price-period">to start</div>
            <ul>
              <li>Create unlimited worksheets</li>
              <li>Automated corrections & feedback</li>
              <li>Student progress tracking</li>
              <li>Evalumate LMS access</li>
              <li>Community support & resources</li>
            </ul>
            <a href="#" className="btn-primary">
              Create Free Account
            </a>
          </div>

          {/* Tuition Business Plans */}
          <div className="pricing-card featured">
            <div className="card-icon">🏫</div>
            <h3>Tuition Business</h3>
            <p className="plan-subtitle">Scale your educational business</p>

            {/* White Labelling Plan */}
            <div className="sub-plan">
              <h4>White Label Solution</h4>
              <ul>
                <li>Your brand, your platform</li>
                <li>Custom domain & branding</li>
                <li>Full feature access</li>
                <li>Dedicated onboarding</li>
                <li>Business analytics dashboard</li>
              </ul>
            </div>

            {/* Evalumate Powered Plan */}
            <div className="sub-plan">
              <h4>Using Evalumate </h4>
              <ul>
                <li>Powered by Evalumate</li>
                <li>Co-branded experience</li>
                <li>All premium features</li>
                <li>Marketing support</li>
                <li>Revenue sharing program</li>
              </ul>
            </div>

            <a href="#" className="btn-primary">
              Start Business Trial
            </a>
          </div>

          {/* Schools Plan */}
          <div className="pricing-card">
            <div className="card-icon">🏛️</div>
            <h3>For Schools</h3>
            <p className="plan-subtitle">
              Enterprise solutions for institutions
            </p>
            <div className="price-period">demo available</div>
            <ul>
              <li>Unlimited students & teachers</li>
              <li>Custom curriculum integration</li>
              <li>Advanced analytics & reporting</li>
              <li>Full administrative control</li>
              <li>Professional implementation</li>
              <li>24/7 dedicated support team</li>
            </ul>
            <a href="#" className="btn-primary">
              Request Demo
            </a>
          </div>
        </div>

        <div className="pricing-footer">
          <div className="trust-indicators">
            <span>No credit card required</span>
            <span>Full access during trial</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
