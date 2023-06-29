import React from 'react'

import Link from 'next/link'
import styles from "./header.module.css"

const Links = [
  {
    id:1,
    title: "소개",
    url: "/intro"
  },
  {
    id:2,
    title: "멤버",
    url: "/member"
  },
  {
    id:3,
    title: "포트폴리오",
    url: "/port"
  },
  {
    id:4,
    title: "유투브",
    url: "/youtube"
  },
  {
    id:5,
    title: "영화",
    url: "/movie"
  },
  {
    id:6,
    title: "이미지",
    url: "/unsplash"
  }
];



const Header = () => {
  return (
    <header id="header" className="header__wrap cafe5 bg-blue" role="heading" aria-level="1">
      <div className={styles.header__inner}>
        <h1 className={styles.header__logo}>
          <Link href="/">
            web <em>site</em>
          </Link>
        </h1>
        <nav className={styles.header__nav} role="navigation">
          <ul>
            {Links.map((link)=>(
              <li key={link.url} >
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
            {/* <li>
              <Link href="/intro">소개</Link>
            </li>
            <li>
              <Link href="/member">작가소개</Link>
            </li>
            <li>
              <Link href="/port">포트폴리오</Link>
            </li>
            <li>
              <Link href="/youtube">유투브</Link>
            </li>
            <li>
              <Link href="/unsplash">이미지</Link>
            </li>
            <li>
              <Link href="/movie">영화</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
