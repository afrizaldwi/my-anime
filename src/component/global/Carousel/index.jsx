"use client";

import { fetchData } from "@/libs/api";
import Image from "next/image";
import React from "react";
import { register } from "swiper/element/bundle";

register();
const index = async () => {
	const response = await fetchData({ path: "top/anime", limit: 10 });
	console.log(response);

	return (
		<>
			<swiper-container
				navigation="true"
				loop="true"
				autoplay="true"
				pagination="true"
				effect="coverflow"
				centered-slides="true"
				slides-per-view="auto"
				coverflow-effect-rotate="50"
				coverflow-effect-stretch="0"
				coverflow-effect-depth="100"
				coverflow-effect-modifier="1"
				coverflow-effect-slide-shadows="true">
				{response.data?.map((anime, index) => (
					<swiper-slide key={index}>
						<Image
							src={anime.images.webp.image_url}
							alt={anime.title}
							height={300}
							width={300}
							priority={true}
							className="m-auto"
						/>
					</swiper-slide>
				))}
			</swiper-container>
		</>
	);
};

export default index;
