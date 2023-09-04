const Iframe = ({ src }) => {
  return (
    <div className="padding-section-y mx-auto w-[91%] lg:w-[85%] z-10">
      <iframe
        src={src}
        width="100%"
        height="600"
        style={{ border: "0" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded"
      />
    </div>
  );
};

export default Iframe;
