import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { infoValue, todoState } from "../store";
import { v4 } from "uuid";

const AddTodo = () => {
  // 상태관리
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useRecoilState(todoState);
  const info = useRecoilValue(infoValue);

  return (
    <>
      <div className="alert alert-primary">
        <div className="d-inline col-4">
          Total items: &nbsp;
          <span className="badge badge-info">{info.total}</span>
        </div>
        <div className="d-inline col-4">
          Finished items: &nbsp;
          <span className="badge badge-info">{info.completed}</span>
        </div>
        <div className="d-inline col-4">
          Unfinished items: &nbsp;
          <span className="badge badge-info">{info.notCompleted}</span>
        </div>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          value={title}
          placeholder="투두 제목!"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-primary"
          onClick={(_) => {
            setTodos([...todos, { id: v4(), title: title, completed: false }]);
            setTitle("");
          }}
        >
          투두 추가!
        </button>
      </div>
    </>
  );
};

export default AddTodo;
