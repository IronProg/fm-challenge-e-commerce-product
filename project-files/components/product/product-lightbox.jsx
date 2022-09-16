import Image from "next/image";
import IconNext from "../svg/icon-next";
import IconPrevious from "../svg/icon-previous";
import classes from "./product-lightbox.module.css";

export default function ProductLightBox(props) {
  const { onClose, imgUrl, imageNum, handleImages, setImageNum } = props;
  return (
    <div
      className={classes.lightbox}
      onClick={onClose}
    >
      <div
        className={classes.wrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes['image-container']}>
          <div className={classes.image}>
            <Image
              className="object-fill"
              src={`${imgUrl}${imageNum}.jpg`}
              alt='Fall style sneakers'
              width={940}
              height={840}
            />
          </div>
          <button
            className={`${classes.arrow} left-[-15px]`}
            onClick={(e) => handleImages(false)}
          >
            <div>
              <IconPrevious />
            </div>
          </button>
          <button
            className={`${classes.arrow} right-[-15px]`}
            onClick={(e) => handleImages(true)}
          >
            <div>
              <IconNext />
            </div>
          </button>
        </div>
        <div className={classes['thumb-stack']}>
          <div
            className={`${classes.thumbnail} ${
              imageNum === 1 ? classes.active : ""
            }`}
            onClick={() => setImageNum(1)}
          >
            <Image src={`${imgUrl}1-thumbnail.jpg`} alt='Fall style sneakers' width={90} height={90} />
          </div>
          <div
            className={`${classes.thumbnail} ${
              imageNum === 2 ? classes.active : ""
            }`}
            onClick={() => setImageNum(2)}
          >
            <Image src={`${imgUrl}2-thumbnail.jpg`} alt='Fall style sneakers' width={90} height={90} />
          </div>
          <div
            className={`${classes.thumbnail} ${
              imageNum === 3 ? classes.active : ""
            }`}
            onClick={() => setImageNum(3)}
          >
            <Image src={`${imgUrl}3-thumbnail.jpg`} alt='Fall style sneakers' width={90} height={90} />
          </div>
          <div
            className={`${classes.thumbnail} ${
              imageNum === 4 ? classes.active : ""
            }`}
            onClick={() => setImageNum(4)}
          >
            <Image src={`${imgUrl}4-thumbnail.jpg`} alt='Fall style sneakers' width={90} height={90} />
          </div>
        </div>
      </div>
    </div>
  );
}
