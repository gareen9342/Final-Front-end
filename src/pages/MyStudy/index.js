import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  ToDoList,
  ToDoListItem,
  Profile,
  LeftContainer,
  NavigaionLink,
  Navigation,
  Header,
  SearchBar,
} from "./UI";
const MyStudy = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl relative h-screen overflow-hidden relative">
      <div className="flex items-start justify-between ">
        <LeftContainer>
          <Navigation>
            <NavigaionLink
              pathUrl={"/study/generate"}
              pathName={"스터디 만들기"}
            />
            <NavigaionLink pathUrl={"#"} pathName={"스터디 관리"} />
          </Navigation>
        </LeftContainer>

        {/* end left */}
        {/* start right */}
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <Header>
            <SearchBar />
          </Header>
          <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col flex-wrap sm:flex-row">
              <div className="w-full sm:w-1/2 xl:w-1/3">
                <Box>
                  <Profile studyname={"스터디 이름"} />
                </Box>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/3">
                <Box>
                  <p className="font-bold text-md p-4 text-black dark:text-white">
                    My To Do List
                    <span className="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">
                      (할일 전체 갯수)
                    </span>
                  </p>
                  <ToDoList>
                    <ToDoListItem
                      checked={false}
                      index={"01"}
                      taskName={"발닦기"}
                    />
                    <ToDoListItem
                      checked={true}
                      index={"02"}
                      taskName={"잠자기"}
                    />
                  </ToDoList>
                </Box>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/3">
                <Box>
                  <p className="font-bold text-md p-4 text-black dark:text-white">
                    Calendar자리
                  </p>
                </Box>
              </div>
            </div>
          </div>
        </div>
        {/* end right */}
      </div>
    </main>
  );
};

export default MyStudy;
