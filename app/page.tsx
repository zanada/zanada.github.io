import ExportedImage from "next-image-export-optimizer/legacy/ExportedImage";
import Link from "next/link";
import ProjectList from "./ui/components/projectList";

import githubLogo from "../public/GitHub_Invertocat_Black.svg";
import itchLogo from "../public/itchio-textless-black.svg";

export default function Home() {
  return (
    <main className="flex gap-10 w-full max-w-4xl flex-col items-center justify-between  bg-transparent sm:items-start px-10 pb-5">
      <div className="flex max-w-xl flex-col self-center gap-4 text-lg text-center text-neutral-700 dark:text-zinc-400">
        <h1 className="text-center  text-5xl  font-normal tracking-tight text-foreground dark:text-secondary-100 pt-5 ">
          Hi, I'm <span className="text-brand-600 font-extrabold text-6xl">Saaz</span>
        </h1>
        <p>
          I'm a developer and recent graduate of Computer Science at the University of Waterloo. I enjoy making things that are creative or help people do their creative work better. Usually, you'll find me working on a games or pixel art.
        </p>
        <p>
          I usually work with C++ and Python but my games are made in Godot.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 text-neutral-700 font-normal sm:flex-col">
        <h1 className="text-center text-2xl font-semibold tracking-tight text-foreground dark:text-secondary-100">
          Projects
        </h1>
        <ProjectList />
      </div>
      <div className="w-full flex flex-col gap-4 text-neutral-700 font-normal sm:flex-col">
        <h1 className="text-center text-2xl font-semibold tracking-tight text-foreground dark:text-secondary-100">
          Links
        </h1>
        <div className="flex flex-row w-full justify-center gap-8"> 
          <a 
            href="https://github.com/zanada"
            className="flex flex-row  gap-1 items-center"> 
            <ExportedImage
              width={20}
              height={20}
              src={githubLogo}
              alt="Github Logo"
            />
            <p className="text-center underline">GitHub</p>
          </a>
          <a 
            href="https://zanada.itch.io/"
            className="flex flex-row  gap-1 items-center"> 
            <ExportedImage
              width={20}
              height={20}
              src={itchLogo}
              alt="Itch.io Logo"
            />
            <p className="text-center  underline">Itch.io</p>
          </a>
        </div>
      </div>
      
    </main>
  );
}