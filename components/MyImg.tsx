// Ce composant gère la photo principale de la page d'accueil.
// Il appelle aussi le style autour de celle-ci.

import Image from "next/image";

const MyImg = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="for-morphing">
      <Image
        src={imgSrc}
        alt="portrait de Matthieu"
        width={500}
        height={500}
        priority
      />
    </div>
  );
};

export default MyImg;
