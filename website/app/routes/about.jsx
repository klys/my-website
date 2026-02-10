import About from "../about/about";

export function meta() {
  return [
    { title: "Klys Developer Website" },
    { name: "description", content: "Klys Developer Website, needing a professional Software Engineer? You have found it!" },
  ];
}

export default function AboutPage() {
  return <About />
}
