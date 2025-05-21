function CreatorWithBrand() {
  const images = [
    "https://www.viralnation.com/hs-fs/hubfs/ViralNation_January2025/images/Dalton_x_Chegg.webp?width=1024&height=1438&name=Dalton_x_Chegg.webp",
    "https://www.viralnation.com/hs-fs/hubfs/ViralNation_January2025/images/image%20(1).webp?width=684&height=960&name=image%20(1).webp",
    "https://www.viralnation.com/hs-fs/hubfs/ViralNation_January2025/images/LaToya_x_Keys_Soulcare.webp?width=1024&height=1438&name=LaToya_x_Keys_Soulcare.webp",
    "https://www.viralnation.com/hs-fs/hubfs/ViralNation_January2025/images/Justin_x_Universal_2.webp?width=1024&height=1438&name=Justin_x_Universal_2.webp",
  ];
  return (
    <div className="flex items-center gap-4 w-full max-w-full">
      {images.map((image, index) => (
        <div key={index} className="h-[500px] min-w-[300px] md:w-full">
          <img
            src={image}
            alt={`creator_x_brand_${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default CreatorWithBrand;
