import Carousel from "./product-carousel";
import ProductInfo from "./product-info";

import classes from "./product-card.module.css";

export default function ProductCard(props) {
  return (
    <div className={classes.product}>
      <Carousel
        imgUrl={props.product.imgUrl}
        imgNumber={props.product.imgNumber}
      />
      <ProductInfo product={props.product} />
    </div>
  );
}
