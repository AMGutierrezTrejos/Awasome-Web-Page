import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} className="w-full h-full object-cover" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg py-24 text-blue-50 sm:overflow-hidden">
        {/* Contenedor para las imágenes */}
        <div className="absolute -left-20 top-0 hidden sm:block lg:left-20 lg:w-96">
          {/* Imagen 2: contact-2 (sin cambios) */}
          <ImageClipBox
            src="/img/contact-2.jpg"
            clipClass="contact-clip-path-1 w-[130%]"
          />

          {/* Imagen 1: contact-1 (más alta y ajustada con translate-y) */}
          <ImageClipBox
            src="/img/contact-1.jpg"
            clipClass="contact-clip-path-2 lg:translate-y-10 translate-y-40 w-[120%]" // Ajusta translate-y para más altura
          />
        </div>

        {/* Imagen adicional: swordman */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman.jpg"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        {/* Contenido del título y el botón */}
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Maricio Gutierrez
          </p>

          <AnimatedTitle
            title="pokemon has <br /> many topics <br /> we can discuss <br /> t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button
            title="contact us"
            containerClass="mt-10 cursor-pointer"
            mailTo="m.gutierrez7@hotmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
