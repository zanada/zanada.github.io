'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const pages = [{link: "/", name:"About"},{link: "/art", name:"Art"}]

export default function NavBar() {
	const pathname = usePathname();
	return (
		<div className="flex flex-row w-2xl h-20  center items-center justify-evenly ">
			{pages.map(page => (
				<Link
					key={page.name}
					href={page.link}
					className={clsx(
						'font-semibold underline dark:text-zinc-50 text-brand-600',
						{
							'text-neutral-600': pathname === page.link
						}
					)}
				>
            		{page.name}
          		</Link>
			))}
		</div>
	);
}