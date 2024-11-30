/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  View,
} from 'react-native';
import {ToDoForm} from "./ToDoForm";
import {ToDoList} from "./ToDoList";


function App() {

    const [tasks, setTasks] = React.useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
    ]);

    const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
    };

  return (
      <View>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </View>
  );
}

export default App;
