"use client";

import { Editor, EditorProps } from "@monaco-editor/react";
import SqlQueryEditorSkeleton from "../skeletons/SqlQueryEditorSkeleton";

interface Props extends EditorProps {}

const SqlQueryEditor: React.FC<Props> = ({ ...props }) => {
  return (
    <Editor
      theme="vs-dark"
      language="sql"
      defaultValue="select * from bitcoin"
      loading={<SqlQueryEditorSkeleton />}
      {...props}
    />
  );
};

export default SqlQueryEditor;
