const TextList = ({ description }) => (
  <>
    {description?.map((item, index) => (
      <span
        key={index}
        className={index % 2 === 0 ? 'todSubtitleRegular' : 'todSubtitleBold'}
      >
        {item}
      </span>
    ))}
  </>
);

export default TextList;
