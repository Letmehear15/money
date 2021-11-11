import {useState} from 'react'

export const useToggleDialog = (): [boolean, () => void] => {
    const [dialog, setDialog] = useState(false);

    const toggleDialog = () => {
      setDialog((prev) => !prev);
    };
  
    return [dialog, toggleDialog];
  
}