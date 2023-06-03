"use client";

import { FC, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import style from "./navbarmain.module.css";
import Img from "./Picture2.png";
import Img2 from "./Picture3.png";
import Img3 from "./Picture4.png";

const LanguageChoise: FC = () => {
  return (
    <>
      <div className="   text-right">
        <Menu as="div" className="relative inline-block">
          <Menu.Button className="inline-flex w-full justify-center  px-4 py-2 ">
            <Image
              width={27.17}
              height={27.17}
              src={Img}
              alt={"pictur-navbar"}
            />
            <svg
              className={style.iconArrow3}
              width="9"
              height="5"
              viewBox="0 0 9 5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.00166 0.670883C1.13422 0.670999 1.26132 0.723754 1.35499 0.817549L3.91233 3.37488C3.98971 3.45229 4.08159 3.51369 4.18271 3.55558C4.28383 3.59748 4.39221 3.61904 4.50166 3.61904C4.61111 3.61904 4.7195 3.59748 4.82061 3.55558C4.92173 3.51369 5.01361 3.45229 5.09099 3.37488L7.64499 0.820882C7.7393 0.729803 7.8656 0.679406 7.99669 0.680545C8.12779 0.681684 8.2532 0.734269 8.3459 0.826973C8.43861 0.919677 8.49119 1.04508 8.49233 1.17618C8.49347 1.30728 8.44307 1.43358 8.35199 1.52788L5.79999 4.08188C5.45591 4.42529 4.98963 4.61816 4.50349 4.61816C4.01736 4.61816 3.55108 4.42529 3.20699 4.08188L0.647994 1.52455C0.578022 1.45462 0.530366 1.36551 0.511054 1.26849C0.491743 1.17147 0.501645 1.0709 0.539507 0.97951C0.57737 0.888119 0.641491 0.810013 0.723757 0.755076C0.806024 0.700138 0.902737 0.670838 1.00166 0.670883Z" />
            </svg>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 left-2 mt-1 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1" style={{ direction: "rtl" }}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <Image
                        width={16.19}
                        height={16.19}
                        src={Img}
                        alt={"pictur-navbar"}
                      />
                      <span className={style.menuItemLgPr}>فارسی</span>
                      <span className={style.iconChoiseLg}>
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="4.17873"
                            cy="4.25661"
                            r="3.40285"
                            fill="#9773FF"
                          />
                        </svg>
                      </span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <Image
                        width={16.19}
                        height={16.19}
                        src={Img2}
                        alt={"pictur-navbar"}
                      />
                      <span className={style.menuItemLgPr}>انگلیسی</span>
                    
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <Image
                        width={16.19}
                        height={16.19}
                        src={Img3}
                        alt={"pictur-navbar"}
                      />
                      <span className={style.menuItemLgPr}>عربی</span>
                     
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};
export default LanguageChoise;
