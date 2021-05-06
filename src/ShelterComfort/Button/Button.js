
function Button({text, className, onclick}) {
    return (
          <button className={className} onClick={onclick}>{text}</button>
    );
  }
  
  export default Button;