import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { useAppContext } from '../../contexts/AppContext';
import { useApi } from '../../services/useApi';
import styles from '../../styles/Login.module.css';
import { Tenant } from '../../types/Tenant';

const Login = (props: Props) => {
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(props.tenant)
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | {props.tenant.name}</title>
      </Head>
      <Header backwardLink={`/${tenant?.slug}`} />
    </div>
  );
}

export default Login;

interface Props {
  tenant: Tenant
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