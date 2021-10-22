import styled from "styled-components";

const Input = styled.input.attrs({
  type: "checkbox",
  id: "theme",
})`
  display: none;
  &:checked ~ .switch__bar {
    background: #334257;
  }

  &:checked ~ .switch__bar > .switch__icon {
    transform: translate(150%, -50%);
    background: #141c27;
    background-image: url("https://raw.githubusercontent.com/DavidMarioLC/practicandoCosas/bb412933fe9e9016e5fca38f177d5fcf6e9d364b/moon.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const SwitchBar = styled.div`
  width: 60px;
  height: 15px;

  border-radius: 15px;
  position: relative;
  background: #c8c6c6;
`;

const SwitchIcon = styled.div`
  position: absolute;
  top: 50%;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #df7861;
  transform: translate(0%, -50%);
  background-image: url("https://raw.githubusercontent.com/DavidMarioLC/practicandoCosas/bb412933fe9e9016e5fca38f177d5fcf6e9d364b/sun.svg");
  background-repeat: no-repeat;
  background-position: center;
  transition: all 250ms linear;
`;

const SwitchTheme = ({ changeTheme }) => {
  return (
    <label htmlFor="theme">
      <Input onChange={changeTheme} />
      <SwitchBar className="switch__bar">
        <SwitchIcon className="switch__icon" />
      </SwitchBar>
    </label>
  );
};

export default SwitchTheme;
