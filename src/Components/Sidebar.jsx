import React, { Fragment } from "react";
import {
  HomeIcon,
  ChartBarIcon,
  DocumentSearchIcon,
  BellIcon,
  CreditCardIcon,
  MailIcon,
  ArrowUpIcon,
  ExternalLinkIcon
} from "@heroicons/react/solid";

function Sidebar() {
  return (
    <Fragment>
      <div className="bg-slate-800 flex-none w-14 sm:w-20 h-screen">
        <div className="h-20 items-center flex">
          <HomeIcon width={40} className="text-white left-3 sm:left-6 fixed" />
        </div>
        <div className=" left-3 sm:left-6 fixed top:[100px]">
          <ChartBarIcon
            width={40}
            className=" bg-slate-600 p-2 rounded-lg text-white mb-4"
          />

          <DocumentSearchIcon
            width={40}
            className=" bg-slate-600 p-2 rounded-lg text-white mb-4"
          />
          <MailIcon
            width={40}
            className=" bg-slate-600 p-2 rounded-lg text-white mb-4"
          />
          <CreditCardIcon
            width={40}
            className=" bg-slate-600 p-2 rounded-lg text-white mb-4"
          />
          <BellIcon
            width={40}
            className=" bg-slate-600 p-2 rounded-lg text-white mb-4"
          />
        </div>
      
      </div>
      <div className="fixed bottom-4 left-3 sm:left-6">
        <a href="#top" >

            <ArrowUpIcon  width={40}
            className=" bg-slate-600 p-2 rounded-lg text-white mb-4"/>
        </a>
             <ExternalLinkIcon  width={40}
            className=" bg-slate-600 p-2 rounded-lg text-white mb-4"/>
        </div>
    </Fragment>
  );
}

export default Sidebar;
