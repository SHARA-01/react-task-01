import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const TaskCard = ({item,index}) => {
    return (
        <Draggable key={item?.Id} draggableId={item?.Id} index={index}  >
            {(provided)=> (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <h1>{item?.Task}</h1>
                    <span>{new Date(item?.Due_date).toLocaleDateString('en-us', {
                        month: 'short',
                        day: '2-digit',
                    })}</span>
                </div>
            )}
        </Draggable>
    )
}

export default TaskCard;