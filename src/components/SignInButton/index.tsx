import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

import styles from "./styles.module.scss";

export function SignInButton() {
    const { data: session } = useSession();

    console.log(session);

    try {
        return session ? (
            <button
                onClick={() => signOut()}
                type="button"
                className={styles.signInButton}
            >
                <FaGithub color="#04d361" />
                {session.user.name}
                <FiX color="#73780" className={styles.closeIcon} />
            </button>
        ) : (
            <button
                onClick={() => signIn("github")}
                type="button"
                className={styles.signInButton}
            >
                <FaGithub color="#eba417" />
                Sign in with Github
            </button>
        );
    } catch {
        console.log(Error);
    }
}
