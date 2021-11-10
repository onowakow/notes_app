import axios from "axios";
// Old url: http://localhost:3001/api/notes
// Current url, not relative: https://calm-brushlands-87037.herokuapp.com/api/notes
const baseUrl = "/api/notes";

const getAll = () => {
  const request = axios.get(baseUrl)
	return request.then(response => response.data)
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
	return request.then(response => response.data)
};

const update = (id, newObject) => {
	const request = axios.put(`${baseUrl}/${id}`, newObject);
	return request.then(response => response.data)
};

const noteService = { getAll, create, update };

export default noteService;
