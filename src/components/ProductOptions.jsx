const ProductOptions = ({ option }) => {
  return (
    <div className="grid gap-1">
      <h3 className="font-semibold text-lg">{option.name}</h3>
      <ul className={`flex gap-2`}>
        {option.values.map((opt) => {
          if (option.type === "color") {
            return (
              <li key={opt.id}>
                <div className="flex">
                  <span
                    className={`rounded-full h-[31px] w-[31px] inline-block`}
                    style={{ backgroundColor: opt.value }}
                  ></span>
                </div>
              </li>
            );
          } else {
            return (
              <li
                key={opt.id}
                className={`rounded h-[46px] w-[46px] border flex items-center justify-center`}
              >
                {opt.name}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ProductOptions;
