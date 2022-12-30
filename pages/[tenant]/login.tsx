import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useAppContext } from "../../contexts/AppContext";
import { api as apiService } from "../../services/api";
import styles from "../../styles/Login.module.css";
import { Tenant } from "../../types/Tenant";

const Login = (props: Props) => {
  const { tenant, setTenant } = useAppContext();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    setTenant(props.tenant);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | {props.tenant.name}</title>
      </Head>
      <Header backwardLink={`/${tenant?.slug}`} />
      <div className={styles.header}>{tenant?.name}</div>
      <div
        className={styles.subtitle}
        style={{ borderColor: tenant?.mainColor }}
      >
        Use as credenciais para realizar o login.
      </div>
      <div className={styles.line}></div>
      <div className={styles.formArea}>
        <div className={styles.inputArea}>
          <Input
            value={email}
            placeholder="Digite seu E-Mail"
            onChange={setEmail}
          />
        </div>
        <div className={styles.inputArea}>
          <Input
            value={password}
            placeholder="Digite sua senha"
            onChange={setPassword}
            isPassword
          />
        </div>
        <div className={styles.inputArea}>
          <Button label="Entrar" onClick={() => {}} filled />
        </div>
      </div>
      <div
        className={styles.forgotArea}
        style={{ borderColor: tenant?.mainColor }}
      >
        Esqueceu sua senha?{" "}
        <Link
          href={`/${tenant?.slug}/forget`}
          style={{
            textDecoration: "none",
            color: tenant?.mainColor,
            fontWeight: "bold",
          }}
        >
          <span>Clique aqui</span>
        </Link>
      </div>
      <div className={styles.line}></div>
      <div className={styles.signUpArea}>
        <Button
          label="Quero me cadastrar"
          onClick={() => {
            router.push(`/${tenant?.slug}/signup`);
          }}
        />
      </div>
    </div>
  );
};

export default Login;

interface Props {
  tenant: Tenant;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;

  const api = apiService();

  const tenant = await api.getTenant(tenantSlug as string);

  if (!tenant) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      tenant,
    },
  };
};
