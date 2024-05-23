import styles from "./Sidebar.module.css";
import { PencilLine } from "@phosphor-icons/react";

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.cover}>
                <img 
                    src="https://images.unsplash.com/photo-1715783768839-73794cbce337?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                />
            </div>

            <div className={styles.profile}>
                <img 
                    src="https://github.com/rhasleyb.png"
                    />
                <strong>
                    Rhasley Biangulo
                </strong>
                <span>
                    CEO at Dottaz Digital Inc.
                </span>
            </div>

            <div className={styles.actions}>
                <button>
                    <PencilLine size={20} /> Edit Profile
                </button>
            </div>
        </aside>
    );
};