import axiosInstance from './axiosInstance';

type TodoApi = {
  id: string;
  text: string;
  is_finished: boolean;
};

export const getAll = () => {
  return axiosInstance.get<Array<TodoApi>>('/todos');
};
