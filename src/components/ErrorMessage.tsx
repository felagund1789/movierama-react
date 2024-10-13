interface Props {
  error: string;
}

const ErrorMessage = ({ error }: Props) => {
  return <h3 className="error-message">{error}</h3>;
};

export default ErrorMessage;
