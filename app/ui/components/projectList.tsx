'use client'

import ExportedImage from 'next-image-export-optimizer';
import projectData from '../../data/project_list.json';
import clsx from 'clsx';
const projects : ProjectProps[] = projectData

import rectifier_thumb from '../../../public/projects/thumbnail_rectifier.png';
import { useState } from 'react';

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

  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

	return (
    <div className='flex flex-col sm:flex-row items-start gap-8'> 
      <ExportedImage className={clsx('w-3xs',
        {
          '[image-rendering:pixelated]': isLoaded === false,
          '[image-rendering:auto]': isLoaded === true,
        }
      )}  //w-50 pl-6 pt-6
        //placeholder='blur'
        src="/projects/thumbnail_rectifier.png"
        width={1920}
        height={1183}
        alt="Game Thumbnail"
        sizes="20vw"
        onLoad={handleImageLoad}
      />
      <div>
        <h2 className="font-semibold">
          <a href={project.link} className='text-brand-600'>{project.name}</a> 
          {dateLine}<span className=' font-normal'>{roleline}</span>
        </h2>
        {project.tools && <p className=" text-neutral-600"> Tools: {project.tools} </p>}
        {project.madeWith && <p className="italic text-neutral-600"> Made with {project.madeWith} </p>}
        <p >{project.description}</p>
        <p className=' italic text-brand-600'>
          {project.additionalLinks && project.additionalLinks.map(({uri, text}) => (
            <a key={text} href={uri}>{text}</a>
          ))}
        </p>
      </div>
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
