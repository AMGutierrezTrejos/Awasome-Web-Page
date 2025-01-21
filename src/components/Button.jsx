import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass, mailTo }) => {
  const content = (
    <>
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>
      {rightIcon}
    </>
  );

  if (mailTo) {
    // Si mailTo está definido, envolver el botón en un enlace mailto
    return (
      <a
        href={`mailto:${mailTo}`}
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
      >
        {content}
      </a>
    );
  }

  // Si no es un mailto, se usa un botón normal
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {content}
    </button>
  );
};

export default Button;
