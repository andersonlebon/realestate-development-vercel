

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  link: string;
  className?: string;

}

const Button = ({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: ButtonProps;
}) => {
  const { type} = props;
  return (
    <button
      className={`
        ${type === 'submit' ? 'bg-blue-500' : 'bg-green-500' }
        hover:bg-green-700
        text-white
        font-bold
        py-2
        px-4
        rounded
      ${props.className}`}
    >
      {children}
    </button>
  );
}