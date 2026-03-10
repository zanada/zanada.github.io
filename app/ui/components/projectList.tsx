import projectData from '../../data/project_list.json';

type ProjectProps = {
  name: string;
  link?: string;
  yearStart: number;
  yearEnd?: number;
  madeWith?: string;
  tools?: string;
  role?: string;
  description: string;
}

function ProjectEntry({project} : {project:ProjectProps}) {
  let toolLine : string;
  let dateLine : string;

  if (project.yearEnd !== undefined)
    dateLine = " (" + project.yearStart + " - " + project.yearEnd + ")";
  else 
    dateLine = " (" + project.yearStart + ")";
    
  if (project.tools !== undefined) toolLine = " - " + project.tools; else toolLine = "";

	return (
    <div>
      <h2 className="font-semibold">{project.name}{dateLine}{toolLine}</h2>
      {project.madeWith && <p className="italic pl-4 "> Made with {project.madeWith} </p>}
      <p className="pl-4">{project.description}</p>
    </div>
	);
}

export default function ProjectList() {
	return (
		<div className="flex flex-col w-full self-center gap-4">
          {projects.map(projectProp => (
            <ProjectEntry project={projectProp} key={projectProp.name} />
          ))}
        </div>
	);
}
const projects : ProjectProps[] = projectData