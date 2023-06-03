import { FC, useEffect, useState } from "react";
import style from "./contentproductmenu.module.css";
import img from "./Picture7.png";
import Image from "next/image";

const ContentProductMe: FC = () => {
  const [hover, setHover] = useState<boolean>(true);
  const [getProducts, setProducts] = useState<any[]>([]);
  const [getHomeAppliancs, setHomeAppliancs] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataProducts = await getData();
        const categories = dataProducts.categories.filter(
          (p: { id: number }) => p.id === 3,
        );
        setProducts(categories);
        const categHA = dataProducts.categories.filter(
          (p: { id: number }) => p.id === 61,
        );
        setHomeAppliancs(categHA);
        console.log(dataProducts);
        console.log(getProducts);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  const handleDisplayPD = () => {
    setHover(true);
  };
  const handleDisplayHA = () => {
    setHover(false);
  };

  return (
    <>
      {hover ? (
        <>
          {getProducts.map((categories) => (
            <div key={categories.id} id={style.DivRootPrMe} className="z-30">
              <div className="shadow-2xl grid grid-cols-7 ">
                <div className="flex justify-center ">
                  <ul className="mt-5">
                    <li onMouseEnter={handleDisplayPD}>
                      کالای دیجیتال 
                      <span className={style.iconMobile}>
                        <svg
                          width="14"
                          height="23"
                          viewBox="0 0 14 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 1.07422H3C1.89543 1.07422 1 1.96965 1 3.07422V19.0742C1 20.1788 1.89543 21.0742 3 21.0742H11C12.1046 21.0742 13 20.1788 13 19.0742V3.07422C13 1.96965 12.1046 1.07422 11 1.07422Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          className={style.IconMob}
                          width="4"
                          height="3"
                          viewBox="0 0 4 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.95001 1.07422H2.05001"
                            stroke="#9773FF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </li>
                    <li className="mt-1" onMouseEnter={handleDisplayHA}>
                      لوازم خانگی
                      <span className={style.iconMobile}>
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.94925 13.0742V11.0742M4.94925 19.0742H12.9492M8.94925 13.0742V19.0742M3.82125 1.50222L1.18125 10.3022C1.15447 10.3917 1.14896 10.4863 1.16516 10.5783C1.18136 10.6703 1.21883 10.7572 1.27457 10.8322C1.33032 10.9072 1.40281 10.9681 1.48626 11.0101C1.56971 11.0521 1.66182 11.0741 1.75525 11.0742H16.1432C16.2367 11.0741 16.3288 11.0521 16.4122 11.0101C16.4957 10.9681 16.5682 10.9072 16.6239 10.8322C16.6797 10.7572 16.7171 10.6703 16.7333 10.5783C16.7495 10.4863 16.744 10.3917 16.7172 10.3022L14.0772 1.50222C14.0403 1.37866 13.9645 1.27031 13.8611 1.19321C13.7577 1.11612 13.6322 1.07439 13.5033 1.07422H4.39525C4.26628 1.07439 4.1408 1.11612 4.03741 1.19321C3.93402 1.27031 3.85822 1.37866 3.82125 1.50222V1.50222Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </li>
                  </ul>
                </div>
                <hr className={style.Hr} />
                <>
                  {" "}
                  <div className=" col-span-5 flex flex-wrap gap-8 mt-5 mr-4">
                    {" "}
                    {categories.sub_category.map((_sc: any) => (
                      <>
                        {" "}
                        <div key={_sc.id}>
                          <span className={style.titlePM}>
                            {" "}
                            <span>
                              <svg
                                width="15"
                                height="18"
                                viewBox="0 0 15 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.47509 8.3747C5.2722 6.95883 7.38654 4.0646 8.08766 0.574219C8.51618 4.0646 10.4023 6.95883 13.0888 8.3747C13.6117 8.65114 14.9227 9.07422 14.9227 9.07422C14.9227 9.07422 13.5786 9.4973 13.0342 9.77374C10.2371 11.1896 8.12272 14.0838 7.42383 17.5742C6.9954 14.0814 5.10709 11.1872 2.42056 9.77133C1.89757 9.4973 0.586638 9.07181 0.586638 9.07181C0.586638 9.07181 1.93071 8.64874 2.47509 8.3747Z"
                                  fill="#9773FF"
                                />
                              </svg>
                            </span>
                            <span>{_sc.name}</span>
                            <span>
                              <svg
                                width="5"
                                height="9"
                                viewBox="0 0 5 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.22832 0.864973C4.2282 0.997536 4.17545 1.12463 4.08165 1.21831L1.52432 3.77564C1.44691 3.85302 1.38551 3.9449 1.34362 4.04602C1.30172 4.14714 1.28016 4.25552 1.28016 4.36497C1.28016 4.47443 1.30172 4.58281 1.34362 4.68393C1.38551 4.78505 1.44691 4.87692 1.52432 4.95431L4.07832 7.50831C4.1694 7.60261 4.21979 7.72891 4.21866 7.86001C4.21752 7.9911 4.16493 8.11651 4.07223 8.20921C3.97952 8.30192 3.85412 8.3545 3.72302 8.35564C3.59192 8.35678 3.46562 8.30638 3.37132 8.21531L0.817318 5.66331C0.473906 5.31922 0.281036 4.85294 0.281036 4.36681C0.281036 3.88067 0.473906 3.41439 0.817318 3.07031L3.37465 0.511306C3.44458 0.441334 3.53369 0.393677 3.63071 0.374366C3.72773 0.355055 3.8283 0.364957 3.91969 0.402819C4.01108 0.440682 4.08919 0.504803 4.14413 0.587069C4.19906 0.669335 4.22836 0.766049 4.22832 0.864973Z"
                                  fill="#9773FF"
                                />
                              </svg>
                            </span>
                          </span>
                          {_sc.sub_category.map((_sc: any, index: any) => (
                            <>
                              <p key={_sc.id} className={style.namePM}>
                                {_sc.name}{" "}
                              </p>
                            </>
                          ))}
                        </div>
                      </>
                    ))}
                  </div>
                  <div>
                    <div></div>
                    <div>
                      {" "}
                      <Image
                        className={style.img}
                        src={img}
                        alt={"pictur-navbar"}
                      />
                    </div>
                  </div>
                </>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {getHomeAppliancs.map((categories, index) => (
            <div key={categories.id} id={style.DivRootPrMe} className="z-30">
              <div className="shadow-2xl grid grid-cols-7 ">
                <div className="flex justify-center ">
                  <ul className="mt-5">
                    <li onMouseEnter={handleDisplayPD}>
                      کالای دیجیتال{" "}
                      <span className={style.iconMobile}>
                        <svg
                          width="14"
                          height="23"
                          viewBox="0 0 14 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 1.07422H3C1.89543 1.07422 1 1.96965 1 3.07422V19.0742C1 20.1788 1.89543 21.0742 3 21.0742H11C12.1046 21.0742 13 20.1788 13 19.0742V3.07422C13 1.96965 12.1046 1.07422 11 1.07422Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          className={style.IconMob}
                          width="4"
                          height="3"
                          viewBox="0 0 4 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.95001 1.07422H2.05001"
                            stroke="#9773FF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </li>
                    <li className="mt-1" onMouseEnter={handleDisplayHA}>
                      لوازم خانگی
                      <span className={style.iconMobile}>
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.94925 13.0742V11.0742M4.94925 19.0742H12.9492M8.94925 13.0742V19.0742M3.82125 1.50222L1.18125 10.3022C1.15447 10.3917 1.14896 10.4863 1.16516 10.5783C1.18136 10.6703 1.21883 10.7572 1.27457 10.8322C1.33032 10.9072 1.40281 10.9681 1.48626 11.0101C1.56971 11.0521 1.66182 11.0741 1.75525 11.0742H16.1432C16.2367 11.0741 16.3288 11.0521 16.4122 11.0101C16.4957 10.9681 16.5682 10.9072 16.6239 10.8322C16.6797 10.7572 16.7171 10.6703 16.7333 10.5783C16.7495 10.4863 16.744 10.3917 16.7172 10.3022L14.0772 1.50222C14.0403 1.37866 13.9645 1.27031 13.8611 1.19321C13.7577 1.11612 13.6322 1.07439 13.5033 1.07422H4.39525C4.26628 1.07439 4.1408 1.11612 4.03741 1.19321C3.93402 1.27031 3.85822 1.37866 3.82125 1.50222V1.50222Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </li>
                  </ul>
                </div>
                <hr className={style.Hr} />
                <>
                  {" "}
                  <div className=" col-span-5 flex flex-wrap gap-8 mt-5 mr-4">
                    {" "}
                    {categories.sub_category.map((_sc: any, index: any) => (
                      <>
                        {" "}
                        <div key={_sc.id}>
                          <span className={style.titlePM}>
                            {" "}
                            <span>
                              <svg
                                width="15"
                                height="18"
                                viewBox="0 0 15 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.47509 8.3747C5.2722 6.95883 7.38654 4.0646 8.08766 0.574219C8.51618 4.0646 10.4023 6.95883 13.0888 8.3747C13.6117 8.65114 14.9227 9.07422 14.9227 9.07422C14.9227 9.07422 13.5786 9.4973 13.0342 9.77374C10.2371 11.1896 8.12272 14.0838 7.42383 17.5742C6.9954 14.0814 5.10709 11.1872 2.42056 9.77133C1.89757 9.4973 0.586638 9.07181 0.586638 9.07181C0.586638 9.07181 1.93071 8.64874 2.47509 8.3747Z"
                                  fill="#9773FF"
                                />
                              </svg>
                            </span>
                            <span>{_sc.name}</span>
                            <span>
                              <svg
                                width="5"
                                height="9"
                                viewBox="0 0 5 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.22832 0.864973C4.2282 0.997536 4.17545 1.12463 4.08165 1.21831L1.52432 3.77564C1.44691 3.85302 1.38551 3.9449 1.34362 4.04602C1.30172 4.14714 1.28016 4.25552 1.28016 4.36497C1.28016 4.47443 1.30172 4.58281 1.34362 4.68393C1.38551 4.78505 1.44691 4.87692 1.52432 4.95431L4.07832 7.50831C4.1694 7.60261 4.21979 7.72891 4.21866 7.86001C4.21752 7.9911 4.16493 8.11651 4.07223 8.20921C3.97952 8.30192 3.85412 8.3545 3.72302 8.35564C3.59192 8.35678 3.46562 8.30638 3.37132 8.21531L0.817318 5.66331C0.473906 5.31922 0.281036 4.85294 0.281036 4.36681C0.281036 3.88067 0.473906 3.41439 0.817318 3.07031L3.37465 0.511306C3.44458 0.441334 3.53369 0.393677 3.63071 0.374366C3.72773 0.355055 3.8283 0.364957 3.91969 0.402819C4.01108 0.440682 4.08919 0.504803 4.14413 0.587069C4.19906 0.669335 4.22836 0.766049 4.22832 0.864973Z"
                                  fill="#9773FF"
                                />
                              </svg>
                            </span>
                          </span>
                        </div>
                      </>
                    ))}
                  </div>
                  <div>
                    <div></div>
                    <div>
                      {" "}
                      <Image
                        className={style.img}
                        src={img}
                        alt={"pictur-navbar"}
                      />
                    </div>
                  </div>
                </>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default ContentProductMe;

async function getData() {
  const res = await fetch("https://ms2.atramart.com/api/v1/header ");
  return res.json();
}

