import Image from "next/image";
import Link from "next/link";

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

function ProjectListing({project} : {project:ProjectProps}) {
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

const projects : ProjectProps[] = [
  {name: "Softbody Tetris Simulation", link:"", yearStart:2024, tools:"C++", description:"A simulation and raytracer"},
  {name: "Horse Hearse", link:"", yearStart:2025, madeWith:"Owen Gallagher, Misha Melynk, Isabelle Cai, David Hu and Colin", tools:"Godot", role:"Gameplay, UI programming", description:"Delivery game"},
  {name: "pooL", link:"", yearStart:2025, madeWith:"Liam Suter, Milosh Miric, ChromeChameleon, sharpenyourforks", role:"Sprites, Animation, UI Art", description:"Pool game"}]


export default function Home() {
  return (
    <main className="flex gap-10 w-full max-w-3xl flex-col items-center justify-between  bg-transparent sm:items-start overflow-scroll px-10">
      <div className="flex w-full flex-col items-stretch gap-4 text-lg text-center text-neutral-700 dark:text-zinc-400">
        <h1 className="text-center h-25 text-5xl  font-normal tracking-tight text-foreground dark:text-secondary-100 pt-5 ">
          Hi, I'm <span className="text-brand-600 font-extrabold text-6xl">Saaz</span>
        </h1>
        <p>
          I'm a developer and recent graduate of Computer Science at the University of waterloo. I enjoy making things that are creative or help people do their creative work better. Usually, you'll find me working on a games or pixel art.
        </p>
        <p>
          I usually work with C++ and Python but my games are made in Godot.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 text-neutral-700 font-normal sm:flex-col">
        <h1 className="text-center text-2xl font-semibold tracking-tight text-foreground dark:text-secondary-100">
          Projects
        </h1>
        <div className="flex flex-col self-center gap-4">
          {projects.map(projectProp => (
            <ProjectListing project={projectProp} key={projectProp.name} />
          ))}
        </div>
      </div>
      
    </main>
  );
}