import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon, link }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            <a
              href={link}
              target="_blank" // Abrir en una nueva pestaña
              rel="noopener noreferrer" // Seguridad al abrir enlaces externos
              className=" flex  "
            >
              {/* Radial gradient hover effect */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                  opacity: hoverOpacity,
                  background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                }}
              />
              <TiLocationArrow className="relative z-20" />
              <p className="relative z-20">Show more</p>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className=" pb-52" id="features">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Pokémon Trading Card Game (TCG)
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Is a collectible card game where trainers build decks to compete in
          strategic battles. With constant expansions, new mechanics and
          impressive cards, Pokémon TCG is perfect for collectors and players
          looking for excitement and challenge.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              paldean <b>fates</b>
            </>
          }
          description="It brings together legendaries such as Koraidon and Miraidon, highlighting the rich history of Paldea with epic illustrations and special effects."
          isComingSoon
          link="https://tcg.pokemon.com/en-us/galleries/paldean-fates/"
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                paradox <b>rift</b>
              </>
            }
            description="Explore the past and future with Paradox Pokémon such as Roaring Moon and Iron Valiant, offering unique strategies and time and space themes."
            isComingSoon
            link="https://tcg.pokemon.com/en-us/expansions/paradox-rift/"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                paldean <b>evolved</b>
              </>
            }
            description="Celebrate the Paldea region with cards of Sprigatito, Fuecoco, and Quaxly, along with their evolutions and new Teracristal mechanics."
            isComingSoon
            link="https://tcg.pokemon.com/en-us/expansions/paldea-evolved/"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                fusion <b>strike</b>
              </>
            }
            description="Introduces the Fusion style, where collaboration between Pokémon creates unique combos. Mew VMAX and Genesect V are highlighted in this vibrant and tactical expansion."
            isComingSoon
            link="https://www.pokellector.com/Fusion-Strike-Expansion/"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-5.mp4"
            title={
              <>
                twilight <b>masquerade</b>
              </>
            }
            description="Mysteries and elegance combine in Twilight Masquerade, an expansion focused on Psychic and Sinister Pokémon like Gengar and Umbreon. Perfect for cunning strategies and lovers of cards with sophisticated designs."
            isComingSoon
            link="https://tcg.pokemon.com/en-us/expansions/twilight-masquerade/"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-cover bg-center bg-[url('img/soon.jpg')] p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re expansions co<b>m</b>ing s<b>o</b>on.
            </h1>

            {/* <TiLocationArrow className="m-5 scale-[5] self-end" /> */}
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
