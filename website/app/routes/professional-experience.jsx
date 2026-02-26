import ProfessionalExperience from "../professional-experience/professional-experience";

export function meta() {
  return [
    { title: "Klys Professional Experience" },
    { name: "description", content: "Professional experience timeline and highlights." },
  ];
}

export default function ProfessionalExperiencePage() {
  return <ProfessionalExperience />;
}
