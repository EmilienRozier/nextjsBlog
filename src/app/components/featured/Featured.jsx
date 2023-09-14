import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}><b>Hey Emilien dev here! </b>Discover my stories and creative ideas.</h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt repudiandae </h1>
                    <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A consequuntur unde ullam nemo nesciunt quos magnam quibusdam! Explicabo asperiores distinctio, deserunt eum sint vitae ipsa dicta perspiciatis perferendis maxime fugit?</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured