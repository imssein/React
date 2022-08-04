export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫 번째 게시글 #해쉬태그 #익스프레스",
      Images: [
        {
          src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        },
        {
          src: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        },
        {
          src: "https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "sein",
          },
          content: "우와 개정판이 나왔군요",
        },
        {
          User: {
            nickname: "hyun",
          },
          content: "얼른 사고싶다",
        },
      ],
    },
  ],
//   이미지 업로드할 때 경로 저장
  imagePaths: [],
//   게시글 작성 완료되면 true로 변경됨
  postAdded: false,
};

// 게시글 작성하는 액션 
const ADD_POST = 'ADD_POST';

export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2, 
    content: '더미데이터입니다.',
    User: {
        id: 1, 
        nickname: '제로초',
    }, 
    Images: [], 
    Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
        return {
            ...state,
            // 게시글 쓰자마자 맨 위에 업로드
            mainPosts: [dummyPost, ...state.mainPosts],
            postAdded: true, 
        };
    default:
      return state;
  }
};

export default reducer;
