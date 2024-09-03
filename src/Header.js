

import "./Header.css";
import courseName from "./codeart-logo-text-svg.svg";
import logos from "./logos.svg";
import logo from "./codeartlogo.svg";

// function Header() {
//   return (
//     <div className="Header">
//       <div className="header">
//         <div className="navbar">
//           <a href="">Əsas səhifə</a>
//           <a href="">Kurslar</a>
//           <a href="">Haqqımızda</a>
//           <a href="">Xəbərlər</a>
//           <a href="">Bloqlar</a>
//           <a href="">Sual-Cavab</a>
//           <a href="">Əlaqə</a>
//         </div>
//         <select name="lang" className="lang">
//           <option value="az" className="az">
//             AZ
//           </option>
//           <option value="en" className="en">
//             EN
//           </option>
//           <option value="ru" className="ru">
//             RU
//           </option>
//         </select>
//       </div>
//       <div className="search-sign">
//         <div className="left-part">
//           <div className="logo-part">
//             <img src={logo} className="logo" />
//             <img src={courseName} className="name" />
//           </div>
//           <div className="search-input">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="21"
//               height="21"
//               viewBox="0 0 21 21"
//               fill="none"
//             >
//               <path
//                 d="M9.31641 17.25C13.6656 17.25 17.1914 13.7242 17.1914 9.375C17.1914 5.02576 13.6656 1.5 9.31641 1.5C4.96716 1.5 1.44141 5.02576 1.44141 9.375C1.44141 13.7242 4.96716 17.25 9.31641 17.25Z"
//                 stroke="#1D2026"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M14.8845 14.9438L19.4408 19.5002"
//                 stroke="#1D2026"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//             <input type="text" placeholder="Kurs üzrə axtariş..." />
//           </div>
//         </div>
//         <div className="right-part">
//           <img src={logos} />
//           <button className="create-account">Hesab yaradın</button>
//           <button className="sign-in">Daxil olun</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

// import "./Header.css";
// import courseName from "./headerYazi (1).svg";
// import logos from "./logolar.svg";
// import logo from "./logo.svg";

function Header() {
  return (
    <div className="Header">
      <div className="header">
        <div className="navbar">
          <a href="">Əsas səhifə</a>
          <a href="">Kurslar</a>
          <a href="">Haqqımızda</a>
          <a href="">Xəbərlər</a>
          <a href="">Bloqlar</a>
          <a href="">Sual-Cavab</a>
          <a href="">Əlaqə</a>
        </div>
        <select name="lang" className="lang">
          <option value="az" className="az">
            AZ
          </option>
          <option value="en" className="en">
            EN
          </option>
          <option value="ru" className="ru">
            RU
          </option>
        </select>
      </div>
      <div className="search-sign">
        <div className="left-part">
          <div className="logo-part">
            <img src={logo} className="logo" />
            <img src={courseName} className="name" />
          </div>
          <div className="search-input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M9.31641 17.25C13.6656 17.25 17.1914 13.7242 17.1914 9.375C17.1914 5.02576 13.6656 1.5 9.31641 1.5C4.96716 1.5 1.44141 5.02576 1.44141 9.375C1.44141 13.7242 4.96716 17.25 9.31641 17.25Z"
                stroke="#1D2026"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.8845 14.9438L19.4408 19.5002"
                stroke="#1D2026"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input type="text" placeholder="Kurs üzrə axtariş..." />
          </div>
        </div>
        <div className="right-part">
          <img src={logos} className="logos"/>
          <button className="create-account">Hesab yaradın</button>
          <button className="sign-in">Daxil olun</button>
        </div>
      </div>
    </div>
  );
}

export default Header;