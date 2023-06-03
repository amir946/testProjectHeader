import { FC } from "react";


type Props = {
  setHover: React.Dispatch<React.SetStateAction<boolean>>;
};
const SearchBox: FC<Props> = ({ setHover }) => {
  
    return (
      <>
        <div className="flex justify-center">
          <form style={{ width: "83%" }}>
            <div className="relative DivRootSearch mt-4">
              <button
                type="submit"
                className="text-white btnSearch absolute ml-4 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                <svg
                  className="iconSearch"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7547 22.5332L17.7906 16.5691C19.4159 14.5814 20.215 12.045 20.0226 9.48452C19.8302 6.9241 18.6611 4.53556 16.757 2.81297C14.8529 1.09037 12.3596 0.165513 9.79279 0.229693C7.22595 0.293872 4.78197 1.34218 2.96637 3.15778C1.15077 4.97337 0.102465 7.41735 0.0382863 9.98419C-0.0258928 12.551 0.898965 15.0444 2.62156 16.9484C4.34415 18.8525 6.73269 20.0216 9.29312 20.214C11.8535 20.4064 14.39 19.6073 16.3777 17.982L22.3418 23.9461C22.5303 24.1281 22.7827 24.2288 23.0447 24.2265C23.3066 24.2242 23.5572 24.1192 23.7425 23.9339C23.9278 23.7487 24.0328 23.498 24.0351 23.2361C24.0374 22.9741 23.9367 22.7217 23.7547 22.5332ZM10.0589 18.2438C8.47798 18.2438 6.93253 17.775 5.61801 16.8966C4.3035 16.0183 3.27896 14.7699 2.67396 13.3093C2.06896 11.8487 1.91066 10.2415 2.21909 8.69089C2.52752 7.14032 3.28882 5.71603 4.40672 4.59812C5.52462 3.48022 6.94891 2.71892 8.49949 2.41049C10.0501 2.10207 11.6573 2.26036 13.1179 2.86537C14.5785 3.47037 15.8269 4.49491 16.7052 5.80942C17.5836 7.12393 18.0524 8.66938 18.0524 10.2503C18.05 12.3696 17.2071 14.4014 15.7085 15.8999C14.21 17.3985 12.1782 18.2414 10.0589 18.2438Z"
                    fill="white"
                  />
                </svg>
                <svg
                  className="block xl:hidden divIconMenu"
                  width="29"
                  height="25"
                  viewBox="0 0 29 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0269775 14.8999H28.027V10.8999H0.0269775V14.8999ZM0.0269775 24.8999H28.027V20.8999H0.0269775V24.8999ZM0.0269775 0.899902V4.8999H28.027V0.899902H0.0269775Z"
                    fill="#15121D"
                  />
                </svg>
              </button>
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm
               text-gray-900 
                focus:ring-blue-500 
               focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="دنبال چی می گردی ؟"
                required
              />
            </div>
          </form>
        </div>
      </>
    );
};
export default SearchBox;
