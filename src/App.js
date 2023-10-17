import './App.css';
import { Button, List, ListItem, TextField, IconButton, Box } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [showList, setShowList] = useState(false);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  const handleEditTask = (index) => {
    const updatedTask = prompt('Edit task:', taskList[index]);
    if (updatedTask !== null) {
      const updatedTaskList = [...taskList];
      updatedTaskList[index] = updatedTask;
      setTaskList(updatedTaskList);
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TextField
        variant='outlined'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" color='success' onClick={handleAddTask}>
        Add
      </Button>
      <Button
        variant="contained"
        color={showList ? 'secondary' : 'primary'}
        onClick={() => setShowList(!showList)}
      >
        {showList ? 'Hide List' : 'Show List'}
      </Button>
      {showList && (
        <Box
          sx={{
            border: 'none',
            padding: '20px',
            marginTop: '20px',
            width: '60%',
            margin: 'auto',
            backgroundColor: 'rgb(248, 215, 251)'
          }}
        >
          <ol>
            {taskList.map((task, index) => (
              <li key={index}>
                {task}
                <IconButton color="primary" onClick={() => handleEditTask(index)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={() => handleDeleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              </li>
            ))}
          </ol>
        </Box>
      )}
    </div>
  );
}

export default App;
