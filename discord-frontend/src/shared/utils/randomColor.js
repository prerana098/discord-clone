const randomColor = () => {
    const color =  (Math.floor(Math.random() * 2 ** 24)).toString(16).padStart(0, 6);
    const randomColor = '#' + color;
	return randomColor;
};

export default randomColor;
