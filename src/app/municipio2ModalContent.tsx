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
      <h2 className="text-lg font-bold mb-2 underline decoration-[var(--yellow)]">
        Município 2
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
        blandit fringilla. Phasellus a viverra velit. Phasellus ex sapien,
        suscipit vitae congue in, tristique vel odio. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Maecenas vehicula a ipsum sed aliquet.
      </p>
      <div className="relative w-full flex justify-center items-center my-4">
        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
          aria-label="Previous image"
        >
          &#8592;
        </button>
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="rounded shadow-md max-h-64 object-contain"
        />
        <button
          onClick={next}
          className="absolute right-0 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
          aria-label="Next image"
        >
          &#8594;
        </button>
      </div>
      <p>
        Maecenas tristique tempor magna, eget vestibulum neque consectetur eget.
        Sed lacus elit, laoreet eget gravida quis, consectetur in nisl.
        Curabitur iaculis laoreet sapien, at ullamcorper ipsum ornare nec.
        Maecenas condimentum, est quis dapibus cursus, velit nunc facilisis sem,
        sed venenatis elit nisl vel lectus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Curabitur placerat finibus ligula, sit amet
        tempor dui congue quis. Maecenas luctus tempor rutrum. Pellentesque
        posuere eget diam venenatis varius. Etiam eget velit semper, viverra
        ligula at, convallis ante. Nunc semper euismod elit, vitae aliquam quam
        bibendum in. Praesent commodo purus tempus elit ullamcorper venenatis.
        Duis at ligula dapibus, blandit ligula eget, euismod tellus. In
        sollicitudin lectus non nisi sagittis, nec efficitur lacus interdum.
        Nunc vitae accumsan augue. Etiam porttitor ligula urna, ac pellentesque
        eros lobortis eget. Duis facilisis, lectus id finibus accumsan, nunc
        odio posuere eros, vel convallis nisi nunc id nisl. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Aenean quis felis tellus. Quisque dui lectus, ullamcorper vitae ante a,
        aliquam posuere tortor. Suspendisse consequat ipsum vestibulum augue
        luctus, in venenatis sem ornare. Etiam imperdiet neque elit, in gravida
        arcu feugiat ac. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Praesent facilisis vehicula quam, at
        tristique felis condimentum at. Nullam blandit tristique lacus in
        dictum. Integer id lectus tincidunt, feugiat mi et, viverra enim. Sed
        pretium quam ac dui interdum, at rhoncus risus congue. Maecenas non
        ipsum condimentum quam pellentesque cursus. Cras vitae suscipit lacus,
        id condimentum purus. Nulla euismod bibendum est id iaculis. Donec nisi
        velit, vulputate ut egestas non, rutrum vitae felis. Nam tincidunt
        iaculis turpis, vel scelerisque odio molestie non. Praesent tortor eros,
        ornare at urna quis, iaculis scelerisque erat. Vivamus vel commodo orci,
        vel consequat justo. Sed eu hendrerit elit. In sodales placerat viverra.
        Cras tincidunt commodo erat at sagittis.
      </p>
      <div className="my-6 w-full flex justify-center">
        <div className="w-full max-w-xl aspect-video">
          <iframe
            className="w-full h-full rounded shadow"
            src="https://www.youtube.com/embed/bw4RcOXGMK0"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Municipio2ModalContent;
