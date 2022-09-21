export const logout = () => {
	localStorage.clear();
	window.location.pathname = "/login";
};

//The window object represents an open window in a browser.

//The location object contains information about the current URL.
//The location object is a property of the window object.
//pathname : Sets or returns the path name of a URL
