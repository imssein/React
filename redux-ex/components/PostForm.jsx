import Image from "next/image";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import useInput from "../hooks/useInput";

function PostForm(props) {
  const { imagePaths } = useSelector((state) => state.post);
  const [text, onChangeText] = useInput("");

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <form encType="multipart/form-data" onSubmit={onSubmit}>
      <input
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="자유롭게 작성해주세요!!"
      />
      <div>
        <input type="file" multiple hidden />
        <button>이미지 업로드</button>
        <button type="submit">업로드</button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v}>
            <Image src={v} alt={v} />
            <div>
              <button>제거</button>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
}

export default PostForm;
