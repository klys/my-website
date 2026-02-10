import Projects from "../projects/projects";

export function meta() {
  return [
    { title: "Klys Projects" },
    { name: "description", content: "Section of software engineering projects!" },
  ];
}

export default function ProjectPage() {
  return <Projects />;
}
