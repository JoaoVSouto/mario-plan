import React from 'react';

const ProjectDetails = ({ match }) => {
  const id = match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            sapiente temporibus deserunt. Dolore, fuga quisquam esse non itaque
            id error laudantium corrupti deleniti accusamus accusantium, eos
            iusto quae maxime a!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
