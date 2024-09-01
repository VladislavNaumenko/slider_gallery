import React, { useState } from 'react';
import style from './style.scss';
import classNames from 'classnames';

const input = [{
  src: "../../../assets/banner.png",
  caption: "Первая",
},
  {
    src: "../../../assets/banner.png",
    caption: "Вторая",
  },
  {
    src: "../../../assets/banner.png",
    caption: "Третья",
  }];

const  Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const getNewSlideIndex = (step: number) => {
    const numberSlide = input.length;

    let newSlideIndex = slideIndex + step;

    if (newSlideIndex >= numberSlide) newSlideIndex = 0;
    else if (newSlideIndex < 0) newSlideIndex = numberSlide - 1;

    return newSlideIndex;
  };
  const backward = () => setSlideIndex(getNewSlideIndex(-1));
  const forward = () => setSlideIndex(getNewSlideIndex(1));
  return (
    <div className={style["lp-slideshow"]}>
      <div className={style["container"]}>
        {input.map((image, index) => {
          return (
            <div
              key={index}
              className={classNames(style.slide, {[style.active]: slideIndex === index})}>
              <div className={style["number-text"]}>
                {`${index + 1} / ${input.length}`}
              </div>
              <img className={style["image"]} src={image.src} alt={image.caption} />
              <div className={style["caption-text"]}>{image.caption}</div>
            </div>
          );
        })}

        <span className={style["prev"]} onClick={backward}>
            ❮
          </span>
        <span className={style["next"]} onClick={forward}>
            ❯
          </span>
      </div>

      <div className={style["dot-container"]}>
        {input.map((_, index) => {
          return (
            <span
              key={index}
              className={classNames(style.dot, {[style.active]: slideIndex === index})}
              onClick={() => setSlideIndex(index)}
            />
          );
        })}
      </div>
    </div>
  )
};

export {Slider};
