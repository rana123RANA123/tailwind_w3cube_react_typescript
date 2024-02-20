type Hello = {
    name: String
}

function Header(props:Hello) {
  return (
    <div className="text-4xl text-red-700 underline font-bold">Hello {props.name}</div>
  )
}

export default Header