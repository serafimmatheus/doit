import { BtnGlobal } from "./style";

export const Buttons = ({ children, bgcolor, onClick, id, type }) => {
  return (
    <BtnGlobal type={type} id={id} onClick={onClick} bgcolor={bgcolor}>
      {children}
    </BtnGlobal>
  );
};
