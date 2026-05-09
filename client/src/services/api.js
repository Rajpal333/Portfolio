import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getSkills = () => API.get("/skills");
export const getProjects = () => API.get("/projects");
export const getContact = () => API.get("/contact");