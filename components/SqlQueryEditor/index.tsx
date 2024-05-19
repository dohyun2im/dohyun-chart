"use client";

import LoadingSkeleton from "@/components/LoadingSkeleton";
import { Editor, EditorProps } from "@monaco-editor/react";

interface Props extends EditorProps {}

const SqlQueryEditor: React.FC<Props> = ({ ...props }) => {
  return (
    <Editor
      theme="vs-dark"
      language="sql"
      defaultValue="select * from bitcoin"
      loading={<LoadingSkeleton isLoading={true} backgroundColor="#1e1e1e" height={240} />}
      {...props}
    />
  );
};

export default SqlQueryEditor;
