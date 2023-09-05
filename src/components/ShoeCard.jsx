function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }) {
  function handleClick() {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  }
  return (
    <div
      className={`border-2 rounded-xl  ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 dark:shadow-sm dark:shadow-red-400`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card dark:bg-cardark bg-center bg-cover sm:w-40 sm:h-40 rounded-x1 max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        ></img>
      </div>
    </div>
  );
}

export default ShoeCard;
