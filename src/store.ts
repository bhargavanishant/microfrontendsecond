// src/store.js in Remote App
import {create} from 'zustand';

 export const useStore:any = create((set:any) => ({
  data: [],
  setData: (data:any) => set((state:any)=> ({data: [...state.data, ...data]})),
  filterData: (fieldKey, value) => set((state)=> ({
    data: [...state.data.filter((data)=> {
      return data[fieldKey] === value
    })]
  })),
  count: 0,
}));

 