import PropTypes from "prop-types";

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-lg">{title}</h1>
      <ul className="grid gap-2">
        {options.map((option) => (
          <li key={option.id} className="flex items-center gap-2">
            <input
              type={inputType}
              id={option.id}
              name={title}
              value={option.value}
              className={`${inputType} ${
                inputType === "radio" ? "radio-primary" : "checkbox-primary"
              }`}
            />
            <label htmlFor={option.id}>{option.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default FilterGroup;
