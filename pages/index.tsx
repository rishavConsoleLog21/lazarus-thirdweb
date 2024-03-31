import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home: NextPage = () => {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <span className={styles.gradientText0}>
              <a
                href="https://https://lazarus.network/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lazarus Network
              </a>
            </span>
          </h1>

          <div className={styles.connect}>
            <ConnectWallet
              theme={"dark"}
              btnTitle={"Lazarus"}
              modalTitle={"Connect, Lazarus"}
              modalSize={"wide"}
              welcomeScreen={{
                title:
                  "Your gateway to the decentralized world with Lazarus Network",
                subtitle:
                  "Connect your wallet to get started",
                img: {
                  src: "https://lazarus.network/assets/img/logo-white%20(1).png",
                  width: 185,
                  height: 50,
                },
              }}
              onConnect={() => {
                toast.success(`Connected to Lazarus Network!`);
              }
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
