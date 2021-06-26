import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import axios from "axios";

const TextEditor = () => {
  const editorRef = useRef();

  // const uploadImage = async (blob) => {
  //   let formData = new FormData();
  //   formData.append("image", blob);
  //   console.log("blob = ", blob);
  //   axios.defaults.withCredentials = true;
  //   try {
  //     const res = await axios.post("http://localhost:8787/swith/", data, {
  //       header: { "content-type": "multipart/formdata" },
  //     });
  //     console.log(res);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="tab"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        hooks={{
          addImageBlobHook: (blob, callback) => {
            callback(blob.name, "alt");
            return false;
          },
        }}
        onChange={() => {
          const text = editorRef.current.getInstance().getMarkdown();
          console.log(text);
        }}
        ref={editorRef}
      />
      {/* <button onClick={handleClick}>handle click</button> */}
    </div>
  );
};

export default TextEditor;