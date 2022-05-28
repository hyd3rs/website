// NavBar component is derived from Tailwind UI library (https://tailwindui.com/)

import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ConfigurationFetch from "../../lib/ConfigurationFetch.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { FlagIcon } from "react-flag-kit";

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Projects', href: '/projects', current: false, disabled: false },
  { name: 'Professional', href: '/credentials', current: false, disabled: false, external: false },
  { name: "Blog", href: "https://corner.danny.works/", current: false, disabled: false, external: true }
  // { name: '#SaveUkraine *COMING SOON*', href: '/ukraine', current: false, disabled: true, external: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
};

export default function Nav() {
  const route = useLocation();
  const [bannerStatus, setBannerStatus] = useState(false);
  const [barType, setBarType] = useState('default');

  useEffect(() => {
    (async () => {
      const Configuration = await ConfigurationFetch();
        if (Configuration.development === false) setBannerStatus(false);
        else setBannerStatus(true);

        if (!route.pathname.startsWith("/credentials")) {
          setBarType('default');
          document.body.classList.add("bg-gray-900");
        };
        if (route.pathname.startsWith("/credentials")) { 
          setBarType('resume');
          document.body.classList.add("bg-gray-700");
        };
        
        return;
    })();
  }, [route]);

  
  return (
    <div>
      {/* START EVENT BANNER */}
        <div className={`${null/*flex*/} flex-row py-5 px-5 items-center justify-center text-white hidden`} style={{ background: "#00356f" }}>
          <div className="px-5">
            <FlagIcon code="UA" className="rounded-md w-48 sm:w-20" />
          </div>
          <h1 className="font-BreezeHeader font-bold text-lg sm:text-2xl">Help fight against the ongoing Russian crisis in Ukraine.</h1>
          <div className="px-6 flex flex-row">
            <a target="_blank" rel="noreferrer noopener" type="button" className="font-BreezeText inline-block px-6 py-2.5 text-black font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out" style={{ background: "linear-gradient(110deg, #ffd600 65%, #b29500 60%)" }} href="https://www.paypal.com/fundraiser/117811171978246391">Donate<FontAwesomeIcon className="ml-2 hidden lg:inline" icon={faExternalLinkAlt} /></a>
          </div>
        </div>
      {/* END EVENT BANNER */}

      {
        bannerStatus &&
        <div className="bg-red-500 text-center font-BreezeHeader py-6 px-32 hidden sm:block">
          <h1 className="font-BreezeText text-2xl">Development mode is <b>enabled</b>. Make sure to configure <code>public/config/config.json</code> in the project directory. When you're done, set <code>development</code> in the configuration to false.<br /><br /><b>Happy coding!</b></h1>
        </div>
      }
      <Disclosure as="nav" className={`${barType !== "resume" ? "bg-gray-800" : "bg-gray-700"} shadow-lg`}>
        {({ open }) => (
          <>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-12">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    { barType !== "resume" ? (
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    ) : null}
                    </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                      <a href="/" className={`${barType !== "resume" ? "text-white" : "text-blue-300"} text-xl font-BreezeHeader font-bold`}>Danny</a>
                    </div>
                      <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.disabled ? "#disabled" : item.href}
                              rel="noreferrer noopener"
                              target={item.external ? "_blank" : null}
                              className={classNames(
                                (item.href === route.pathname) ? 'bg-gray-600 text-white' : `text-gray-300 ${(route.pathname === "/credentials") ? "hover:bg-gray-800" : "hover:bg-gray-900"} hover:text-white`,
                                'px-3 py-2 rounded-md text-sm font-medium font-BreezeText'
                              )}
                              style={item.disabled ? { cursor: "not-allowed", color: "#78909c" } : {}}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                    </div>
                  </div>
                  
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {barType !== "resume" ? (
                    <a
                      type="button"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://github.com/Dannnington/website"
                      className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                  ) : (
                    <div>
                      <a
                        type="button"
                        href="/"
                        className={`bg-gray-700 p-1 rounded-full text-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
                      >
                        <FontAwesomeIcon icon={faHome} size="lg" />
                      </a>

                      <a
                        type="button"
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://github.com/Dannnington/website"
                        className="pl-3 bg-gray-700 p-1 rounded-full text-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>


            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.disabled ? "#" : item.href}
                    rel="noreferrer noopener"
                    target={item.external ? "_blank" : null}
                    className={classNames(
                      item.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white',
                      'block px-3 py-2 rounded-md text-base text-center font-medium font-BreezeText'
                    )}
                    style={item.disabled ? { cursor: "not-allowed", textDecoration: "line-through" } : {}}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
