const React = require('react');
const { bool, node, func } = React.PropTypes;

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: bool.isRequired,
  children: node.isRequired,
  onClick: func.isRequired
}

export default Link