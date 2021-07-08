import { data } from "autoprefixer";
import React, {useState, useEffect} from "react";
import groupStudyService from "../../services/groupStudyService";

const StudyIntroduce = ({studyId}) => {

    const [studyName, setStudyName ] = useState(null);
    const [studyIsOnline, setStudyIsOnline] = useState(null);
    const [studyLocation, setStudyLocation] = useState(null);
    const [studyCount, setStudyCount] = useState(null);
    const [studyIntro, setStudyIntro] = useState(null)
    const [groupStudyList, setGroupStudyList] = useState([]);
    const [groupMemberList, setGroupMemberList] = useState([]);
    const [loading, setLoading] = useState(true);
  
    
    useEffect(() => {
      if (loading) {
         (async () => {
          const res =  await groupStudyService.getStudyIntro(studyId);
          if(res.data){
            console.log(data);
            setGroupStudyList(res.data);
            setLoading(false);
          }
        })();
      }
  
      return () => {
        if (loading) {
          setLoading(false);
        }
      };
    }, [loading]);


    useEffect(() => {
        if (loading) {
           (async () => {
            const res =  await groupStudyService.getStudyMemberList(studyId);
            if(res.data){
              console.log(data);
              setGroupMemberList(res.data);
              setLoading(false);
            }
          })();
        }
    
        return () => {
          if (loading) {
            setLoading(false);
          }
        };
      }, [loading]);


    return (
        <>
        {console.log("ㅎㅎㅎㅎㅎ",groupStudyList)}
            <header className="bg-white dark:bg-gray-800">
                <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
                    {/* <div className="flex flex-col items-center w-full md:flex-row md:w-1/2"> */}
                    <div className="flex-auto items-center justify-center w-full md:w-1/2">
                                
                        <div className="max-w-lg md:mx-12 md:order-2">
                            <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">{}</h1>
                            <br />

                            <div className="relative max-w-full min-w-full rounded-2xl shadow-lg overflow-hidden mr-8">
                                <div className="flex flex-col">

                                    <div className="flex justify-between px-4 text-gray-100 z-30 mb-10 mt-10">
                                        <div className="flex flex-col items-start">
                                            <span className="font-thin">스터디 방식</span>
                                            <span className="font-thin">스터디 지역</span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="tracking-widest text-xl"> 온라인 스터디</span>
                                            <span className="tracking-widest text-xl">서울</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between px-4 h-16 z-30 text-white bg-indigo-900">
                                        <div className="flex flex-col items-start">
                                            <span className="text-2xl">스터디 인원</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <span className="text-2xl">5명</span>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute opacity-90 top-0 left-0 h-full blur w-full bg-gradient-to-t from-blue-700 to-indigo-400 rounded-2xl">
                                    </div>
                                </div>
                            </div>


                            <br />
                            <p>
                                {groupStudyList.studygroupdesc}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 md:w-1/2">
                        <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120912_172%2Fhappycoupon7_1347436251652qyuav_JPEG%2F93652504.jpg&type=sc960_832" alt="apple watch photo" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default StudyIntroduce;

