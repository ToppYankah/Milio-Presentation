"use client";
import React, { useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, QuestionMarkCircleOutline  } from "heroicons-react";
import { SearchNormal1 } from 'iconsax-react';


export default function ContentHeader() {
    return <div className='flex justify-between py-3 px-10 border border-1 border-b-zinc-200 items-center'>
        <div className="flex gap-5">
            <div className="flex">
                <ChevronLeft />
                <ChevronRight />
            </div>
            <p>Bookings</p>
        </div>
        <ContentSearchField />
        <div className="flex gap-2 items-center">
            <QuestionMarkCircleOutline size={18} />
            <p className="text-sm">Need Help?</p>
        </div>
    </div>;
}

const inputState = {
    focused: ["border-blue-400", "w-2/4"],
    unfocused: ["border-gray-300", "w-1/4"],
}

function ContentSearchField(){
    const [focused, setFocused] = useState(false);
    const focusClasses = useMemo(
        ()=> (focused ? inputState.focused : inputState.unfocused).join(" "), 
        [focused]
    );

    return <div className={`flex rounded-xl gap-2 py-1 px-2 transition-all items-center bg-gray-bg-200 bg-opacity-0 border border-1 ${focusClasses}`}>
        <SearchNormal1 className="text-gray-400" size={18} />
        <input 
            onFocus={()=> setFocused(()=> true)} 
            onBlur={()=> setFocused(()=> false)} 
            className='flex-1 bg-transparent focus:outline-none' 
            type="text" placeholder='Search' 
        />
        <span className='text-sm px-2 py-1 flex items-center content-center bg-white rounded-md'>⌘G</span>
    </div>;
}