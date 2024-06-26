import React, { useState } from 'react';
import { TasksColumbs } from '../assets/taskList';
import TaskCard from '../components/TaskCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Task05() {
  const [taskColumb, setTaskColumb] = useState(TasksColumbs);

  const onDragEnd = (result, taskColumb, setTaskColumb) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = taskColumb[source.droppableId];
      const destColumn = taskColumb[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setTaskColumb({
        ...taskColumb,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = taskColumb[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setTaskColumb({
        ...taskColumb,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, taskColumb, setTaskColumb)}>
      <div className="flex react-beautiful-dnd-draggable">
        {Object.entries(taskColumb).map(([columnId, column]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-1/5 border-2 border-gray-400 p-2 m-2"
              >
                <h1 className="font-bold">{column.title}</h1>
                {column.items.map((item, index) => (
                  <Draggable key={item.Id} draggableId={item.Id} index={index}>
                    {(provided,snapsho) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="mb-2 p-2 bg-white border rounded"
                      >
                        <TaskCard item={item} index={index} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default Task05;
