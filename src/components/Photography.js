import React, { Component } from "react";

class Photography extends Component {
  render() {
    if (this.props.resumePhotography || this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.photography;
      var photographyProjects = this.props.resumePhotography.map(function (
        project
      ) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={project.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="travelfoto">
                <div>
                  <img
                    src={project.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <span className="project-date">{project.date}</span>
                  <br />
                  <p className="project-title-settings mt-3">{project.title}</p>
                  <p>{project.description}</p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="photography">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row mx-auto projects-container">
            <div className="row mx-auto projects-container">
              {photographyProjects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Photography;
