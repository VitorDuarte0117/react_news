import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";
import * as Prismic from "@prismicio/client";
import { GetStaticProps } from "next";

export default function Posts() {
    return (
        <>
            <Head>
                <title> Posts | ReactNews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>March 15, 2021</time>
                        <strong>
                            Why You Should Use React.js For Web Development
                        </strong>
                        <p>
                            If you are new to React.js, you must be wondering
                            why it is so popular and why you should use it in
                            your applications. If so, then you are in the right
                            place. Let/s discuss what makes React.js so great
                            and why you should use it in your projects.
                        </p>
                    </a>
                    <a href="">
                        <time>March 15, 2021</time>
                        <strong>
                            Why You Should Use React.js For Web Development
                        </strong>
                        <p>
                            If you are new to React.js, you must be wondering
                            why it is so popular and why you should use it in
                            your applications. If so, then you are in the right
                            place. Let/s discuss what makes React.js so great
                            and why you should use it in your projects.
                        </p>
                    </a>
                    <a href="">
                        <time>March 15, 2021</time>
                        <strong>
                            Why You Should Use React.js For Web Development
                        </strong>
                        <p>
                            If you are new to React.js, you must be wondering
                            why it is so popular and why you should use it in
                            your applications. If so, then you are in the right
                            place. Let/s discuss what makes React.js so great
                            and why you should use it in your projects.
                        </p>
                    </a>
                </div>
            </main>
        </>
    );
}

export async function getServerSideProps() {
    const prismic = getPrismicClient();

    const posts = await prismic.getByType("post", {
        pageSize: 100,
    });

    console.log(posts);

    return {
        props: { posts },
    };
}
