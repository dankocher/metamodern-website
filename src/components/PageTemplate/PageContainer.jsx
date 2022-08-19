
import styles from "./index.module.scss";


const PageContainer = ({children}) => {

    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}
export default PageContainer;
