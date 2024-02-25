export const fetchData = async ({ path, limit }) => {
	try {
		let response;
		limit
			? (response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${path}?limit=${limit}`))
			: (response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${path}`));

		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		const response = {
			error: true,
			message: error.message,
		};
		console.log(response);
		return response;
	}
};
