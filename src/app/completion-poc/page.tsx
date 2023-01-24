"use client";
import "draft-js/dist/Draft.css";
import debounce from "lodash.debounce";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDebounce } from "usehooks-ts";
import dynamic from "next/dynamic";
const RichEditorCompletion = dynamic(
  () =>
    import(
      "../../components/create/editor/forms/common/RichEditorCompletion"
    ).then((mod) => mod.RichEditorCompletion),
  { ssr: false }
);

export default function Home() {
  const [text, setText] = useState("");
  const [completion, setCompletion] = useState("");

  return (
    <main className="martian-mono p-5">
      <RichEditorCompletion
        onRequireCompletion={(set) => {
          fetch("/api/complete", {
            method: "POST",
            body: JSON.stringify({
              text,
              context: "professional summary",
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log("open ai response", res);
              set(res.completion);
            });
        }}
        onChange={(v) => {
          setText(v);
        }}
        value={text}
        completion={completion}
      />
    </main>
  );
}
