import Button from './Button.js';
import HandIcon from './HandIcon.js';

function HandButton({ value = 'rock', onClick }) {
  const handleClick = () => onClick(value);
  return (
    <Button onClick={handleClick}>
      <HandIcon value={value} />
    </Button>
  );
}

export default HandButton;
