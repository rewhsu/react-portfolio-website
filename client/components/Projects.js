import React from 'react';

// var sampleProjects = [
//   { id: 0,
//     name: 'First Project',
//     img: 'https://pbs.twimg.com/profile_images/856549987697733632/4s096MPz.jpg',
//   },
//   { id: 1,
//     name: 'Second Project',
//     img: 'http://www.packers.com/assets/images/imported/GB/photos/article_images/2015/12-december/151222-packers-pro-bowl-950.jpg',
//   },
//   { 
//     id: 2,
//     name: 'Third Project',
//     img: 'http://www.packers.com/assets/images/imported/GB/photos/article_images/2016/04-april/160414-schedule-release-PR-950.jpg',
//   },
//   { 
//     id: 3,
//     name: 'Fourth Project',
//     img: 'http://www.packers.com/assets/images/imported/GB/photos/article_images/common/150120-helmets-950.jpg',
//   },
//   { 
//     id: 4,
//     name: 'Fifth Project',
//     img: 'http://www.packers.com/assets/images/imported/GB/photos/article_images/2017/01-january/170118-young-players-feature-950.jpg',
//   },
// ]

var sampleProjects = require('../../public/data/sampleProjects.json').projects;

var SingleProject = ({ project }) => (
  <div>
    <h3>{project.name}</h3>
    <h6>Project ID: {project.id}</h6>
    <img src={project.img} />
  </div>
)

var AllProjects = () => (
  <div>
    <h3>Viewing All Projects</h3>
    {sampleProjects.map((project) => (
      <SingleProject project={project} />
    ))}
  </div>
)

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        {this.props.match.params.id ? 
          <SingleProject project={sampleProjects[this.props.match.params.id]} />
          : <AllProjects />}
      </div>
    )
  }
}