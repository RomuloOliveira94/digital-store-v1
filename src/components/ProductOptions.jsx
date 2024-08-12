const ProductOptions = ({ option, optionsSelected, setOptionsSelected }) => {
  const handleSelect = (id, type) => {
    if (optionsSelected.some((opt) => opt.id === id && opt.type === type)) {
      const newOptions = optionsSelected.filter(
        (opt) => opt.id !== id || opt.type !== type
      );
      setOptionsSelected([...newOptions]);
      return;
    }

    if (optionsSelected.some((opt) => opt.id !== id && opt.type === type)) {
      const newOptions = optionsSelected.filter((opt) => opt.type !== type);
      newOptions.push({
        id,
        type: option.type,
      });
      setOptionsSelected([...newOptions]);
      return;
    }

    if (optionsSelected.some((opt) => opt.type === type)) {
      return;
    }

    optionsSelected.push({
      id,
      type: option.type,
    });

    setOptionsSelected([...optionsSelected]);
  };

  return (
    <div className="grid gap-2">
      <h3 className="font-semibold text-gray-500">{option.name}:</h3>
      <ul className={`flex gap-2`}>
        {option.values.map((opt) => {
          if (option.type === "color") {
            return (
              <li key={opt.id}>
                <div className="flex items-center h-full w-full">
                  <div
                    className={
                      optionsSelected.some(
                        (o) => o.id === opt.id && o.type === option.type
                      )
                        ? `border-2 border-primary rounded-full p-0.5 flex items-center justify-center`
                        : `rounded-full flex items-center justify-center`
                    }
                  >
                    <span
                      className={`rounded-full h-[31px] w-[31px] inline-block shadow-sm`}
                      onClick={() => handleSelect(opt.id, option.type)}
                      style={{ backgroundColor: opt.value }}
                    ></span>
                  </div>
                </div>
              </li>
            );
          } else {
            return (
              <li
                key={opt.id}
                className={
                  optionsSelected.some(
                    (o) => o.id === opt.id && o.type === option.type
                  )
                    ? `flex items-center justify-center bg-primary text-white rounded`
                    : `rounded flex items-center justify-center`
                }
              >
                <span
                  className={`rounded h-[46px] w-[46px] border flex items-center justify-center`}
                  onClick={() => handleSelect(opt.id, option.type)}
                >
                  {opt.name}
                </span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ProductOptions;
