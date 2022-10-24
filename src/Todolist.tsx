import React, {KeyboardEvent, MouseEvent, ChangeEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {AppButton} from "./components/AppButton";

type TaskType = {
   id: string
   title: string
   isDone: boolean
}

type PropsType = {
   title: string
   tasks: Array<TaskType>
   removeTask: (taskId: string) => void
   changeFilter: (value: FilterValuesType) => void
   addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {
   const [newTitle, setNewTitle] = useState('')
   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setNewTitle(event.currentTarget.value)
   }

   const onClickHandler = () => {
      props.addTask(newTitle)
      setNewTitle('')
   }

   const onKeyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
         onClickHandler()
      }
   }

   const removeTaskHandler = (tID: string) => {
      props.removeTask(tID)
   }

   const onClickChangeHandler = (filterValue:FilterValuesType ) => {
      props.changeFilter(filterValue)
   }

   return <div>
      <h3>{props.title}</h3>
      <div>
         <input value={newTitle} onChange={onChangeHandler} onKeyDown={onKeyHandler}/>
         {/*<button onClick={onClickHandler}>+</button>*/}
         <AppButton title={'+'} callback={onClickHandler}/>
      </div>
      <ul>
         {
            props.tasks.map(t => {

               return (
                  <li key={t.id}>
                     <input type="checkbox" checked={t.isDone}/>
                     <span>{t.title}</span>
                     <AppButton title={'x'} callback={() => removeTaskHandler(t.id)} />
                  </li>
               )
            } )
         }
      </ul>
      <div>
         <AppButton title={'All'} callback={() => onClickChangeHandler("all")} />
         <AppButton title={'Active'} callback={() => onClickChangeHandler("active")} />
         <AppButton title={'Completed'} callback={() => onClickChangeHandler("completed")} />
      </div>
   </div>
}
