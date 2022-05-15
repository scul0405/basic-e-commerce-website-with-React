import './button.scss'
const Button = ({title,className, ...otherProps}) => {
    console.log(className)
  return (
    <button className={className + ' btn'} {...otherProps}>
        {title}
    </button>
  )
}

export default Button