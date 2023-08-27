import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { baseUrl } from "../consts";

const nav = () => (
  <>
    <nav className="mainNav flex flex-col justify-start items-center h-screen max-h-900 overflow-auto">
      <ul className="flex flex-col gap-4 w-full">
        <li>
          <a href={`${baseUrl}`}>Home</a>
        </li>
        <li>
          <a href={`${baseUrl}ammos`}>Ammos</a>
        </li>
        <li>
          <a href={`${baseUrl}armors`}>Armors</a>
        </li>
        <li>
          <a href={`${baseUrl}ashes`}>Ashes of war</a>
        </li>
        <li>
          <a href={`${baseUrl}bosses`}>Bosses</a>
        </li>
        <li>
          <a href={`${baseUrl}classes`}>Classes</a>
        </li>
        <li>
          <a href={`${baseUrl}creatures`}>Creatures</a>
        </li>
        <li>
          <a href={`${baseUrl}incantations`}>Incantations</a>
        </li>
        <li>
          <a href={`${baseUrl}items`}>Items</a>
        </li>
        <li>
          <a href={`${baseUrl}locations`}>Locations</a>
        </li>
        <li>
          <a href={`${baseUrl}npcs`}>Npcs</a>
        </li>
        <li>
          <a href={`${baseUrl}shields`}>Shields</a>
        </li>
        <li>
          <a href={`${baseUrl}sorceries`}>Sorceries</a>
        </li>
        <li>
          <a href={`${baseUrl}spirits`}>Spirits</a>
        </li>
        <li>
          <a href={`${baseUrl}talismans`}>Talismans</a>
        </li>
        <li>
          <a href={`${baseUrl}weapons`}>Weapons</a>
        </li>
      </ul>
    </nav>
  </>
);

export const Menu = () => (
  <Sheet>
    <SheetTrigger>Menu</SheetTrigger>
    <SheetContent>
      <SheetHeader className="sheet-header">
        <SheetTitle className="mt-10 mb-10">
          What do you want to visit?
        </SheetTitle>
        {nav()}
      </SheetHeader>
    </SheetContent>
  </Sheet>
);
