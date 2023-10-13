import styled from "@emotion/styled";
import { Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const Container = styled("div")`
  border: 1px solid lightgrey;
  margin-bottom: 8px;
  border-radius: 2px;
  padding: 8px;
  background: ${(props) => (props.isDragging ? "lightgreen" : "white")};

  .title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  img {
    width: 30px;
  }
`;

const Task = ({ task, index, handleChangeTitle }) => {
  const [editModeToggle, setEditModeToggle] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Draggable draggableId={task.id} index={index} type="task">
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
        >
          {editModeToggle ? (
            <>
              <input
                defaultValue={task.title}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                onClick={() => {
                  handleChangeTitle(task.id, value);
                  setEditModeToggle(false);
                }}
              >
                Update
              </button>
            </>
          ) : (
            <>
              <img
                src="./three-dots.png"
                onClick={() => setEditModeToggle(true)}
              />
              <h2 className="title">{task.title}</h2>
              <p>{task.content}</p>
            </>
          )}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
