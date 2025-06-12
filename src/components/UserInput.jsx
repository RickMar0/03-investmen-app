export default function UserInput() {

  function RenderInput({label, placeholder}) {
    return (
      <label>
        {label}
        <input placeholder={placeholder} type = "number"/>
      </label>
    );
  };


  return(
    <div id="user-input">
      <div className="input-group">
        <RenderInput label={"initial investment"} placeholder="0"/>
        <RenderInput label={"annual investment"} placeholder="0"/>
      </div>
      <div className="input-group">
        <RenderInput label={"expected return"} placeholder="0"/>
        <RenderInput label={"duration (years)"} placeholder="0"/>
      </div>
    </div>
  );
}