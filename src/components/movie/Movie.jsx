import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Movie = () => {
  return (
    <section id="movieSection" className="movie__wrap cafe5 section">
      <div className="movie__inner container">
        <div className="move__text">
          <h3>영화 추천</h3>
          <p>러빙 빈센트, 호크니, 뱅크시, 진주 귀걸이를 한 소녀</p>
          <Link href="/" className="button-red">
            자세히 보기
          </Link>
        </div>
        <div className="movie__item">
          <div>
            {/* <img src="./assets/images/movie/Rectangle 757.png" alt="" /> */}
            <Image 
              width={320}
              height={500}
              src="/assets/images/movie/01.jpg" alt="이미지" 
            />
          </div>
          <div>
            {/* <img src="./assets/images/movie/Rectangle 757.png" alt="" /> */}
            <Image 
              width={320}
              height={500}
              src="/assets/images/movie/02.jpg" alt="이미지" 
            />
          </div>
          <div>
            {/* <img src="./assets/images/movie/Rectangle 757.png" alt="" /> */}
            <Image 
              width={320}
              height={500}
              src="/assets/images/movie/03.jpg" alt="이미지" 
            />
          </div>
          <div>
            {/* <img src="./assets/images/movie/Rectangle 757.png" alt="" /> */}
            <Image 
              width={320}
              height={500}
              src="/assets/images/movie/04.jpg" alt="이미지" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Movie
