import Image from 'next/image'
import React from 'react'

const Youtube = () => {
  return (
    <section id="youtubeSection" className="youtube__wrap cafe5 section">
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>유투버 추천</h3>
          <p>미니어처 유투버</p>
          <a href="/" className="button-red">
            자세히 보기
          </a>
        </div>
        <div className="youtube__item">
          <div>
            {/* <img src="./assets/images/youtube/Rectangle 745.png" alt="" /> */}
            <Image 
              width={400}
              height={200}
              src="/assets/images/youtube/Rectangle 745.png" alt="이미지" 
            />
          </div>
          <div>
            {/* <img src="./assets/images/youtube/Rectangle 746.png" alt="" /> */}
            <Image 
              width={400}
              height={200}
              src="/assets/images/youtube/Rectangle 746.png" alt="이미지" 
            />
          </div>
          <div>
            {/* <img src="./assets/images/youtube/Rectangle 747.png" alt="" /> */}
            <Image 
              width={400}
              height={200}
              src="/assets/images/youtube/Rectangle 747.png" alt="이미지" 
            />
          </div>
          <div>
            {/* <img src="./assets/images/youtube/Rectangle 748.png" alt="" /> */}
            <Image 
              width={400}
              height={200}
              src="/assets/images/youtube/Rectangle 748.png" alt="이미지" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Youtube
