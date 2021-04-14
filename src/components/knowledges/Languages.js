import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 0.6 },
      { id: 2, value: "CSS3", xp: 1.2 },
      { id: 3, value: "PHP", xp: 0.3 },
      
    ],

    frameworks: [
      { id: 1, value: "React", xp: 0.4 },
      { id: 2, value: "SASS", xp: 1.3 },
      { id: 3, value: "Bootstrap", xp: 1.3 },
      { id: 4, value: "VueJS", xp: 0.4 },
    ],

    cms: [
        {id: 1, value: "Wordpress", xp:0.3},
        {id: 2, value: "Woo-Commerce", xp: 0.3},
    ],
  };

  render() {
    let {languages,
      frameworks, cms} = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar 
            languages={frameworks}
            title="frameworks & bibliothèques" 
            className="frameworksDisplay"
        />
        <ProgressBar 
            languages={cms}
            title="content management system" 
            className="frameworksDisplay"
        />
      </div>
    );
  }
}
