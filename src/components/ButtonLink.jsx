export default function ButtonLink({
  href,
  variant = 'primary',
  icon,
  children,
  ...props
}) {
  return (
    <a href={href} className={`btn btn-${variant}`} {...props}>
      {children}
      {icon && <i className={icon} aria-hidden="true" />}
    </a>
  )
}
