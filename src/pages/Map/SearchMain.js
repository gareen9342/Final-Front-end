import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MapService from './Sections/MapService'
import OnStudyComponent from './Sections/OnStudyComponent';

const SearchMain = () => {

  const teste = '슈.슈슉.슉슉.시.시...슉.슈슉.슉';

  return (
    <>
      <div>
        <div x-data="{show: false}">
          <button className="block bg-blue-600 bg-blue-600 text-gray-200 rounded-lg px-6 text-sm py-3 overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
            <div className="flex">
              <span>Dropdown</span>
              <svg className="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M7 10l5 5 5-5z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
            </div>
          </button>
          <div x-show="show" className="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
            <Link to="/search/offline" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">offline</Link>
            <Link to="/search/online" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">online</Link>
          </div>
        </div >
        <hr />
      </div>
      <div>
        <Route path='/search/offline' component={MapService} />
        <Route path='/search/online' render={() => <OnStudyComponent studies={teste} />} />
      </div>
    </>
  )
}

export default SearchMain;
