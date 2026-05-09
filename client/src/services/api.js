import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-goie.onrender.com/api",
});

export const getSkills = () => API.get("/skills");
export const getProjects = () => API.get("/projects");
export const getContact = () => API.get("/contact");