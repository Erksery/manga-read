import { useEffect, useRef, useState } from "react";
import "./ModalSearch-CSS.css";
import "./Transition-ModalSearch.css";
import { Icon48CancelOutline } from "@vkontakte/icons";
import { Transition } from "react-transition-group";
import GetSearchManga from "../../GetSearchManga.jsx";
function ModalSearch({ modalSearch, setModalSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const searchInputRef = useRef();

  return (
    <>
      <Transition in={modalSearch} timeout={500}>
        {(modalSearch) => (
          <>
            <div
              onClick={() => {
                setModalSearch(false);
                setSearchValue("");
              }}
              className={`BackgroundClose ${modalSearch}`}
            />
            <div className={`SearchModal ${modalSearch}`}>
              <div className="Input-wrap">
                <input
                  ref={searchInputRef}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder={`Опять работать?`}
                />
                {searchValue && (
                  <button
                    onClick={() => {
                      setSearchValue("");
                      searchInputRef.current.focus();
                    }}
                  >
                    <Icon48CancelOutline width={26} />
                  </button>
                )}
              </div>
              <div className="Search-dropdown">
                <GetSearchManga searchValue={searchValue} />
              </div>
            </div>
          </>
        )}
      </Transition>
    </>
  );
}

export default ModalSearch;
