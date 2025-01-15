import { HiOutlineSearch } from "react-icons/hi";
import "./NavSearchBox.css";

const NavSearchBox = () => {
  return (
    <div className="search-box-container">
      <input className="search-box" type="text" placeholder="검색" />
      <button className="search-button">
        <HiOutlineSearch className="search-icon" />
      </button>
    </div>
  );
};

export default NavSearchBox;
