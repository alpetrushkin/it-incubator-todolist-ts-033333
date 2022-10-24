import React from 'react';

export type AppButtonType = {
   title: string
   callback: () => void
}

export const AppButton = (props: AppButtonType) => {
   const onClickBtnHandler = () => {
     props.callback()
   }

   return (
         <button onClick={onClickBtnHandler}>{props.title}</button>
   );
};
