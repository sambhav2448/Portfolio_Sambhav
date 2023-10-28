import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './timeline.css';

function Timeline() {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#00334e', color: '#ee6f57' }}
          date='May 2023 - Aug 2023'
          iconStyle={{ background: '#145374', color: '#fff' }}
          icon={<i className='fas fa-laptop-code icon_timeline'></i>}
        >
          <h3 className='vertical-timeline-element-title'>
           Tesla Inc.
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Full Stack Software Engineering Inern
          </h4>
          <p>
            To accelerate the world's transition to sustainable energy
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Oct 2021 - March 2022'
          contentStyle={{ background: '#00334e', color: '#ee6f57' }}
          iconStyle={{ background: '#145374', color: '#ee6f57' }}
          icon={<i className='fas fa-user-friends  icon_timeline'></i>}
        >
          <h3 className='vertical-timeline-element-title'>Samsung R&D</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Research Intern
          </h4>
          <p>
          Samsung R&D Institute India-Bangalore (SRI-B) is the largest R&D Center outside of South Korea and a key innovation hub in the Samsung group
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='April 2020 - June 2020'
          contentStyle={{ background: '#00334e', color: '#ee6f57' }}
          iconStyle={{ background: '#145374', color: '#fff' }}
          icon={<i className='fas fa-code icon_timeline'></i>}
        >
          <h3 className='vertical-timeline-element-title'>Learnifii</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Software Engineering Intern
          </h4>
          <p>React js developer working on the front-end from scratch </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Nov 2020 - Dec 2020'
          contentStyle={{ background: '#00334e', color: '#ee6f57' }}
          iconStyle={{ background: '#145374', color: '#fff' }}
          icon={<i className='fas fa-code icon_timeline'></i>}
        >
          <h3 className='vertical-timeline-element-title'>MyWays</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Android App Developer Intern
          </h4>
          <p>Developed the Myways mobile application </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Nov 2019 - Jan 2021'
          contentStyle={{ background: '#00334e', color: '#ee6f57' }}
          iconStyle={{ background: '#145374', color: '#fff' }}
          icon={<i className='fas fa-user-friends  icon_timeline'></i>}
        >
          <h3 className='vertical-timeline-element-title'>
            IEEE Computer Society
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Core Committee member
          </h4>
          <p>
            Here at IEEECS, nurture the coders and leaders of tomorrow. We
            empower and support new ideas giving them a platform to shine.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: '#145374', color: '#fff' }}
          icon={<i className='fas fa-check icon_timeline'></i>}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
