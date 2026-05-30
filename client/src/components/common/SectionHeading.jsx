const SectionHeading = ({
  title,
  subtitle,
}) => {
  return (
    <div className="mb-10">

      <h2
        className="
        text-4xl
        font-bold
      "
      >
        {title}
      </h2>

      <p
        className="
        mt-2
        text-gray-600
      "
      >
        {subtitle}
      </p>

    </div>
  );
};

export default SectionHeading;