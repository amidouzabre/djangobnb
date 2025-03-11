import Image from "next/image";
import Categories from "./components/Categories";
//import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <Categories/>
    </main>
  );
}
