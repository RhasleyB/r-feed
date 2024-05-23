import styles from "./Post.module.css";

export const Post = () => {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://github.com/rhasleyb.png"
                    />

                    <div className={styles.info}>
                        <strong>Rhasley Biangulo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime="2024-05-23" title="May 23, 2024">
                    1 hour ago
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href="#">jane.design/doctorcare</a></p>

                <p><a href="#">#novoprojeto #nlw #rocketseat</a>#</p>
            </div>
        </article>
    );
};