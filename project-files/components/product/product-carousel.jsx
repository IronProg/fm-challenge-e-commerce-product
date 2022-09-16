import Image from "next/image";
import { useState } from "react";
import IconNext from "../svg/icon-next";
import IconPrevious from "../svg/icon-previous";
import classes from "./product-carousel.module.css";
import ProductLightBox from "./product-lightbox";

export default function Carousel(props) {
  const { imgUrl, imgNumber } = props;
  const [imageNum, setImageNum] = useState(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  function handleImages(isNext) {
    if (isNext) {
      if (imageNum === imgNumber) {
        setImageNum(1);
      } else {
        setImageNum((prev) => prev + 1);
      }
    } else {
      if (imageNum === 1) {
        setImageNum(imgNumber);
      } else {
        setImageNum((prev) => prev - 1);
      }
    }
  }

  return (
    <>
      <div className={classes.carousel}>
        <div className={classes.wrapper}>
          <div className={classes['image-container']}>
            <div className={classes.image}>
              <Image
                src={`${imgUrl}${imageNum}.jpg`}
                width={1040}
                height={1040}
                alt='Fall style sneakers'
                onClick={() => setIsLightboxOpen(!isLightboxOpen)}
              />
            </div>
          </div>
          <div className={classes['thumb-stack']}>
            <div
              className={`${classes.thumbnail} ${
                imageNum === 1 ? classes.active : ""
              }`}
              onClick={() => setImageNum(1)}
            >
              <Image src={`${imgUrl}1-thumbnail.jpg`} width={90} height={90} alt='Fall style sneakers' />
            </div>
            <div
              className={`${classes.thumbnail} ${
                imageNum === 2 ? classes.active : ""
              }`}
              onClick={() => setImageNum(2)}
            >
              <Image src={`${imgUrl}2-thumbnail.jpg`} width={90} height={90} alt='Fall style sneakers' />
            </div>
            <div
              className={`${classes.thumbnail} ${
                imageNum === 3 ? classes.active : ""
              }`}
              onClick={() => setImageNum(3)}
            >
              <Image src={`${imgUrl}3-thumbnail.jpg`} width={90} height={90} alt='Fall style sneakers' />
            </div>
            <div
              className={`${classes.thumbnail} ${
                imageNum === 4 ? classes.active : ""
              }`}
              onClick={() => setImageNum(4)}
            >
              <Image src={`${imgUrl}4-thumbnail.jpg`} width={90} height={90} alt='Fall style sneakers' />
            </div>
          </div>
        </div>
        <button
          class={classes.arrow + ' left-0'}
          onClick={() => handleImages(false)}
        >
          <div>
            <IconPrevious />
          </div>
        </button>
        <button
          class={classes.arrow + ' right-0'}
          onClick={() => handleImages(true)}
        >
          <div>
            <IconNext />
          </div>
        </button>
      </div>
      {isLightboxOpen && <ProductLightBox imgUrl={props.imgUrl} imageNum={imageNum} handleImages={handleImages} setImageNum={setImageNum} onClose={() => setIsLightboxOpen(false)} />}
    </>
  );
}
