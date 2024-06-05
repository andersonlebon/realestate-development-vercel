import style from './textInput.module.css';
// import { Input } from 'antd';

interface ITextInputProps {
  name: string;
  label: string;
  error: string;
  onChange: void;
  value: string;
}


const Input: React.FC<ITextInputProps> = ({
  name,
  label,
  error,
  onChange,
  value,
}) => {
  return (
    <div className={style.input}>
      <label htmlFor={name}>{label}</label>
      <div className={style.field}>
        {/* <Input
          type="text"
          name={name}
          onChange={onChange}
          value={value}
        /> */}
        {error && <div className={style.error}>{error}</div>}
      </div>
    </div>
  );
    
};