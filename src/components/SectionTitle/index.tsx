import styles from "./index.module.scss";

type Props = {
	children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
	return <h2 className={styles["title"]}>{children}</h2>;
}
