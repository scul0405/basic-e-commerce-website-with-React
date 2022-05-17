import './button.scss'
const Button = ({title,className, ...otherProps}) => {
  return (
    <button className={className + ' btn'} {...otherProps}>
        {title}
    </button>
  )
}

export default Button