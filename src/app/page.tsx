import { getAllLectures } from "./lib/api";
import Lecture from "./lib/components/lecture-list";
import styles from "./page.module.css";

export default function Home() {
  const list = getAllLectures()
  console.log(list);
  
  return (
    <main className={styles.main}>
        <Lecture lectures={list}/>

    </main>
  );
}
