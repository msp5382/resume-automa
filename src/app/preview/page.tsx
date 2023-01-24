"use client";
import "draft-js/dist/Draft.css";
import { Editor } from "@/components/create/editor/Editor";
import { Template } from "@/components/template";
import { useTemplate } from "@/components/create/preview/templates/template";
import { ComponentType } from "react";
import { TemplateType } from "@/components/create/preview/Preview";
import { initialState } from "@/common/hooks/initialState";
export default function Preview() {
  const state = initialState;
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
