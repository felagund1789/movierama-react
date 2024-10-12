import "./GenreTag.css";

interface Props {
  children: string;
}

const GenreTag = ({ children }: Props) => {
  return <div className="genre-tag">{children}</div>;
};

export default GenreTag;
