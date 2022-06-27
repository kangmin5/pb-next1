import React from 'react'
import Link from 'next/link';
import styles from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <div  >
          <Link href='/' >
            <p className={styles.logo}>PatternBOT</p></Link>
          </div>
          <div className={styles.menus}>
              <Link className={styles.menu} href='/coins/coins'>거래소</Link>
              <Link className={styles.menu} href='/orders/orders'>투자현황</Link>
              <Link className={styles.menu} href='/settings/settings'>설정</Link>
              <Link className={styles.menu} href='/menus/about'>About</Link>
              <Link className={styles.menu} href='/menus/contact'>Contact</Link>
              <Link className={styles.menu} href='/menus/faq'>FAQ</Link>

          </div>
        <div className={styles.loginMenu}>
          <div >
            <Link href='/users/login'>
              <a className={styles.login}>로그인</a></Link>
          </div>
          <div >
            <Link href='/users/join' className={styles.register}>
            <a className={styles.register}>회원가입</a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}


