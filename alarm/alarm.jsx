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

    let element;
	if (isEditing) {
		element = (
			<>
				<input className={`${isEditing && 'edit'}`}
					type="text"
					value={inputText}
					onChange={updateHandler}
					onKeyDown={updateHandler}
					onBlur={blurHandler}
					autoFocus />
				<span>{props.ampm} {props.hour} 시 {props.minute} 분</span>
			</>
		);

}
}