"use client";
import { signOut } from "next-auth/react";
import styles from "./LogoutButton.module.scss";

const LogoutButton = () => {
  return (
    <div>
      <button
        className={styles.button}
        onClick={() => signOut({ callbackUrl: "/" })} // Si on ne précise pas où on veut être redirigé à la connexion on va être dirigé vers la même url et donc sur le formulaire de connexion
      >
        Déconnexion
      </button>
    </div>
  );
};

export default LogoutButton;