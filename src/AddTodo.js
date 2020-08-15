import React, { useState, useEffect } from 'react';
import db from './firebase-config'
import firebase from 'firebase';

import { AddCircleOutlineRounded, DeleteOutlineRounded, Edit } from '@material-ui/icons';

import { Button, TextField, Container, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Dialog, DialogContent, DialogActions } from '@material-ui/core';

const AddTodo = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    return (
        <div>
            <form noValidate>

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="todo"
                    label="Enter ToDo"
                    name="todo"
                    autoFocus
                    value={input}
                    onChange={event => setInput(event.target.value)}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={addTodo}
                    disabled={!input}
                    startIcon={<AddCircleOutlineRounded />}
                >
                    Add Todo
                </Button>

            </form>
        </div>
    );
};



export default AddTodo;
