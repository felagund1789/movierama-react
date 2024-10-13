import "./VoteAverage.css";

interface Props {
  average: number;
}

const getColor = (average: number) => {
  if (Math.round(average * 10) >= 85) {
    return "green";
  } else if (Math.round(average * 10) >= 65) {
    return "orange";
  } else {
    return "red";
  }
};

const VoteAverage = ({ average }: Props) => {
  return (
    <h3 className={`movie-vote-average ${getColor(average)}`}>
      {average.toFixed(1)}
    </h3>
  );
};

export default VoteAverage;
