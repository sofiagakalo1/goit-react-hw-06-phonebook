import {createAction} from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction("contacts/add", newContact=>{
    return{
        payload:{
            ...newContact,
            id: nanoid(),
        }
    }
});

export const deleteContact = createAction("contacts/delete");