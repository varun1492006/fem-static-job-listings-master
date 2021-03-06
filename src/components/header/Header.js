import { useDispatch, useSelector } from "react-redux";
import { jobsAction } from "../../store/jobsSlice";
import useScreenWidth from "../hooks/useScreenWidth";
import styles from "./Header.module.css";

const Header = () => {
  const filters = useSelector((state) => state.jobs.filters);
  const screenWidth = useScreenWidth();
  let margin =
    filters.length > 3 && screenWidth < 520
      ? {
          marginBottom: "9rem",
        }
      : { marginBottom: "7rem" };

  const dispatch = useDispatch();
  const removeFilter = (value) => {
    dispatch(jobsAction.remove(value));
    dispatch(jobsAction.removeFilter(value));
  };
  const clearFilters = () => {
    dispatch(jobsAction.clear());
  };

  return (
    <div className={`${styles.header}`} style={margin}>
      {screenWidth < 1000 && (
        <svg
          className={styles.background}
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="156"
        >
          <path
            fill="#63BABA"
            fillRule="evenodd"
            d="M-86.732 487.429c-51.432-51.425-51.438-134.806-.013-186.237l.013-.013L309.926-95.424c51.441-51.434 134.836-51.434 186.277 0C547.634-44 547.64 39.38 496.216 90.813c-.005.004-.01.008-.013.013L99.543 487.429c-51.44 51.433-134.834 51.433-186.275 0zm-444.692 71.824c-51.432-51.424-51.438-134.806-.013-186.237l.013-.013L-134.766-23.6C-83.325-75.034.07-75.034 51.511-23.6c51.431 51.424 51.437 134.805.013 186.237l-.013.013-396.66 396.603c-51.44 51.433-134.834 51.433-186.275 0z"
          />
        </svg>
      )}
      {screenWidth >= 1000 && (
        <svg
          className={styles.background}
          xmlns="http://www.w3.org/2000/svg"
          width="1366"
          height="156"
        >
          <g fill="#63BABA" fillRule="evenodd">
            <path d="M470.577 563.429c-51.432-51.425-51.438-134.806-.013-186.237l.013-.013L867.235-19.424c51.441-51.434 134.836-51.434 186.276 0 48.811 48.804 51.304 126.392 7.473 178.135l178.158-178.135c51.441-51.434 134.836-51.434 186.277 0 51.431 51.424 51.437 134.805.013 186.237-.005.004-.01.008-.013.013l-396.66 396.603c-51.44 51.433-134.834 51.433-186.275 0-48.812-48.805-51.304-126.394-7.471-178.138L656.853 563.43c-51.441 51.433-134.836 51.433-186.276 0zM342.268 45.605c-51.432-51.425-51.438-134.806-.013-186.237l.013-.013 396.658-396.603c51.441-51.434 134.836-51.434 186.277 0 51.431 51.424 51.437 134.805.013 186.237-.005.004-.01.008-.013.013L528.543 45.605c-51.44 51.433-134.834 51.433-186.275 0zm-444.692 71.824c-51.432-51.424-51.438-134.806-.013-186.237l.013-.013 396.658-396.603c51.441-51.434 134.836-51.434 186.277 0 51.431 51.424 51.437 134.805.013 186.237a80.86 80.86 0 01-.013.013L83.85 117.429c-51.44 51.433-134.834 51.433-186.275 0z" />
          </g>
        </svg>
      )}
      {filters.length !== 0 && (
        <div className={`${styles.filterItems}`}>
          <div className="filtersParent">
            {filters.map((filter, id) => (
              <div className={`${styles.filters} filters`} key={id}>
                <div className={styles.filtersTitle}>{filter.value}</div>
                <div
                  className={styles.close}
                  onClick={() => removeFilter(filter.value)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                  >
                    <path
                      fill="#FFF"
                      fillRule="evenodd"
                      d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.clear} onClick={clearFilters}>
            Clear
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
