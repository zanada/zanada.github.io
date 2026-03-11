import projectData from '../../data/project_list.json';
const projects : ProjectProps[] = projectData

/*
Consider if you want to change to Date types for more formatting options
const clients: Client[] = clients_raw.map((client) : Client => {
    return {...client, dob: new Date(client.dob) }
});
*/

type ProjectProps = {
  name: string;
  link?: string;
  dateStart: {month:string, year:number};
  dateEnd?: {month:string, year:number};
  madeWith?: string;
  tools?: string;
  role?: string;
  description: string;
  additionalLinks?: {uri:string, text:string}[];
}

function ProjectEntry({project} : {project:ProjectProps}) {
  let roleline : string = "";
  let toolLine : string = "";
  let dateLine : string;

  if (project.dateEnd !== undefined)
    dateLine = ` (${project.dateStart.month.slice(0,3)} ${project.dateStart.year} - ${project.dateEnd.month.slice(0,3)} ${project.dateEnd.year})`;
  else 
    dateLine = ` (${project.dateStart.month.slice(0,3)} ${project.dateStart.year})`;
    
  if (project.tools !== undefined) toolLine = " - " + project.tools;

  if (project.role !== undefined) roleline = " - " + project.role;

	return (
    <div>
      <h2 className="font-semibold">
        <a href={project.link} className='text-brand-600'>{project.name}</a> 
        {dateLine}<span className=' font-normal'>{roleline}</span>
      </h2>
      {project.tools && <p className="pl-4 text-neutral-600"> Tools: {project.tools} </p>}
      {project.madeWith && <p className="italic pl-4 text-neutral-600"> Made with {project.madeWith} </p>}
      <p className="pl-4">{project.description}</p>
      <p className='pl-4 italic text-brand-600'>
        {project.additionalLinks && project.additionalLinks.map(({uri, text}) => (
          <a key={text} href={uri}>{text}</a>
        ))}
      </p>
    </div>
	);
}

export default function ProjectList() {
	return (
		<div className="flex flex-col w-full self-center gap-4">
      {projects.sort((a:ProjectProps, b:ProjectProps) => {
        const dateA = new Date(`01 ${a.dateStart.month} ${a.dateStart.year}`);
        const dateB = new Date(`01 ${b.dateStart.month} ${b.dateStart.year}`);
        return dateB.getTime() - dateA.getTime();
      }).map(projectProp => (
        <ProjectEntry project={projectProp} key={projectProp.name} />
      ))}
    </div>
	);
}
