import React, { ReactElement } from 'react';
import { ChevronRight } from "heroicons-react";
import { Icon } from 'iconsax-react';

interface ContentCardProps {
    title?: string, 
    icon?: Icon, 
    tag?: string, 
    children?: ReactElement, 
    className?: string, 
    headerTrailing?: {
        link: string, 
        label: string
    }
}

export default function ContentCard({title, icon: Icon, tag, children, className, headerTrailing }: ContentCardProps) {
    return <div className={`rounded-2xl bg-white border border-1 ${className}`}>
        {title ? 
        <div className="flex border border-t-0 border-r-0 border-l-0 py-5 px-5 justify-between">
        <div className="flex gap-3 items-center">
            {Icon ? <Icon /> : <></>}
            <span>{title}</span>
            {tag ? <div className="py-1 px-3 rounded-full text-white bg-black text-xs">{ tag }</div> : <></>}
            </div>
            {
                headerTrailing ?
                    <a href={headerTrailing.link} className="flex gap-3 items-center">
                        <span>{headerTrailing.label}</span>
                <ChevronRight />
            </a> : <></>
            }
    </div> : 
    <></>}
    {children}
</div>;
}
