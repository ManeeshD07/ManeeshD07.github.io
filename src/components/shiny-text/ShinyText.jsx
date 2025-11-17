import './ShinyText.css'

const ShinyText = ({ text, disabled = false, speed = 5, className = '', as: Component = 'span' }) => {
  const animationDuration = `${speed}s`

  return (
    <Component className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`} style={{ animationDuration }}>
      {text}
    </Component>
  )
}

export default ShinyText
