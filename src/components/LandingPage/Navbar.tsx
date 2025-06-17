import {CircleUser as User} from "lucide-react";
import { useEffect, useState } from "react";

function getFormattedDateTime() {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formatted = now.toLocaleString("en-US", options);

  return formatted.replace(/, (\d{2}:\d{2})/, " $1");
}

const Navbar = () => {

     const [dateTime, setDateTime] = useState(getFormattedDateTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getFormattedDateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FFFFE3] flex flex-row font-poppins items-center justify-between px-[2vw] py-[1vw] border-b-2">
        <div className="text-2xl tracking-tight font-bold">
            Roadmap Gen.
        </div>
        <div className="text-right mr-2">
            Start Your Learning Path, The Right Way
        </div>
        <div className="flex items-center tracking-tight flex-row gap-6">
            <div className="hidden md:block">
                {dateTime}
            </div>
            <div className="">
             <User />
            </div>
        </div>
        
    </div>
  )
}

export default Navbar
