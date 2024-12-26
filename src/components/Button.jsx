function Button(props) {
  return (
    <button className="bg-yellow-100 text-red-700 p-2 rounded-md" {...props}>
      {props.children}
    </button>
  );
}

export default Button;
