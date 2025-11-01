import { IKImage } from "imagekitio-react";

const Image = ({src, alt, className, w, h }) => {
  return (
    <IKImage
      
      
      src={src}
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
      alt={alt}
      loading="lazy"
      className={className}
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default Image;