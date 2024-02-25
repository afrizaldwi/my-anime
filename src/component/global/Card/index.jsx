import { fetchData } from "@/libs/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = async ({ path, limit }) => {
	const response = await fetchData({ path: path, limit: limit });
	return (
		<div className="grid lg:grid-cols-5 gap-4 md:grid-cols-3 grid-cols-2 place-items-center w-full">
			{response.data?.map((anime, index) => (
				<Link
					href={`/anime/${anime.title.split(" ").join("_")}`}
					key={index}
					className="custom-card flex justify-center items-center relative cursor-pointer h-[300px]  transition-all ">
					<Image
						src={anime.images.webp.image_url}
						alt={anime.title}
						height={200}
						width={200}
						priority={true}
						className="rounded bg-center bg-cover bg-no-repeat bg-fixed h-full"
					/>
					<h1 className="absolute bottom-2 px-4 text-center text-white z-10">{anime.title}</h1>
				</Link>
			))}
		</div>
	);
};

export default index;
