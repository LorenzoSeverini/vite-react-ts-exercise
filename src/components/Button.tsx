import { ReactNode } from "react";

interface Props {
    children: ReactNode; // or string
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
    onClick: () => void;
}

// Button components
function Button({ children, color = 'primary', onClick } : Props) {
  return (
    <div className="text-center">
        <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button