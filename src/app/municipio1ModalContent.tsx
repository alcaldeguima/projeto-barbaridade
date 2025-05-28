import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1622825853012-7ea64affd29a",
  "https://images.unsplash.com/photo-1692278079519-58f37fd4b015",
  "https://images.unsplash.com/photo-1672951403603-6786ef4b23bf",
];

const Municipio2ModalContent = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 underline decoration-[var(--yellow)]">
        Município 1!!
      </h2>
      <img
        src="https://images.unsplash.com/photo-1622825853012-7ea64affd29a"
        alt="Placeholder"
        className="my-4 rounded shadow-md"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        ullamcorper velit id tellus consequat, quis lobortis urna condimentum.
        Phasellus dui ante, efficitur ut orci eget, ultrices laoreet erat.
        Integer egestas sit amet nulla id lacinia. Etiam posuere fermentum
        massa, vel auctor massa. Aenean efficitur mauris pretium, ullamcorper
        est sit amet, rhoncus nisl. Praesent eu ante eu neque pretium posuere ac
        ut sapien. Nam lorem neque, pulvinar sit amet placerat id, facilisis nec
        nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        nec libero dictum nunc porttitor viverra. Aliquam at fermentum urna.
        Phasellus libero urna, faucibus ac maximus tincidunt, maximus vel nunc.
        Mauris consequat ultricies scelerisque. Proin mollis elit quis mauris
        blandit fringilla. 
      </p>
    </div>
  );
};

export default Municipio2ModalContent;
