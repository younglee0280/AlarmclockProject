import React, {useState} from 'react';
import './alarm.css';

const Alarm = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [inputText, setInputText] = useState(props.title);

	const doubleClickHandler = () => {
		console.log('');
		setIsEditing(true);
	};
	
	const deleteHandler = () => {
		props.onDelete(props.id);
	}

	const updateHandler = () => {
		setInputText(event.target.value);

		if (event.key === 'spacebar'){
			props.onUpdate(props.id, inputText);
			setIsEditing(!isEditing);
		}
	};

    let element;
	if (isEditing) {
		element = (
			<>
				<input className={`${isEditing && 'edit'}`}
					type="text"
					value={inputText}
					onChange={updateHandler}
					onKeyDown={updateHandler}
					autoFocus />
				<span>{props.ampm} {props.hour} 시 {props.minute} 분</span>
			</>
		);

} else {
	element = (
		<div className='view'>

			
		</div>
	) 
}
}