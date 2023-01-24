import {
  Editor,
  convertFromRaw,
  convertToRaw,
  EditorState,
  RichUtils,
} from "draft-js";
import { draftToMarkdown, markdownToDraft } from "markdown-draft-js";
import { useEffect, useState } from "react";
import { SiOpenai } from "react-icons/si";

interface IRichTextProps {
  value?: string;
  onChange?: (v: string) => void;
  completion?: string;
  onRequireCompletion?: (setValue: (v: string) => void) => void;
}
export const RichEditorCompletion = ({
  onChange,
  value,
  completion,
  onRequireCompletion,
}: IRichTextProps) => {
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
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
      // if (value) {
      const contentState = convertFromRaw(markdownToDraft(value));
      setEditorState(
        EditorState.moveFocusToEnd(EditorState.createWithContent(contentState))
      );
    }
  }, [value, editorState]);

  const setValueHandler = (v: string) => {
    const content = editorState.getCurrentContent();
    const rawObject = convertToRaw(content);
    const markdownString = draftToMarkdown(rawObject);
    if (onChange) onChange(markdownString);
  };

  return (
    <div>
      <div className="flex justify-between bg-gray-100 text-xs border-2 border-gray-800">
        <div className="flex">
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
        <div
          onClick={() => onRequireCompletion!(setValueHandler)}
          className="border-l-2 flex items-center border-gray-800 px-2 justify-center"
        >
          <SiOpenai size={20} />
          <div className="ml-1">complete</div>
        </div>
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
