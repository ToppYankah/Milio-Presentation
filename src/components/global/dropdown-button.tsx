'use client';
import { useLayoutEffect, useRef, useState } from "react";
import { DotsVertical } from "heroicons-react";
import { Icon } from "iconsax-react";

interface DropdownItem {
    icon: Icon,
    label: string,
    color?: string,
    function?: Function,
}

interface DropdownPosition {
    top: number,
    left: number,
}

export default function DropdownButton ({options}: {options: Array<DropdownItem>}){
    const [eventTarget, setEventTarget] = useState<HTMLButtonElement>();
    
    return <button 
    onBlur={()=> setEventTarget(() => undefined)}
    onClick={(e)=> setEventTarget(e.currentTarget)}
    className="w-10 h-10 relative rounded-full transition-all hover:bg-gray-200 cursor-pointer text-gray-600 grid place-items-center font-medium">
        <DotsVertical size={18} />
        {eventTarget && <DropdownPopup target={eventTarget} options={options}/>}
    </button>;
}

const DropdownPopup = ({options, target}: {options: Array<DropdownItem>, target?: HTMLButtonElement}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  
    const handleButtonClick = () => {
        // Calculate dropdown position relative to the click event
        const triggerRect = target!.getBoundingClientRect();
        const dropdownWidth = ref.current!.offsetWidth;
        const dropdownHeight = ref.current!.offsetHeight;

        // Calculate available space in different directions
        const spaceAbove = triggerRect.top;
        const spaceBelow = window.innerHeight - triggerRect.bottom;
        const spaceLeft = triggerRect.left;
        const spaceRight = window.innerWidth - (triggerRect.left + triggerRect.width);

    
        // Determine the best position for the dropdown
        let positionTop = triggerRect.bottom;
        let positionLeft = triggerRect.left;

        
        if (spaceBelow < (dropdownHeight ?? 0)) {
            if (spaceAbove >= (dropdownHeight ?? 0)) {
                positionTop = triggerRect.top - (dropdownHeight ?? 0);
            } else {
                // If neither above nor below is possible, choose the best available direction.
                positionTop = Math.min(spaceAbove, spaceBelow) > 0 ? triggerRect.top : 0;
            }
        }
        
        if (spaceRight < (dropdownWidth ?? 0)) {
            positionLeft = Math.max(spaceLeft, spaceRight) > 0 ? triggerRect.left - (dropdownWidth ?? 0) + triggerRect.width : 0;
        }
        
        // Set the dropdown position and make it visible
        setDropdownPosition({ top: positionTop, left: positionLeft });
    };
    
    useLayoutEffect(handleButtonClick, [ref, target]);

    return <div ref={ref} className="absolute  bg-white shadow-sm rounded-lg border border-gray-300 z-10" 
    style={{
        position: 'fixed',
        top: dropdownPosition.top + 'px',
        left: dropdownPosition.left + 'px',
    }}>
    {options.map((option, i)=> <DropdownOption key={i} option={option} />)}
    </div>;
}


const DropdownOption = ({option}: {option: DropdownItem})=> {
    const {icon: Icon, label, color} = option;

    return <div className="py-3 px-5 flex items-center gap-4 transition-all hover:bg-gray-100" style={{color}}>
        <Icon />
        <span>{label}</span>
    </div>;
}