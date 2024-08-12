import PropTypes from "prop-types";

const Section = ({ title, titleAlign, link, children, style }) => {
  return (
    <section className="container">
      <div className="flex items-center justify-between mb-6 w-full">
        <h1
          className={`text-xl font-bold text-darkgray ${
            titleAlign === "center" ? "mx-auto" : ""
          }`}
        >
          {title}
        </h1>
        {link && (
          <a
            href={link.href}
            className="text-primary flex items-center gap-2 w-fit"
          >
            {link.text}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 16 16"
            >
              <path
                fill="#b70101"
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </a>
        )}
      </div>
      <div className={style}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.string,
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

export default Section;
