import styled from "@emotion/styled";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled("div")`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  width: 230px;
  background: white;
`;
const Title = styled("h3")`
  padding: 8px;
`;

const TaskList = styled("div")`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
  transition: background-color ease 0.2s;
  background-color: ${(props) =>
    props.isDraggingOver ? "palevioletred" : "white"};
`;
const Column = ({ tasks, column, index, handleChangeTitle }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable key={column.id} droppableId={column.id} type="task">
        {(provided, snapshot) => (
          <TaskList
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                handleChangeTitle={handleChangeTitle}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
