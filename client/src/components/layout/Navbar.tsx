import React from 'react'
import {Input} from "@/components/ui/input";
import {CalendarDays, Search, Settings} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

function Navbar() {
    return (
        <nav className={'flex items-center justify-between py-4 px-3 border-b border-b-gray-300 border-dashed gap-2.5'}>
            <section className="left flex-1">
                <div className="search w-full max-w-3xl relative">
                    <Search className={'size-5.5 absolute top-1/2 left-2 -translate-y-1/2 -z-10 text-gray-500'} />
                    <Input type={'search'} placeholder={'Search...'} className={'p-5 w-full pl-10'} />
                </div>
            </section>
            <section className={"right flex"}>
                <div className="btns">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild={true}>
                                <Button type={'button'} variant={'outline'} size={'icon'}>
                                    <Settings className={'size-5.5 text-gray-500'} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Settings</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className={'hidden md:flex items-center space-x-4'}>
                    <Separator orientation={'vertical'} className={'mx-4'} />
                    <HoverCard>
                        <HoverCardTrigger>
                            <Avatar className={'p-0.5 bg-primary/50 hover:bg-primary transition-colors duration-100 ease-linear rounded-full'} >
                                <AvatarImage src="https://github.com/shadcn.png" className={'rounded-full'} />
                                <AvatarFallback>UU</AvatarFallback>
                            </Avatar>
                        </HoverCardTrigger>
                        <HoverCardContent className="flex flex-col">
                                    <h4 className="text-sm font-semibold">Unknown User</h4>
                                    <p className="text-sm">
                                        unknown@unknown.com
                                    </p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </section>
        </nav>
    )
}

export default Navbar;
