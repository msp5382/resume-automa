"use client";
import "draft-js/dist/Draft.css";
import { Editor } from "@/components/create/editor/Editor";
import { Template } from "@/components/template";
import { useTemplate } from "@/components/create/preview/templates/template";
import { ComponentType } from "react";
import { TemplateType } from "@/components/create/preview/Preview";
export default function Preview() {
  const state = JSON.parse(
    '{"font":"Poppins","color":"#30064d","title_map":{"personal_profile":"Personal Profile","professional_summary":"Professional Summary","employment_history":"Employment History","education":"Education","skill":"Skills"},"personal_profile":{"title":"Frontend Developer","firstname":"Patcharapol","lastname":"Sankaew","email":"meen.sankaew@gmail.com","phone":"0802947701","country":"Thailand","city":"Bangkok","address":"301/3 Ladphrao35/1"},"professional_summary":{"summary":"Test 1234"},"employment_history":[{"job_title":"","employer":"","start":"","end":"","city":"","description":"","index":0,"_key":0}],"education":[{"school":"","degree":"","start":"","end":"","city":"","description":"","index":0,"_key":0}],"skill":[{"skill":"","level":"","index":0,"_key":0}]}'
  );
  const Template = useTemplate("cool-kids") as ComponentType<TemplateType>;
  const WIDTH = 800;
  return (
    <div className="bg-gray-400 overflow-scroll h-screen flex justify-center">
      <Template
        state={state}
        style={{
          width: WIDTH,
          height: WIDTH * 1.414,
        }}
        _ref={null}
      />
    </div>
  );
}
