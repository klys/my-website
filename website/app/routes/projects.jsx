import Projects from "../projects/projects";

export function meta() {
  return [
    { title: "Klys's Projects" },
    { name: "description", content: "Junior Jimenez's projects!" },
  ];
}

export default function ProjectPage() {
  return <Projects />;
}
