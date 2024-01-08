"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main id="main-content" role="main">
      <div className="video-marketing -home" id="video-marketing">
        <div className="video-marketing__content">
          <h2 className="video-marketing__title">
            We make the web better by <span>finely crafting</span> websites &
            tools for content creators.
          </h2>
          <button
            className="video-marketing__button"
            id="video-marketing__button"
            aria-controls="video-marketing__full-video"
            aria-expanded="false"
          >
            <span>watch video</span>
          </button>
          <button
            className="video-marketing__pause__button"
            id="video-marketing__pause__button"
            aria-controls="background__video"
          >
            <span>pause background</span>
          </button>
        </div>
        <div className="video-marketing__background-video">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/home-hero-small-fallback.png /"
            />
            <source
              media="(min-width: 768px)"
              srcSet="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/home-hero-large-fallback.jpg /"
            />

            <img
              decoding="sync"
              loading="eager"
              fetchPriority="high"
              width="1440"
              height="585"
              alt="Video hero image"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_1440,h_585/prod/wp-content/themes/10up-sept2016/assets/img/home-hero-large-fallback.jpg /"
            />
          </picture>
          <video
            id="background__video"
            poster="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/home-hero-large-fallback.jpg /"
            playsInline
            muted
            autoPlay
            loop
          >
            <source
              data-src="https://10up.com/wp-content/themes/10up-sept2016/assets/img/home-bg-video.mp4"
              type="video/mp4"
              src="https://10up.com/wp-content/themes/10up-sept2016/assets/img/home-bg-video.mp4"
            />
          </video>
        </div>
        <div
          className="video-marketing__full-video"
          id="video-marketing__full-video"
          aria-hidden="true"
        >
          <iframe
            data-src="https://player.vimeo.com/video/284765957?color=e9393f&title=0&byline=0&portrait=0&api=1"
            width="640"
            height="360"
            allowFullScreen
            id="video-marketing__full-video-iframe"
            allow="autoplay"
            src="https://player.vimeo.com/video/284765957?color=e9393f&title=0&byline=0&portrait=0&api=1"
            data-ready="true"
            tabIndex={-1}
          ></iframe>
          <button
            className="video-marketing__button-close"
            id="video-marketing__button-close"
            aria-controls="video-marketing__full-video"
            aria-expanded="false"
            tabIndex={-1}
          >
            <div className="close-icon" aria-hidden="true"></div>
            <span className="screen-reader-text">Close</span>
          </button>
        </div>
      </div>
      <div className="featured-grid">
        <div className="featured-grid-content">
          <ul className="primary">
            <motion.li
              whileInView={{ scale: 1 }}
              initial={{ scale: 0 }}
              className="grid-cell"
              data-position="1"
            >
              <a href="https://10up.com/our-work/california-dmv-website-redesign/">
                <Image
                  width="1152"
                  height="648"
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_1152,h_648/prod/uploads/2013/12/DMV-feature-1-1152x648.jpg"
                  className="attachment-showcase-p1 size-showcase-p1"
                  alt="California DMV Website Redesign"
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                />
                <div className="caption">
                  <span className="vcenter">
                    <span className="project-name">
                      California DMV Website Redesign
                    </span>
                    <span className="view">Learn more</span>
                  </span>
                </div>
              </a>
            </motion.li>
            <motion.li
              whileInView={{ scale: 1 }}
              initial={{ scale: 0 }}
              className="grid-cell"
              data-position="2"
            >
              <a href="https://10up.com/our-work/fivethirtyeight/">
                <Image
                  width="576"
                  height="324"
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_576,h_324/prod/uploads/2013/12/fivethirtyeight-feature-576x324.jpg"
                  className="attachment-showcase-p2 size-showcase-p2"
                  alt="FiveThirtyEight"
                  loading="lazy"
                  decoding="async"
                />
                <div className="caption">
                  <span className="vcenter">
                    <span className="project-name">FiveThirtyEight</span>
                    <span className="view">Learn more</span>
                  </span>
                </div>
              </a>
            </motion.li>
            <motion.li
              whileInView={{ scale: 1 }}
              initial={{ scale: 0 }}
              className="grid-cell"
              data-position="3"
            >
              <a href="https://10up.com/blog/2019/fansided250/">
                <Image
                  width="576"
                  height="648"
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_576,h_648/prod/uploads/2013/12/fansided-feature-1-576x648.jpg"
                  className="attachment-showcase-p3 size-showcase-p3"
                  alt="Fansided 250"
                  loading="lazy"
                  decoding="async"
                />
                <div className="caption">
                  <span className="vcenter">
                    <span className="project-name">Fansided 250</span>
                    <span className="view">Learn more</span>
                  </span>
                </div>
              </a>
            </motion.li>
            <motion.li
              whileInView={{ scale: 1 }}
              initial={{ scale: 0 }}
              className="grid-cell"
              data-position="4"
            >
              <a href="https://10up.com/our-work/politico/">
                <Image
                  width="576"
                  height="324"
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_576,h_324/prod/uploads/2013/12/politico-feature-576x324.jpg"
                  className="attachment-showcase-p4 size-showcase-p4"
                  alt="Politico EU"
                  loading="lazy"
                  decoding="async"
                />
                <div className="caption">
                  <span className="vcenter">
                    <span className="project-name">Politico EU</span>
                    <span className="view">Learn more</span>
                  </span>
                </div>
              </a>
            </motion.li>
          </ul>
          <ul className="secondary">
            <motion.li
              whileInView={{ scale: 1 }}
              initial={{ scale: 0 }}
              className="grid-cell"
              data-position="5"
            >
              <a href="https://10up.com/our-work/motortrend/">
                <Image
                  width="768"
                  height="324"
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_768,h_324/prod/uploads/2017/02/motortrend_hero_v2-768x324.png"
                  className="attachment-showcase-p5 size-showcase-p5"
                  alt="Motor Trend"
                  loading="lazy"
                  decoding="async"
                />
                <div className="caption">
                  <span className="vcenter">
                    <span className="project-name">Motor Trend</span>
                    <span className="view">Learn more</span>
                  </span>
                </div>
              </a>
            </motion.li>
            <motion.li
              whileInView={{ scale: 1 }}
              initial={{ scale: 0 }}
              className="grid-cell"
              data-position="6"
            >
              <a href="https://classifaiplugin.com">
                <Image
                  width="768"
                  height="324"
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_768,h_324/prod/uploads/2013/12/classifai-feature-1-768x324.jpg"
                  className="attachment-showcase-p6 size-showcase-p6"
                  alt="ClassifAI"
                  loading="lazy"
                  decoding="async"
                />
                <div className="caption">
                  <span className="vcenter">
                    <span className="project-name">ClassifAI</span>
                    <span className="view">Learn more</span>
                  </span>
                </div>
              </a>
            </motion.li>
            <motion.li
              whileInView={{ scale: 1 }}
              initial={{ scale: 0 }}
              className="grid-cell"
              data-position="7"
            >
              <a href="https://10up.com/blog/2021/10up-helps-launch-a-new-whitehouse-gov/">
                <Image
                  width="768"
                  height="648"
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_768,h_648/prod/uploads/2013/12/white-house-feature-768x648.jpg"
                  className="attachment-showcase-p7 size-showcase-p7"
                  alt="10up helps launch a new WhiteHouse.gov"
                  loading="lazy"
                  decoding="async"
                />
                <div className="caption">
                  <span className="vcenter">
                    <span className="project-name">
                      10up helps launch a new WhiteHouse.gov
                    </span>
                    <span className="view">Learn more</span>
                  </span>
                </div>
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
      <div className="clients js-cta-offset">
        <div className="grid-inner grid-large">
          <h2>We keep excellent company.</h2>

          <div className="grid-inner clients-logos">
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/time.png"
              className="attachment-full size-full wp-post-image"
              alt="Time logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/espn.png"
              className="attachment-full size-full wp-post-image"
              alt="ESPN logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2015/09/google_logo.png"
              className="attachment-full size-full wp-post-image"
              alt="Google logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2016/03/BBC_America.png"
              className="attachment-full size-full wp-post-image"
              alt="BBCAmerica logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/aarp.png"
              className="attachment-full size-full wp-post-image"
              alt="AARP logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/wef.png"
              className="attachment-full size-full wp-post-image"
              alt="World Economic Forum logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/techcrunch-1.png"
              className="attachment-full size-full wp-post-image"
              alt="TechCrunch logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/ted-1.png"
              className="attachment-full size-full wp-post-image"
              alt="TED logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2015/09/microsoft.png"
              className="attachment-full size-full wp-post-image"
              alt="Microsoft logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2016/09/logo-adobe.png"
              className="attachment-full size-full wp-post-image"
              alt="Adobe logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/salesforce.png"
              className="attachment-full size-full wp-post-image"
              alt="Salesforce logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/wired.png"
              className="attachment-full size-full wp-post-image"
              alt="Wired logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2016/03/IFC.png"
              className="attachment-full size-full wp-post-image"
              alt="IFC logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/global-news.png"
              className="attachment-full size-full wp-post-image"
              alt="GlobalNews logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2016/09/logo-motortrend.png"
              className="attachment-full size-full wp-post-image"
              alt="MotorTrend logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/jdrf.png"
              className="attachment-full size-full wp-post-image"
              alt="JDRF logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/variety.png"
              className="attachment-full size-full wp-post-image"
              alt="Variety logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/automattic.png"
              className="attachment-full size-full wp-post-image"
              alt="Automattic logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2016/03/AMC.png"
              className="attachment-full size-full wp-post-image"
              alt="AMC logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/intuit.png"
              className="attachment-full size-full wp-post-image"
              alt="Intuit logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/jquery.png"
              className="attachment-full size-full wp-post-image"
              alt="jQuery logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/thomson-reuters.png"
              className="attachment-full size-full wp-post-image"
              alt="Thomson Reuters logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/peta.png"
              className="attachment-full size-full wp-post-image"
              alt="Peta logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/the-knot.png"
              className="attachment-full size-full wp-post-image"
              alt="Theknot logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/nbc-universal.png"
              className="attachment-full size-full wp-post-image"
              alt="NBCUniversal logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/05/att1.png"
              className="attachment-full size-full wp-post-image"
              alt="ATT logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/trulia.png"
              className="attachment-full size-full wp-post-image"
              alt="Trulia logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/western-digital.png"
              className="attachment-full size-full wp-post-image"
              alt="Western Digital logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2014/03/9to5.png"
              className="attachment-full size-full wp-post-image"
              alt="9to5 logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2016/06/red-LOGO.jpg"
              className="attachment-full size-full wp-post-image"
              alt="RED logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2016/03/Cleveland_clinic_thumb.png"
              className="attachment-full size-full wp-post-image"
              alt="Cleveland Clinic logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
            <Image
              width="300"
              height="140"
              src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_300,h_140/prod/uploads/2016/03/reddit.png"
              className="attachment-full size-full wp-post-image"
              alt="reddit logo"
              decoding="async"
              sizes="(max-width: 300px) 100vw, 300px"
            />
          </div>
          <a
            href="https://10up.com/our-work"
            className="button party-blue aligncenter -large"
          >
            See our work
          </a>
        </div>
      </div>
      <div className="testimonials-wrapper">
        <div className="testimonials" style={{ display: "none" }}>
          <div className="grid-inner">
            <div className="quote">
              “I am continually impressed with 10up and the work they’ve done
              for us. I honestly don’t know that I’ve ever worked with a vendor
              who so consistently delivers on every level.”{" "}
            </div>
            <div className="citation">
              Michael Wann, Director of Communications – Microsoft
            </div>
          </div>
        </div>
        <div className="testimonials" style={{ display: "none" }}>
          <div className="grid-inner">
            <div className="quote">
              All I can say is WOW. I cannot get over the professionalism,
              desire to get the job done at all costs, and customer centric
              focus.{" "}
            </div>
            <div className="citation">
              Michael Landsman, Project Manager at&nbsp;JDRF
            </div>
          </div>
        </div>
        <div className="testimonials" style={{ display: "none" }}>
          <div className="grid-inner">
            <div className="quote">
              I can unequivocally say you are one of the best consulting teams I
              have worked with in 15 years.{" "}
            </div>
            <div className="citation">
              Former Director of Engineering, WIRED
            </div>
          </div>
        </div>
        <div className="testimonials" style={{ display: "none" }}>
          <div className="grid-inner">
            <div className="quote">
              We could not have done the redesign without you, and your
              continued support is critical … I know our team appreciates you.{" "}
            </div>
            <div className="citation">
              Heather Harde, former CEO of&nbsp;TechCrunch
            </div>
          </div>
        </div>
        <div className="testimonials">
          <div className="grid-inner">
            <div className="quote">
              Bravo gang! Tip-top. Super duper. Ding dong!{" "}
            </div>
            <div className="citation">Sales Director, Thomson Reuters</div>
          </div>
        </div>
        <div className="testimonials" style={{ display: "none" }}>
          <div className="grid-inner">
            <div className="quote">
              We came to 10up with a vision …&nbsp;They realized and exceeded
              that vision with speed and agility while contributing invaluable
              insights and recommendations. They’re truly a team of world-class
              WordPress engineers.{" "}
            </div>
            <div className="citation">
              Matt Fulton, Director of Digital Services, MaineToday Media
            </div>
          </div>
        </div>
        <div className="testimonials" style={{ display: "none" }}>
          <div className="grid-inner">
            <div className="quote">
              I couldn’t be happier. I know that you went above and beyond for
              us, and I’m so very grateful to have had your time and expertise.{" "}
            </div>
            <div className="citation">
              Andrew Wilkinson, Social Media Specialist @&nbsp;Trulia
            </div>
          </div>
        </div>
      </div>
      <div className="where-we-are">
        <img
          className="bg-pattern"
          decoding="async"
          loading="lazy"
          width="1440"
          height="900"
          alt="Map background pattern"
          src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_1440,h_900/prod/wp-content/themes/10up-sept2016/assets/img/map-bg.jpg"
        />

        <div className="grid-inner where-we-are-content">
          <h2 className="section-title">Where is 10up?</h2>

          <ul className="map-regions">
            <li className="active">
              <a href="#" data-map-index="0">
                USA
              </a>
            </li>
            <li>
              <a href="#" data-map-index="1">
                Canada
              </a>
            </li>
            <li>
              <a href="#" data-map-index="2">
                Europe
              </a>
            </li>
            <li>
              <a href="#" data-map-index="3">
                India
              </a>
            </li>
          </ul>

          <div id="map-container">
            <div className="map-region active">
              <div className="map-wrapper">
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_1107,h_559/prod/wp-content/themes/10up-sept2016/assets/img/map-us-alaska-clear-min.png"
                  loading="lazy"
                  alt="10up United States map outline"
                  width="1107"
                  height="559"
                  className="map-outline"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "-3.724422442244%", left: "3.795623987034%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "-3.69696969697%", left: "4.573418367347%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "0.042962003454232%", left: "23.15143853531%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "0.75092528090249%", left: "21.58009581085%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "11.269214162349%", left: "60.204620749782%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "12.823618307427%", left: "23.587358326068%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "13.071677632851%", left: "25.409990097756%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "13.857943469786%", left: "87.129556650246%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "14.614658814482%", left: "82.72698495588%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "16.133658330433%", left: "54.224889318812%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "18.509868421053%", left: "62.229443772672%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "19.701879271071%", left: "36.457816091954%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "20.077504317789%", left: "65.871578029643%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "21.652515575044%", left: "80.424524981477%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "23.064669513231%", left: "66.462582543223%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "24.254716981132%", left: "92.555815061964%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "24.622822676555%", left: "90.036244970863%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "25.045379537954%", left: "78.819935170178%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "25.087354409318%", left: "40.091806722689%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "25.215151515152%", left: "90.08362244898%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "25.21921641791%", left: "90.344256120527%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "27.49375%", left: "71.133921815889%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "28.583218716159%", left: "76.798387964601%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "29.85223132969%", left: "21.477092916283%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "33.322316303285%", left: "17.40637955836%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "33.39454845815%", left: "87.303166666667%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "33.568805726003%", left: "69.646813020858%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "34.054249174917%", left: "87.376801988401%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "35.214067944251%", left: "22.563500439754%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "4.5334628670121%", left: "95.601307759372%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "40.833333333333%", left: "62.983305156382%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "45.507425742574%", left: "76.246952224053%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "48.480657237937%", left: "73.851345668629%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "49.375324362575%", left: "72.921754002062%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "53.355387332725%", left: "81.207091071136%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "53.545998349835%", left: "40.085856079404%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "53.913677130045%", left: "32.0342760181%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "54.76018722467%", left: "59.303166666667%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "54.781605922551%", left: "23.699195402299%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "54.98045154185%", left: "58.080944444444%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "55.129997706093%", left: "24.053314317447%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "60.112552966102%", left: "25.162994652406%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "61.256481006987%", left: "23.34207585357%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "61.520220588235%", left: "66.090538033395%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "62.410451197053%", left: "80.618587360595%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "62.504125412541%", left: "78.495786061588%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "62.769473835625%", left: "69.369124388063%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "64.188851913478%", left: "36.898529411765%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "67.124587458746%", left: "79.773234811166%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "67.246495327103%", left: "76.080754716981%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "7.4011958997722%", left: "95.883103448276%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "78.471810933941%", left: "85.078505747126%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "79.317573402418%", left: "84.877680906713%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "8.505829015544%", left: "23.67454228422%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "80.3251953125%", left: "83.361381578947%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "80.451536016949%", left: "54.788663101604%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in the US"
                  style={{ top: "83.39454845815%", left: "87.525388888889%" }}
                />{" "}
              </div>
              <ul className="cities-list">
                <li>Portland</li>
                <li>San Francisco</li>
                <li>LA</li>
                <li>Dallas</li>
                <li>Chicago</li>
                <li>DC</li>
                <li>Boston</li>
                <li>New York</li>
                <li>Atlanta</li>
                <li>Orlando</li>
                <li>Miami</li>
              </ul>{" "}
            </div>
            <div className="map-region">
              <div className="map-wrapper">
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_672,h_554/prod/wp-content/themes/10up-sept2016/assets/img/map-canada-clear-min.png"
                  loading="lazy"
                  alt="10up Canada map outline"
                  width="672"
                  height="554"
                  className="map-outline"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Canada"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Canada"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Canada"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Canada"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Canada"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Canada"
                />{" "}
              </div>
            </div>
            <div className="map-region">
              <div className="map-wrapper">
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_830,h_552/prod/wp-content/themes/10up-sept2016/assets/img/map-europe-clear-min.png"
                  loading="lazy"
                  alt="10up Europe map outline"
                  width="830"
                  height="552"
                  className="map-outline"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in Europe"
                />{" "}
              </div>
              <p className="cities-list">
                <a href="https://10up.com/europe/" className="button naked">
                  <span>Learn more </span>about 10up Europe
                </a>
              </p>
            </div>
            <div className="map-region">
              <div className="map-wrapper">
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_552,h_554/prod/wp-content/themes/10up-sept2016/assets/img/map-india-clear-min.png"
                  loading="lazy"
                  alt="10up India map outline"
                  width="552"
                  height="554"
                  className="map-outline"
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in India"
                  style={{ top: "22.561743384441%", left: "34.931154658877%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in India"
                  style={{ top: "46.395181303114%", left: "12.847722800994%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in India"
                  style={{ top: "52.371614321435%", left: "14.159397680223%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in India"
                  style={{ top: "53.02658045977%", left: "14.019597069597%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in India"
                  style={{ top: "53.055121527778%", left: "16.506359447005%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in India"
                  style={{ top: "55.194970954178%", left: "28.058703322455%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in India"
                  style={{ top: "72.823484182777%", left: "28.902754435107%" }}
                />
                <img
                  src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/map-pin.png"
                  className="map-pin"
                  alt="Map pin representing the 10up presence at this location in India"
                  style={{ top: "73.250730409727%", left: "30.005046284492%" }}
                />
              </div>
            </div>
          </div>
          <p>
            We&apos;re wherever you are, with 10uppers in most major cities—and
            everywhere in between.
          </p>
        </div>
      </div>
      <div className="news">
        <div className="grid-inner no-padding grid-large">
          <h2>
            <a href="https://10up.com/blog">Blog</a>
          </h2>

          <div className="grid-inner-right">
            <div className="news-post">
              <a href="https://10up.com/blog/2023/celebrating-a-season-of-building-together/">
                <h3>
                  <span>Celebrating a Season of Building Together</span>
                </h3>
              </a>

              <p>
                After another year of building a better web – alongside friends
                and partners old and new – we’ll be disconnecting for the
                holidays so that we can enter 2024 refreshed and renewed. 10up
                will be closed for the holidays beginning on Monday, December
                25, and reopening on Tuesday, January 2. With gratitude to the
                clients, friends, partners, and colleagues who […]
              </p>

              <a
                href="https://10up.com/blog/2023/celebrating-a-season-of-building-together/"
                className="read-more"
              >
                Read More
                <span className="screen-reader-text">
                  {" "}
                  on Celebrating a Season of Building Together
                </span>
              </a>
            </div>

            <div className="news-post">
              <a href="https://10up.com/blog/2023/2023-media-makers-meet-10up-feature/">
                <h3>
                  <span>2023 Media Makers Meet 10up&nbsp;Feature</span>
                </h3>
              </a>

              <p>
                10up is a proud sponsor of Media Makers Meet&apos;s November
                2023 report, Innovators in Specialist Media Europe (Consumer
                Edition), which highlights how consumer media publishers across
                Europe are reinventing their business models and diversifying
                revenue streams. As an agency specializing in experiences for
                online content creators, staying on top of the evolving
                landscape is essential. We are honored to sponsor […]
              </p>

              <a
                href="https://10up.com/blog/2023/2023-media-makers-meet-10up-feature/"
                className="read-more"
              >
                Read More
                <span className="screen-reader-text">
                  {" "}
                  on 2023 Media Makers Meet 10up&nbsp;Feature
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-contact showcase">
        <img
          className="bg-pattern"
          decoding="async"
          loading="lazy"
          width="1116"
          height="366"
          alt="Background of 10up team members"
          src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_1116,h_366/prod/wp-content/themes/10up-sept2016/assets/img/tagline-bg.jpg"
        />
        <div className="grid-inner">
          <h2 className="cta-contact-title">Let&apos;s build something great</h2>
          <div className="cta-contact-actions">
            <ul>
              <li>
                <a href="https://10up.com/contact" className="button naked">
                  hire us{" "}
                </a>
              </li>

              <li>
                <a href="https://10up.com/careers" className="button naked">
                  apply{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
