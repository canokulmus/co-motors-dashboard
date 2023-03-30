import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEmployees = createAsyncThunk('employee/fetchEmployees', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
});
