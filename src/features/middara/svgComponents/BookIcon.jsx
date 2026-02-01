import Book from "../assets/svgs/book.svg?react";

const defaultSize = 48;

const BookIcon = ({
  fillColour = "#fff",
  width = defaultSize,
  height = defaultSize,
}) => {
  return <Book fill={fillColour} width={width} height={height} />;
};

export default BookIcon;
