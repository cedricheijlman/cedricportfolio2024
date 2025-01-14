import React from "react";
import "./home.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { motion } from "motion/react";
import WebIcon from "@mui/icons-material/Web";

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 1, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

const Home = () => {
  return (
    <div className="Home">
      <div className="home__hero">
        <FloatingParticles />
        <h1>👑</h1>
        <p>
          Cedric <span>Tech</span>
        </p>
        <h1>
          The Holy Solution for Websites, eCommerce, and Digital Domination
        </h1>
        <h2>
          My solutions aren't for the average. I create systems that will
          elevate your business and dominate your competition.
        </h2>
        <button>Book a Strategy Call Now →</button>
      </div>
      <div className="home__servicesHero">
        <h2>My Services</h2>
        <div className="home__servicesList">
          <div className="home__servicesCard">
            <ShoppingCartIcon className="icon" />

            <div>
              <h3>eCommerce Coaching</h3>
              <p>
                I deliver eCommerce coaching, optimizing digital ecosystems for
                growth, efficiency, and seamless customer experiences.
              </p>
            </div>
          </div>
          <div className="home__servicesCard">
            <DesignServicesIcon className="icon" />

            <div className="">
              <h3>Design & Websites</h3>
              <p>
                I create custom, visually engaging websites that blend design
                and functionality for an exceptional user experience.
              </p>
            </div>
          </div>

          <div className="home__servicesCard">
            <DesignServicesIcon className="icon" />

            <div className="">
              <h3>Design & Websites</h3>
              <p>
                I create custom, visually engaging websites that blend design
                and functionality for an exceptional user experience.
              </p>
            </div>
          </div>

          <div className="home__servicesCard">
            <DesignServicesIcon className="icon" />

            <div className="">
              <h3>Design & Websites</h3>
              <p>
                I create custom, visually engaging websites that blend design
                and functionality for an exceptional user experience.
              </p>
            </div>
          </div>
          <div className="home__servicesCard">
            <DesignServicesIcon className="icon" />

            <div className="">
              <h3>Design & Websites</h3>
              <p>
                I create custom, visually engaging websites that blend design
                and functionality for an exceptional user experience.
              </p>
            </div>
          </div>
          <div className="home__servicesCard">
            <WebIcon className="icon" />

            <div>
              <h3>Digital Marketing</h3>
              <p>
                I create targeted digital marketing strategies to grow your
                online presence, increase engagement, and drive measurable
                results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="latestWork__hero">
        <h2>Latest Work</h2>
        <div className="latestWorkList">
          <div className="latestWorkList__item">
            <img src="./cart.jpg" />
            <div className="latestWorkList__itemText">
              <h3>Project 1</h3>
              <p>2024</p>
            </div>
          </div>

          <div className="latestWorkList__item">
            <img src="./ui.webp" />
            <div className="latestWorkList__itemText">
              <h3>Project 2</h3>
              <p>2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
