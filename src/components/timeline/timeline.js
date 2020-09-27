import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./timeline.css";

function Timeline() {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#00334e", color: "#ee6f57" }}
          date="Sept 2020 - present"
          iconStyle={{ background: "#145374", color: "#fff" }}
          icon={<i className="fas fa-laptop-code icon_timeline"></i>}
        >
          <h3 className="vertical-timeline-element-title">
            GirlScript Vellore
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Web Developement Lead
          </h4>
          <p>
            GirlScript is working to change lives by imparting tech education
            and relevant skills.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2020 - present"
          contentStyle={{ background: "#00334e", color: "#ee6f57" }}
          iconStyle={{ background: "#145374", color: "#ee6f57" }}
          icon={<i className="fas fa-user-friends  icon_timeline"></i>}
        >
          <h3 className="vertical-timeline-element-title">TedX Vit Vellore</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Core Committee member
          </h4>
          <p>
            TEDx is a program of local, self-organized events that bring people
            together to share a TED-like experience.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2020 - June 2020"
          contentStyle={{ background: "#00334e", color: "#ee6f57" }}
          iconStyle={{ background: "#145374", color: "#fff" }}
          icon={<i className="fas fa-code icon_timeline"></i>}
        >
          <h3 className="vertical-timeline-element-title">Learnifii</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software engineering intern
          </h4>
          <p>React js developer working on the front-end from scratch </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2019 - Present"
          contentStyle={{ background: "#00334e", color: "#ee6f57" }}
          iconStyle={{ background: "#145374", color: "#fff" }}
          icon={<i className="fas fa-user-friends  icon_timeline"></i>}
        >
          <h3 className="vertical-timeline-element-title">
            IEEE Computer Society
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Core Committee member
          </h4>
          <p>
            Here at IEEECS, nurture the coders and leaders of tomorrow. We
            empower and support new ideas giving them a platform to shine.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#145374", color: "#fff" }}
          icon={<i className="fas fa-check icon_timeline"></i>}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
