import { useState } from 'react';
import styles from './styles.module.css';
import SearchIcon from './searchIcon.svg';
import { useAppContext } from '../../contexts/AppContext';

type Props = {
    onSearch: (searchValue: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
    const {tenant} = useAppContext();

    const [isFocused, setIsFocused] = useState(false);
    
    const [searchValue, setSearchValue] = useState('');

    const handleInputFocus = () => {
        setIsFocused(true);
    }

    const handleInputBlur = () => {
        setIsFocused(false);
    }

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code == 'Enter' || event.code == 'NumpadEnter') {
            onSearch(searchValue);
        }
    }
    
    return (
        <div className={styles.container} style={{ borderColor: isFocused ? tenant?.mainColor : '#fff'}}>
            <div className={styles.button} onClick={() => onSearch(searchValue)}>
                <SearchIcon color={tenant?.mainColor}/>
            </div>
            <input 
                type="text" 
                className={styles.input} 
                placeholder="Digite o nome do item"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyUp={handleKeyUp}
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
            />
        </div>
    )
}