import Link from "next/link";

const pages = [{link: "./", name:"About"},{link: "./art", name:"Art"}]

export default function NavBar() {
	return (
		<div className="flex flex-row w-2xl h-20  center items-center justify-evenly ">
			{pages.map(page => (
				<Link
					key={page.name}
					href={page.link}
					className="font-semibold underline text-foreground dark:text-zinc-50"
					>
            		{page.name}
          		</Link>
			))}
		</div>
	);
}