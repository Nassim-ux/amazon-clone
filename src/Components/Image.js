import useImage from "./useImage";

const Image = ({ fileName, alt, className, ...rest }) => {
  const { loading, error, image } = useImage(fileName);

  if (error) return <span>{alt}</span>;

  return (
    <>
      {loading ? (
        <span>loading</span>
      ) : (
        <img
          className={`Image${
            className ? className.padStart(className.length + 1) : ""
          }`}
          src={image}
          alt={alt}
          {...rest}
        />
      )}
    </>
  );
};

export default Image;
