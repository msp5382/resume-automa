"use client";

import { Template } from "@/components/template";

export default function Home() {
  const templates = [
    {
      title: "Resume Automa",
      image: "/demo.png",
      slug: "resume-automa",
    },
    {
      title: "Resume Automa",
      image: "/demo.png",
      slug: "resume-automa",
    },
    {
      title: "Resume Automa",
      image: "/demo.png",
      slug: "resume-automa",
    },
    {
      title: "Resume Automa",
      image: "/demo.png",
      slug: "resume-automa",
    },
    {
      title: "Resume Automa",
      image: "/demo.png",
      slug: "resume-automa",
    },
  ];
  return (
    <main className="tinos">
      <div className="h-[30vh] bg-slate-900 flex">
        <div className="m-auto text-white text-center">
          <h1 className="text-6xl">Resume Automa</h1>
          <small className="martian-mono font-thin text-base h-fit">
            free resume maker
          </small>
        </div>
      </div>
      <div className="grid gap-3 py-5 grid-cols-3 container mx-auto">
        {templates.map((template) => (
          <Template key={template.slug} {...template} />
        ))}
      </div>
      <footer className="bg-slate-900 text-center py-12 martian-mono text-xs font-thin">
        <div className="text-white">made with ❤️ by msp5382</div>
        <div className="text-white">inspired by resume.io</div>
      </footer>
    </main>
  );
}
