import styles from './styles.module.css';
import ClosedEye from './ClosedEye.svg';
import OpenEye from './OpenEye.svg';
import { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';

interface InputProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    isPassword?: boolean
}

export const Input = ({ placeholder, value, onChange, isPassword }: InputProps) => {
    const { tenant } = useAppContext();
    
    const [showPassword, setShowPassword] = useState(false);

    const [isFocused, setIsFocused] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div 
            className={styles.container}  
            style={{ 
                borderColor: isFocused ? tenant?.mainColor : '#f9f9fb',
                backgroundColor: isFocused ? '#fff' : '#f9f9fb' 
            }}
        >
            <input
                className={styles.input}
                type={isPassword && !showPassword ? 'password' : 'text'}
                placeholder={placeholder}
                value={value}
                onChange={event => onChange(event.target.value)}
                onFocus={() => {setIsFocused(true)}}
                onBlur={() => {setIsFocused(false)}}
            />
            {isPassword && (
                <div className={styles.showPassword} onClick={toggleShowPassword}>
                    {showPassword && <OpenEye color="#bbb" />}
                    {!showPassword && <ClosedEye color="#bbb" />}
                </div>
            )}
        </div>
    );
}   