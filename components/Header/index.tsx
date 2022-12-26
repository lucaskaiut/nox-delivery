import styles from './styles.module.css';
import ArrowLeftIcon from './arrowLeftIcon.svg';
import Link from 'next/link';
import { useAppContext } from '../../contexts/AppContext';

interface HeaderProps {
    backwardLink: string;
    title?: string;
    subtitle?: string;
}

export const Header = ({ backwardLink, title, subtitle }: HeaderProps) => {
    const { tenant } = useAppContext();

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <Link href={backwardLink}>
                    <ArrowLeftIcon color={tenant?.mainColor}/>
                </Link>
            </div>
            <div className={styles.centerSide}>
                <div className={styles.title}>{ title }</div>
                <div className={styles.subtitle}>{ subtitle }</div>
            </div>
            <div className={styles.rightSide}></div>
        </div>
    );
}