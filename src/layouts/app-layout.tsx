// AppLayout.tsx
import { Outlet } from 'react-router-dom';
import { FloatingIcons } from '../components/FloatingIcons';
import { Header } from '../components/Header';


const AppLayout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0">
        <div className="background-gradient"></div>
        <div className="grid-pattern"></div>
        <div className="light-effect"></div>
        <div className="accent-lines"></div>
        <FloatingIcons />
      </div>
      
      {/* Header */}
      <Header />
      
      {/* Main Content with padding for header */}
      <div className="relative z-10 pt-16"> {/* Added pt-16 for header space */}
        <main className="min-h-screen container mx-auto px-8 justify-items-center">
          <Outlet />
        </main>
        
        <footer className="p-4 text-center mt-10 bg-gradient-to-r bg-white text-black rounded-lg shadow-lg">
          <p className="text-lg font-semibold">
            Made with ❤️ by <span className="decoration-wavy decoration-yellow-300">Vikas Verma</span>
          </p>
          <p className="text-sm mt-2">
            Follow me on <a 
              href="https://github.com/vikasverma9515" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AppLayout;
// // AppLayout.tsx
// import { Outlet } from 'react-router-dom';
// import { FloatingIcons } from '../components/FloatingIcons';


// const AppLayout = () => {
//   return (
//     <div className="relative min-h-screen">
//       {/* Background Elements */}
//       <div className="fixed inset-0">
//         <div className="background-gradient"></div>
//         <div className="grid-pattern"></div>
//         <div className="light-effect"></div>
//         <div className="accent-lines"></div>
//       </div>

//       {/* Floating Icons Layer */}
//       <div className="fixed inset-0 z-0">
//         <FloatingIcons />
//       </div>
      
//       {/* Main Content */}
//       <div className="relative z-10">
//         <main className="min-h-screen container mx-auto px-8 justify-items-center">
//           <Outlet />
//         </main>
        
//         <footer className="p-4 text-center mt-10 bg-gradient-to-r bg-white text-black rounded-lg shadow-lg">
//           <p className="text-lg font-semibold">
//             Made with ❤️ by <span className="decoration-wavy decoration-yellow-300">Vikas Verma</span>
//           </p>
//           <p className="text-sm mt-2">
//             Follow me on <a 
//               href="https://github.com/vikasverma9515" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="hover:underline"
//             >
//               GitHub
//             </a>
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default AppLayout;