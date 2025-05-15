import { YouTube } from "../icons/youtube";
import { Twitter } from "../icons/twitter";
import { SidebarItem } from "./sidebaritem"; 

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 px-4 py-6 shadow">
     <div className="pt-4">
     <SidebarItem text="Twitter" icon={<Twitter/>}/>
     <SidebarItem text="Youtube" icon={<YouTube/>}/>


     </div>
    </div>
  );
}
