import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map(todo => (
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)} 
            />
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;


/*

// An object taking on a particular shape


// shape
optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
}),



https://facebook.github.io/react/docs/typechecking-with-proptypes.html


// arrayOf

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of

*/