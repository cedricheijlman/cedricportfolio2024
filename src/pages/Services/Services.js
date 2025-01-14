import React from "react";
import "./services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="Services">
      <div className="services__hero">
        <h1>Services</h1>
        <p>
          Cedric Heijlman excels in delivering customized digital solutions and
          services specifically crafted to enhance your bottom-line results. We
          are dedicated to improving your business outcomes and maximizing the
          impact on your customers.
        </p>
      </div>

      <div className="services__list">
        <div className="services__listItem">
          <div className="services__listItemLeft">
            <h2>eCommerce</h2>
            <p>
              I specialize in end-to-end eCommerce solutions, offering more than
              just webshop development. I build and optimize complete digital
              ecosystems, ensuring your online store is designed for growth,
              efficiency, and seamless customer experiences.
            </p>
            <button>
              <Link to="/">Learn more</Link>
            </button>
          </div>
          <div className="services__listItemRight">
            <img alt="text" src="./cart.jpg" />
          </div>
        </div>

        <div className="services__listItem">
          <div className="services__listItemLeft">
            <h2>Design & Websites</h2>
            <p>
              I craft visually stunning, user-centric websites that blend design
              and functionality to elevate your brand. From sleek designs to
              seamless user experiences, I ensure your online presence is not
              only beautiful but also optimized for performance and engagement.
            </p>
            <button>
              <Link to="/">Learn more</Link>
            </button>
          </div>
          <div className="services__listItemRight">
            <img alt="text" src="./cart.jpg" />
          </div>
        </div>

        <div className="services__listItem">
          <div className="services__listItemLeft">
            <h2>Digital Marketing</h2>
            <p>
              I provide comprehensive digital marketing solutions tailored to
              elevate your brand and drive engagement. From strategy development
              to execution, I help businesses grow their online presence,
              increase visibility, and connect with their target audience
              effectively.
            </p>
            <button>
              <Link to="/">Learn more</Link>
            </button>
          </div>
          <div className="services__listItemRight">
            <img alt="text" src="./cart.jpg" />
          </div>
        </div>

        <div className="services__listItem">
          <div className="services__listItemLeft">
            <h2>Ai Consulting</h2>
            <p>
              I provide comprehensive digital marketing solutions tailored to
              elevate your brand and drive engagement. From strategy development
              to execution, I help businesses grow their online presence,
              increase visibility, and connect with their target audience
              effectively.
            </p>
            <button>
              <Link to="/">Learn more</Link>
            </button>
          </div>
          <div className="services__listItemRight">
            <img alt="text" src="./cart.jpg" />
          </div>
        </div>
        <div className="services__listItem">
          <div className="services__listItemLeft">
            <h2>Business Automation</h2>
            <p>
              I provide comprehensive digital marketing solutions tailored to
              elevate your brand and drive engagement. From strategy development
              to execution, I help businesses grow their online presence,
              increase visibility, and connect with their target audience
              effectively.
            </p>
            <button>
              <Link to="/">Learn more</Link>
            </button>
          </div>
          <div className="services__listItemRight">
            <img alt="text" src="./cart.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
