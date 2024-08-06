import PropTypes from "prop-types";

const SearchIcon = ({ styles }) => {
  return (
    <svg
      className={styles}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9.80549"
        cy="9.80553"
        r="7.49047"
        stroke="#C92071"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0153 15.4043L17.9519 18.3334"
        stroke="#C92071"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

SearchIcon.propTypes = {
  styles: PropTypes.string,
};

export default SearchIcon;
