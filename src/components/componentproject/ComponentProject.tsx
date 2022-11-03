import styles from "./ComponentProject.module.css";

interface PropsComponent {
  img: string;
  link: string;
  projeto: string;
}

export function ComponentProject({ img, link, projeto }: PropsComponent) {
  return (
    <div className={styles.container}>
      <img src={img} alt="" />
      <div>
        <a href={link}>{projeto}</a>
      </div>
    </div>
  );
}
