import Image from 'next/image'
import React from 'react'

const Unsplash = () => {
  return (
    <section id="unsplashSection" className="unsplash__wrap cafe5 section bg-blue">
      <div className="unsplash__inner container">
        <div className="unsplash__text">
          <h3>이미지 추천</h3>
          <p>다나카 카츠야 서울 전시 작품</p>
          <a href="/" className="button-blue">
            자세히 보기
          </a>
        </div>
        <div className="unsplash__item">
          <div>
            {/* <img src="./assets/images/unsplash/Rectangle 745.png" alt="" /> */}
            <Image 
              width={400}
              height={200}
              src="/assets/images/unsplash/01.jpg" alt="이미지" 
              />
          </div>
          <div>
            {/* <img src="./assets/images/unsplash/Rectangle 746.png" alt="" /> */}
            <Image 
              width={400}
              height={200}
              src="/assets/images/unsplash/02.jpg" alt="이미지" 
              />
          </div>
          <div>
            {/* <img src="./assets/images/unsplash/Rectangle 747.png" alt="" /> */}
            <Image 
              width={400}
              height={200}
              src="/assets/images/unsplash/03.jpg" alt="이미지" 
              />
          </div>
          <div>
            {/* <img src="./assets/images/unsplash/Rectangle 748.png" alt="" /> */}
            <Image 
              width={400}
              height={200}
              src="/assets/images/unsplash/04.jpg" alt="이미지" 
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Unsplash
