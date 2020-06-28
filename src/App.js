import React, { Component } from 'react'
import gsap, { TimelineLite, Power3 } from 'gsap'

import './App.css'
// import imageBoy from './assets/boy.jpg'
// import imageGirl from './assets/girl-min.jpg'

class App extends Component {
  componentDidMount() {
    const girlImage = this.appImage.firstChild
    const boyImage = this.appImage.lastChild

    const appHeadingFirst = this.appContent.children[0].children[0]
    const appHeadingSecond = appHeadingFirst.nextSibling
    const appHeadingThird = appHeadingSecond.nextSibling

    const appPara = this.appContent.children[1]

    const tl = new TimelineLite({ delay: 0.4 })

    console.log(appHeadingFirst, appHeadingSecond, appHeadingThird)

    gsap.to(this.appRef, 0, { css: { visibility: 'visible' } })
    tl.from(girlImage, 1.2, { y: 1000, ease: Power3.easeOut }, 'start')
      // .from(girlImage.firstChild, 2, { css: { scale: 1.3 } }, 0.3)
      .from(boyImage, 1.2, { y: 1000, ease: Power3.easeOut }, 0.4)
    // .from(boyImage.firstChild, 2, { scale: 1.3 }, 0.2)

    tl.staggerFrom(
      [
        appHeadingFirst.firstChild,
        appHeadingSecond.firstChild,
        appHeadingThird.firstChild
      ],
      1,
      {
        y: 50,
        ease: Power3.easeOut,
        delay: 0.8
      },
      0.15,
      'start'
    ).from(appPara, 1, { y: 200, opacity: 0, ease: Power3.easeOut }, 1.4)
  }
  render() {
    return (
      <div className='App' ref={el => (this.appRef = el)}>
        <div className='app-outer-content'>
          <div className='app-content' ref={el => (this.appContent = el)}>
            <h1 className='app-heading'>
              <div className='app-inner-heading'>
                <div>Relieving the burden</div>
              </div>
              <div className='app-inner-heading'>
                <div>of disease caused</div>
              </div>
              <div className='app-inner-heading'>
                <div>by behaviours</div>
              </div>
            </h1>
            <div className='app-para'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              perspiciatis aperiam repellat dolor exercitationem praesentium,
              doloribus distinctio necessitatibus accusamus omnis veritatis
            </div>
          </div>
        </div>
        <div className='app-image' ref={el => (this.appImage = el)}>
          <div className='app-inner-image'>
            {/* <img src={imageGirl} alt='girl' /> */}
          </div>
          <div className='app-inner-image'>
            {/* <img src={imageBoy} alt='boy' /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default App
