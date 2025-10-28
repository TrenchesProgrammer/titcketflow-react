import "../globals.css";

const AutoScroll = () => {
  const items = [1,2,3,4,5,6,7,8];

  return (
    <div className="scroll-wrapper">
      <div className="scroll-track flex items-center">
        {items.concat(items).map((logo, idx) => (
          <p
            key={idx}
            className={`logo-item text-4xl`}
          >
            BRAND
          </p>
        ))}
      </div>
    </div>
  );
};

export default AutoScroll;
