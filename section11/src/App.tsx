import './App.css';
import React, { useEffect, useReducer, useRef } from 'react';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import { Todo } from './types';

type Action = {
	type: 'CREATE',
	data: {
		id: number,
		content: string,
	}
} | {
	type: 'DELETE',
	data: {
		id: number,
	}
}

function reducer(state: Todo[], action: Action) {
	switch (action.type) {
		case 'CREATE':
			return [ ...state, action.data ];
		case 'DELETE':
			return state.filter((todo) => todo.id !== action.data.id);
	}
}

function App() {
	const [ todos, dispatch ] = useReducer(reducer, []);
	
	
	const idRef = useRef(0);
	
	
	const onClickAdd = (text: string) => {
		dispatch({
			type: 'CREATE',
			data: {
				id: idRef.current++,
				content: text,
			},
		});
	};
	
	const onClickDelete = (id: number) => {
		dispatch({
			type: 'DELETE',
			data: {
				id,
			},
		});
	};
	
	useEffect(() => {
		console.log(todos);
	}, [ todos ]);
	
	return (
		<div className={ 'App' }>
			<h1>Todo</h1>
			<Editor onClickAdd={ onClickAdd }/>
			<div>
				{
					todos.map((todo) => {
						return (
							<div key={ todo.id }>
								<TodoItem key={ todo.id } { ...todo } onClickDelete={ onClickDelete }/>
							</div>
						);
					})
				}
			</div>
		</div>
	);
}

export default App;
