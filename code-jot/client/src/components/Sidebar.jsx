import { NavLink } from 'react-router-dom'
import { FaBell, FaRegLightbulb } from 'react-icons/fa'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FaRegImages } from "react-icons/fa"; // Importing gallery icon

function Sidebar() {
  const iconSize = 22
  return (
    <div className='flex flex-col flex-grow transition-all duration-500 max-w-14 min-w-14'>
      <div className='flex flex-col items-center justify-center gap-2 overflow-hidden transition-all duration-300'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `p-3 transition-all duration-300 hover:scale-105 rounded-full ${isActive ? 'bg-purple-200' : 'hover:bg-purple-100'
            }`
          }
          title='Notes'
        >
          <FaRegLightbulb size={iconSize} />
          {/* <span className=''>Notes</span> */}
        </NavLink>
        {/*remainder*/}
        <NavLink
          to='/reminders'
          className={({ isActive }) =>
            `p-3 transition-all duration-300 hover:scale-105 rounded-full ${isActive ? 'bg-purple-200' : 'hover:bg-purple-100'
            }`
          }
          title='Notes'
        >
          <FaBell size={iconSize} />
          {/* <span className=''>Notes</span> */}
        </NavLink>

        <NavLink
          to="/ImageUploader"
          className={({ isActive }) =>
            `p-3 transition-all duration-300 hover:scale-105 rounded-full ${isActive ? 'bg-purple-200' : 'hover:bg-purple-100'
            }`}
          title="Gallery"
        >
          <FaRegImages size={iconSize} />
        </NavLink>
        <NavLink
          to='/bin'
          className={({ isActive }) =>
            `p-3 transition-all duration-300 hover:scale-105 rounded-full ${isActive ? 'bg-purple-200' : 'hover:bg-purple-100'
            }`
          }
          title='Bin'
        >
          <FaRegTrashAlt size={iconSize} />
          {/* <span className=''>Bin</span> */}
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
