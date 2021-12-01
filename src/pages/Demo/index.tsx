import React from 'react';
import Editor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
const Demo: React.FC = () => {
  return (
    <div>
      <Editor editorId="editor-1" />
      <Editor editorId="editor-2" />
    </div>
  );
};

export default Demo;
