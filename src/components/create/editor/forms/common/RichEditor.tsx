import {
  Editor,
  convertFromRaw,
  convertToRaw,
  EditorState,
  RichUtils,
} from "draft-js";
import { draftToMarkdown, markdownToDraft } from "markdown-draft-js";
import { useEffect, useState } from "react";
interface IRichTextProps {
  value?: string;
  onChange?: (v: string) => void;
}
export const RichEditor = ({ onChange, value }: IRichTextProps) => {
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    console.log(command, newState);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const richEdit = (command: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, command));
  };

  useEffect(() => {
    const isEmpty =
      convertToRaw(editorState.getCurrentContent()).blocks[0].text.length == 0;
    if (isEmpty && value) {
      const contentState = convertFromRaw(markdownToDraft(value));
      setEditorState(
        EditorState.moveFocusToEnd(EditorState.createWithContent(contentState))
      );
    }
  }, [value, editorState]);

  return (
    <div>
      <div className="flex bg-gray-100 text-xs border-2 border-gray-800">
        <button
          className="p-1 font-bold border-gray-800 border-r-2 hover:bg-slate-300"
          onClick={() => richEdit("BOLD")}
        >
          Bold
        </button>
        <button
          className="p-1 italic border-gray-800 border-r-2  hover:bg-slate-300"
          onClick={() => richEdit("ITALIC")}
        >
          Italic
        </button>
      </div>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={(e) => {
          const content = editorState.getCurrentContent();
          const rawObject = convertToRaw(content);
          const markdownString = draftToMarkdown(rawObject);
          if (onChange) onChange(markdownString);
          setEditorState(e);
        }}
      />
    </div>
  );
};
