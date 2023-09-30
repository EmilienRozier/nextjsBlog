import React from 'react'
import styles from "./singlePage.module.css";
import Image from 'next/image';
import Menu from '@/components/menu/Menu';
import Comments from '@/components/comments/Comments';

export const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident alias aperiam modi consectetur perferendis. Reiciendis nesciunt optio repellat consequuntur! Vero accusamus perspiciatis sunt sequi asperiores iusto saepe atque libero facilis?</p>
            <h2>Lorem ipsum dolor sit, amet </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, nihil non? Officia sequi nisi quod, dolores iusto totam labore ratione dignissimos, in expedita ut mollitia sunt quo dolorum? Porro, eum?</p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quam nulla, tenetur laboriosam quaerat consectetur asperiores, explicabo culpa nihil magnam error id voluptatum reprehenderit soluta illo facilis saepe a? Quibusdam!</p>
          </div>
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage;