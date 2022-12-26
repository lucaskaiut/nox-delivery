import Link from 'next/link';
import { useAppContext } from '../../contexts/AppContext';
import { Product } from '../../types/Product';
import styles from './styles.module.css';

interface ProductItemProps {
    product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
    const { tenant } = useAppContext();

    return (
        <Link href={`/${tenant?.slug}/product.id}`} style={{textDecoration: 'none'}}>
            <div className={styles.container}>
                <div className={styles.head} style={{ backgroundColor: tenant?.secondaryColor }}></div>
                <div className={styles.info}>
                    <div className={styles.image}>
                        <img src="/tmp/burger.png" alt="foto de hamburguer" />
                    </div>
                    <div className={styles.categoryName}>{product.categoryName}</div>
                    <div className={styles.name}>{product.name}</div>
                    <div className={styles.price} style={{ color: tenant?.mainColor }}>R$ {product.price}</div>
                </div>
            </div>
        </Link>
    );
}