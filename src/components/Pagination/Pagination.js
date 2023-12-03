import { useState } from "react"
import Data from  '../Data/Data.json'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";

export default function Pagination(){

    const [search,setSearch]=useState('')
    const [currentPage,setCurrentPage]=useState(1)
    const recordsPerPage=10;
    const lastIndex=currentPage*recordsPerPage;
    const firstIndex=lastIndex-recordsPerPage;
    const records=Data.slice(firstIndex,lastIndex);
    const npage=Math.ceil(Data.length/recordsPerPage);
    const numbers=[...Array(npage+1).keys()].slice(1);
    function PrevPage(){
        if(currentPage !== 1){
            setCurrentPage(currentPage-1);
        }
    }
    function ChangeCPage(currentpage){
        setCurrentPage(currentpage);
    }
    function NextPage(){
        if(currentPage !== npage){
            setCurrentPage(currentPage+1);
        }
    }
    const [checked,setChecked]=useState(false);
    return(
        <>
        <section class="mx-auto w-full max-w-7xl px-4 py-4">
            <div className="flex justify-between pt-4">
                <input type="text" placeholder="Enter Value..." style={{all:"unset",border:"0.1rem solid lightgray",borderRadius:"0.3rem",padding:"0.3rem",width:"18rem"}} 
                onChange={(e)=>setSearch(e.target.value)}
                ></input>
                <RiDeleteBin7Line className="bg-red-400 text-white text-4xl p-2 rounded-md cursor-pointer"/>
            </div>
            <div class="mt-6 flex flex-col">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                >
                                <span>
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => setChecked(prev => !prev)}
                                    className="cursor-pointer"
                                />
                                </span>
                                <span class="ml-4"></span>
                                <span>Name</span>
                                </th>
                                <th
                                scope="col"
                                class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                >
                                Email
                                </th>
                                <th
                                scope="col"
                                class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                >
                                Role
                                </th>
                                <th
                                scope="col"
                                class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                >
                                Actions
                                </th>
                                <th scope="col" class="relative px-4 py-3.5">
                            </th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                        {
                        records.filter((item)=> {
                            return search.trim() === '' || item.name.toLowerCase().includes(search.toLowerCase());
                        }).map((item, i) => (
                            <tr key={i}>
                                <td class="whitespace-nowrap px-4 py-4">
                                    <div class="flex items-center">
                                        <div>
                                            <input type="checkbox" checked={checked} />
                                        </div>
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900">
                                                {item.name}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="whitespace-nowrap px-12 py-4">
                                    <div class="text-sm font-medium text-gray-900">{item.email}</div>
                                </td>
                                <td class="whitespace-nowrap px-4 py-4">
                                    <span class="inline-flex px-2 text-sm font-medium text-gray-900 leading-5">
                                        {item.role}
                                    </span>
                                </td>
                                <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                    <div className="flex gap-2">
                                        <div className="border-2 p-2 rounded-md"><FaEdit/></div>
                                        <div className="border-2 p-2 rounded-md text-red-500"><RiDeleteBin7Line /></div>
                                    </div>
                                </td>
                                <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                </td>
                            </tr>
                        ))}
                     </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </section>
        <div class="flex justify-between max-w-[88rem]">
            <div className="pl-[9rem] text-gray-500">
                0 of 46 row(s) selected.
            </div>
            <div className="flex items-center justify-between">
                <a href="#" className="mx-1 cursor-pointer text-sm font-semibold text-gray-900" onClick={PrevPage}>
                    ← Previous
                </a>

                {numbers.map((n) => (
                    <a href="#" className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105" onClick={() => ChangeCPage(n)}>
                        {n}
                    </a>
                ))}

                <a href="#" className="mx-2 text-sm font-semibold text-gray-900" onClick={NextPage}>
                    Next →
                </a>
            </div>
        </div>
        <div className="py-4"></div>
        </>
    )
}