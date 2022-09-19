import ProductCard from "../components/product/product-card";

const item = {
  id: "i1",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
  actualPrice: 125,
  price: 250,
  discount: "50%",
  imgUrl: "/images/image-product-",
  imgNumber: 4,
};

export default function Home() {
  return (
    <main className="md:flex md:mt-20 md:justify-center md:items-center">
      <ProductCard product={item} />
    </main>
  );
}
