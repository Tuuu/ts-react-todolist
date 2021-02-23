import React, { useEffect, useState } from "react";
import { CheckedSvg, CheckSvg, DeleteSvg } from "./CheckboxSvg";
import "./TodoList.css";

interface Todo {
  id: number;
  content: string;
  status: boolean;
}

const TodoList: React.FunctionComponent = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState<Todo[]>([]);

  const input: React.FormEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.value);
  };

  const onEnter: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key !== "Enter") {
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      content: value,
      status: false,
    };
    const newList =
      list.length !== 0
        ? list.reduce<Todo[]>((prev, cur, index): Todo[] => {
            return index === 0 ? [newTodo, ...prev, cur] : [...prev, cur];
          }, [])
        : [newTodo];
    setList(newList);
    localStorage.setItem("data", JSON.stringify(newList));
    setValue("");
  };

  const todoChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newList: Todo[] = list.map((item) => {
      return item.id.toString() === event.currentTarget.value
        ? {
            ...item,
            status: event.currentTarget.checked,
          }
        : item;
    });
    localStorage.setItem("data", JSON.stringify(newList));
    setList(newList);
  };

  const deleteTodo = (id: number): void => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    localStorage.setItem("data", JSON.stringify(newList));
  };

  useEffect(() => {
    const data = localStorage.getItem("data");
    const newList = data ? JSON.parse(data) : [];
    setList(newList);
  }, []);

  return (
    <div className="wrapper">
      <div className="add-task">
        <input
          value={value}
          type="text"
          className="input"
          placeholder="输入 Todo 任务，回车即可保存"
          onKeyDown={(event) => onEnter(event)}
          onInput={(event) => input(event)}
        />
      </div>
      <ul className="task-list">
        {list.map((item) => (
          <li key={item.id} className={item.status ? "checked" : ""}>
            <label>
              <input
                type="checkbox"
                checked={item.status}
                value={item.id}
                onChange={(event) => todoChange(event)}
              />
              {item.status ? <CheckedSvg /> : <CheckSvg />}
            </label>
            <div className="content-wrapper">
              <div className="content">{item.content}</div>
            </div>
            <div className="delete" onClick={() => deleteTodo(item.id)}>
              <DeleteSvg />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
