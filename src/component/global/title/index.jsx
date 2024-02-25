import Link from "next/link";

const index = ({ title, content }) => {
	return (
		<div className="py-4 flex items-center justify-between capitalize">
			<h1 className="font-bold">{title}</h1>
			<Link href={`/${title}`} className="link link-hover text-info">
				{content}
			</Link>
		</div>
	);
};

export default index;
