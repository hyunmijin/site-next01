import React from 'react'

import Link from 'next/link'

const footermnne = [
  {
    id:1,
    title: "웹표준사이트",
    url:"/"
  },
  {
    id:1,
    title: "웹표준사이트",
    url:"/"
  },
]

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo" className="footer__wrap cafe5 bg-blue">
      <div className="footer__inner container">
        <div className="footer__text">
          <h5>Jin Hyun Mi</h5>
          <p>
            궁금한 사항은 메일로 연락주세요!<br></br>
            <Link href="mailto:webstoryboy@naver.com">hunmi961119@gmil.com</Link>
          </p>
          <ul className="sns">
            <li>
              <Link href="/">
                <span className="ir">페이스북</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="ir">인스타</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="ir">유투브</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="ir">깃</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <div>
            <h4>사이트</h4>
            <ul>
              <li>
                <Link href="/">웹표준 사이트</Link>
              </li>
              <li>
                <Link href="/">웹표준 사이트</Link>
              </li>
              <li>
                <Link href="/">웹표준 사이트</Link>
              </li>
              <li>
                <Link href="/">웹표준 사이트</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>유형</h4>
            <ul>
              <li>
                <Link href="/">이미지 유형</Link>
              </li>
              <li>
                <Link href="/">카드 유형</Link>
              </li>
              <li>
                <Link href="/">이미지/텍스트 유형</Link>
              </li>
              <li>
                <Link href="/">배너 유형</Link>
              </li>
              <li>
                <Link href="/">텍스트 유형</Link>
              </li>
              <li>
                <Link href="/">푸터 유형</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>스크립트</h4>
            <ul>
              <li>
                <Link href="/">검색 이펙트</Link>
              </li>
              <li>
                <Link href="/">퀴즈 이팩트</Link>
              </li>
              <li>
                <Link href="/">마우스 이펙트</Link>
              </li>
              <li>
                <Link href="/">슬라이드 이펙트</Link>
              </li>
              <li>
                <Link href="/">패럴랙스 이펙트</Link>
              </li>
              <li>
                <Link href="/">게임 이펙트</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>레퍼런스</h4>
            <ul>
              <li>
                <Link href="/">CSS</Link>
              </li>
              <li>
                <Link href="/">FONTS</Link>
              </li>
              <li>
                <Link href="/">HTML</Link>
              </li>
              <li>
                <Link href="/">JAVASCRIPT</Link>
              </li>
              <li>
                <Link href="/">REACT</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">Copyright 2022. All Rights Reserved. - Designed by JHM</div>
      </div>
    </footer>
  )
}

export default Footer
