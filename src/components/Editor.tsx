"use client";

import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";

import styles from "@/styles/editor.module.scss";
import { useState } from "react";

const Editor = () => {
  const [code, setCode] = useState("message = 'Code Editor!'\nprint(message)");

  const languageExt = {
    py: python(),
    java: java(),
    cpp: cpp(),
  };

  return (
    <CodeMirror
      className={styles.editor}
      value={code}
      onChange={(e) => setCode(e)}
      theme={oneDark}
      extensions={[languageExt["py"]]}
    />
  );
};

export default Editor;
