import Link from 'next/link';
import { Product } from '../../types/Product';
import styles from './styles.module.css';

interface ProductItemProps {
    product: Product;
    mainColor: string;
    secondaryColor: string;
}

export const ProductItem = ({ product, mainColor, secondaryColor }: ProductItemProps) => {
    return (
        <Link href={`/the-great-burguer/product/${product.id}`} style={{textDecoration: 'none'}}>
            <div className={styles.container}>
                <div className={styles.head} style={{ backgroundColor: secondaryColor }}></div>
                <div className={styles.info}>
                    <div className={styles.image}>
                        <img src="/tmp/burger.png" alt="foto de hamburguer" />
                    </div>
                    <div className={styles.categoryName}>{product.categoryName}</div>
                    <div className={styles.name}>{product.name}</div>
                    <div className={styles.price} style={{ color: mainColor }}>R$ {product.price}</div>
                </div>
            </div>
        </Link>
    );
}