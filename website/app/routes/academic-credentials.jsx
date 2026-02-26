import AcademicCredentials from "../academic-credentials/academic-credentials";

export function meta() {
  return [
    { title: "Klys Academic Credentials" },
    { name: "description", content: "Academic credentials and continued technical learning." },
  ];
}

export default function AcademicCredentialsPage() {
  return <AcademicCredentials />;
}
