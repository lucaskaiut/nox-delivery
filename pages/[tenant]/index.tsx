import { GetServerSideProps } from 'next';
import { Banner } from '../../components/Banner';
import { ProductItem } from '../../components/ProductItem';
import { SearchInput } from '../../components/SearchInput';
import { getTenantResponse, useApi } from '../../services/useApi';
import styles from '../../styles/Home.module.css';

const Home = ({ tenant }: Props) => {
  const handleSearch = (searchValue: string) => {
    //
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem-Vindo 👋</div>
            <div className={styles.headerSubtitle}>O que deseja pra hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonLine} style={{ backgroundColor: tenant.mainColor }}></div>
              <div className={styles.menuButtonLine} style={{ backgroundColor: tenant.mainColor }}></div>
              <div className={styles.menuButtonLine} style={{ backgroundColor: tenant.mainColor }}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput
            mainColor={tenant.mainColor}
            onSearch={handleSearch}
          />
        </div>
      </header>
      <Banner />
      <div className={styles.grid}>
        <ProductItem
          product={{
            id: '1u23123iup21',
            image: '/tmb/burguer.png',
            name: 'Texas Burger',
            price: 25.5,
            categoryName: 'Tradicional'
          }}
          mainColor={tenant.mainColor}
          secondaryColor={tenant.secondaryColor}
        />
      </div>
    </div>
  );
}

export default Home;

interface Props {
  tenant: getTenantResponse
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;

  const api = useApi();

  const tenant = await api.getTenant(tenantSlug as string);

  if (!tenant) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      tenant
    }
  }
}