const page = ({ params }) => {
	const url = params.title;
	return <div>{url}</div>;
};

export default page;
