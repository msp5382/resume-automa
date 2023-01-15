"use client";
import "draft-js/dist/Draft.css";
import { Editor } from "@/components/create/editor/Editor";
import { Preview } from "@/components/create/preview/Preview";
import { ResumeContext } from "@/common/contexts/resumeContext";
import { useResumeData } from "@/common/hooks/useResumeData";

export default function Home() {
  const { state, dispatch } = useResumeData();
  return (
    <ResumeContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <main className="martian-mono">
        <div className="grid lg:grid-cols-2">
          <Editor />
          <Preview />
        </div>
      </main>
    </ResumeContext.Provider>
  );
}
