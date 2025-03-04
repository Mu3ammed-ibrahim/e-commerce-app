import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Input = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  // Handle input focus and expansion
  const handleFocus = () => {
    setIsExpanded(true);
  };

  // Handle input blur with delay to allow interactions
  const handleBlur = () => {
    // Only collapse if search is empty
    if (!searchTerm) {
      setTimeout(() => {
        setIsExpanded(false);
      }, 200);
    }
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Implement search logic here
      console.log('Searching for:', searchTerm);
    }
  };

  // Keyboard accessibility - Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        inputRef.current?.blur();
        setIsExpanded(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <motion.div 
      initial={{ width: 60, borderRadius: 9999 }}
      animate={{ 
        width: isExpanded ? 270 : 60,
        borderRadius: 9999
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20 
      }}
      className={`
        relative 
        h-[60px] 
        flex 
        items-center 
        bg-white 
        dark:bg-zinc-800 
        shadow-lg 
        overflow-hidden
        ${isExpanded ? 'rounded-2xl' : 'rounded-full'}
      `}
    >
      {/* Search Icon */}
      <motion.div 
        initial={{ opacity: 1, x: 0 }}
        animate={{ 
          opacity: isExpanded ? 0 : 1, 
          x: isExpanded ? -20 : 0 
        }}
        className="absolute left-4 z-10 flex items-center justify-center"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width={22} 
          height={22} 
          className="fill-gray-500"
        >
          <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
        </svg>
      </motion.div>

      {/* Search Form */}
      <form 
        onSubmit={handleSearchSubmit} 
        className="w-full flex items-center"
      >
        <input 
          ref={inputRef}
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-label="Search input"
          className={`
            w-full 
            pl-12 
            pr-4 
            py-2 
            text-lg 
            bg-transparent 
            outline-none 
            text-black 
            dark:text-white 
            placeholder-gray-400
            ${isExpanded ? 'opacity-100' : 'opacity-0'}
            transition-opacity 
            duration-300
          `}
        />
      </form>

      {/* Clear Button */}
      {searchTerm && isExpanded && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setSearchTerm('')}
          className="
            absolute 
            right-4 
            bg-gray-200 
            dark:bg-zinc-700 
            rounded-full 
            w-6 
            h-6 
            flex 
            items-center 
            justify-center
          "
        >
          <span className="text-xs text-gray-600 dark:text-gray-300">×</span>
        </motion.button>
      )}
    </motion.div>
  );
};

export default Input;