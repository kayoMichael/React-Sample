import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

interface Props {
  onClick: () => void;
}
function Like({ onClick }: Props) {
  const [status, setStatus] = useState(false);

  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  const handleClick = () => {
    const newPerson = {
      ...person,
      lastName: "Helllo",
    };
    setPerson(newPerson);
  };
  const [isLoading, setLoading] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) {
    return <IoIosHeart color="ff6b81" size={20} onClick={toggle} />;
  }
  return (
    <IoIosHeartEmpty
      color="ff6b81"
      size={20}
      onClick={() => {
        toggle();
      }}
    />
  );
}

export default Like;
