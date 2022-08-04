import Image from "next/image";
import React, { useCallback, useState, useRef  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";

function PostForm(props) {
  const { imagePaths } = useSelector((state) => state.post);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const imageInput = useRef();

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(addPost);
    setText('');
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]); 
  return (
    <form encType="multipart/form-data" onSubmit={onSubmit}>
      <input
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="자유롭게 작성해주세요!!"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput}/>
        <button onClick={onClickImageUpload}>이미지 업로드</button>
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
