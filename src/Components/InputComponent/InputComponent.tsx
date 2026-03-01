import "./InputComponent.css";
import type { InputProps } from "../../types";
import type { FC } from "react";
const InputComponent:FC<InputProps> = ({labels='' , inputed ='text', requireds=false, className='', ...rest}) => {
  return (
    <div className={`input-container ${className}`}   >
      <div className="input-header">
        <input type={inputed} className="input-title" required={requireds} {...rest} />
        <div className="labelline">{labels}</div>
      </div>
    </div>
  );
}

export default InputComponent;
