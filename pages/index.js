import React from "react";
import Helmet from "react-helmet";
import { config } from "config";
import ParallaxShapes from "../components/ParallaxShapes";
import Email from "../components/Email";
import SocialIcons from "../components/SocialIcons";

// Uses CSS Modules
import s from "./index.module.css";
import g from "../utils/grid.module.css";
export default class Index extends React.Component {
  render() {
    return (
      <ParallaxShapes>
        <Helmet
          title={config.siteTitle}
          meta={[
            {
              name: "description",
              content:
                "Danny Denenberg is a student, musician, singer, actor, and software developer from Omaha, Nebraska."
            },
            {
              name: "keywords",
              content: "software, developer, singer, actor, musician, engineer"
            }
          ]}
        />

        <section className={`${s.topSection} ${g.maxWidth}`}>
          <h1 className={`${s.homename} ${g.g6s}`}>
            <span className={`${s.given}`}>Danny</span>
            <span className={`${s.surname} ${g.noMarginTop}`}>Denenberg</span>
          </h1>

          <div className={`${g.marginTopLarge}`}>
            <h2 className={`${g.g9m} ${g.g7l}`}>{config.tagline}</h2>

            <div className={`${g.spaceBetween} ${g.flexEnd} ${g.flexWrap}`}>
              <Email />
              <SocialIcons className={`${g.marginTopSmall}`} />
            </div>
          </div>
        </section>

        {/* <Footer className={`${g.maxWidth}`} /> */}
      </ParallaxShapes>
    );
  }
}
