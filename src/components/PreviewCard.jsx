import { useState } from "react";
import { useProduct } from "../contexts/ProductsContexts";

function PreviewCard() {
  const { currentProd } = useProduct();
  const [bigImg, setBigImg] = useState("");
  return (
    <div className="flex md:flex-row flex-col gap-3">
      <div className="md:flex-col flex gap-3 md:order-first order-last">
        <img
          src={`https://${currentProd.imageUrl}`}
          alt="mainImg"
          className="object-contain rounded-md "
          width={60}
          height={80}
          onMouseEnter={() =>
            bigImg !== currentProd.imageUrl && setBigImg(currentProd.imageUrl)
          }
        />
        {currentProd.additionalImageUrls?.map((additImg) => (
          <img
            className="object-contain rounded-md "
            src={`https://${additImg}`}
            alt="additionalImg"
            key={additImg}
            width={60}
            height={80}
            onMouseEnter={() => bigImg !== additImg && setBigImg(additImg)}
          />
        ))}
      </div>
      <div>
        <img
          src={`https://${bigImg ? bigImg : currentProd.imageUrl}`}
          alt="BigImg"
          className="object-contain rounded-md"
          width={512}
        />
      </div>
    </div>
  );
}

export default PreviewCard;
