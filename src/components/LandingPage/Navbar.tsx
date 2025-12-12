import { CircleUser as User } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [showDropdown, setShowDropdown] = useState(false);
  const [hideTimeout, setHideTimeout] = useState<number | null>(null);
  const navigate = useNavigate();

  // Get user info from localStorage
  const username = localStorage.getItem("username") || "User";
  const email = localStorage.getItem("email") || "user@example.com";

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getFormattedDateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <div className="bg-[#FFFFE3] flex flex-row shadow-xl font-poppins items-center justify-between px-[2vw] py-[1vw] border-b-2">
      <div className="text-2xl tracking-tight font-bold">
        <a
          href='/'
        >
          Roadmap Gen.
        </a>

      </div>
      <div className="text-right mr-2">
        Start Your Learning Path, The Right Way
      </div>
      <div className="flex items-center tracking-tight flex-row gap-6">
        <div className="hidden md:block">
          {dateTime}
        </div>
        <div
          className="relative"
          onMouseEnter={() => {
            if (hideTimeout) {
              clearTimeout(hideTimeout);
              setHideTimeout(null);
            }
            setShowDropdown(true);
          }}
          onMouseLeave={() => {
            const timeout = setTimeout(() => {
              setShowDropdown(false);
            }, 300);
            setHideTimeout(timeout);
          }}
        >
          <div>
            <User className="cursor-pointer" />
          </div>
          {showDropdown && (
            <div
              className="absolute right-0 mt-2 w-56 text-center text-xl bg-white border border-gray-200 rounded shadow-lg z-50 p-4 flex flex-col gap-2"
              onMouseEnter={() => {
                if (hideTimeout) {
                  clearTimeout(hideTimeout);
                  setHideTimeout(null);
                }
                setShowDropdown(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => {
                  setShowDropdown(false);
                }, 200);
                setHideTimeout(timeout);
              }}
            >
              <div className="font-semibold">{username}</div>
              <div className="text-sm text-gray-600">{email}</div>
              <button
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded font-bold hover:bg-red-600 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
