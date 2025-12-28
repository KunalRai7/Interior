export default function Home() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 z-50">
      <div className="max-w-lg w-full">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        </div>
        
        {/* Main card */}
        <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Warning icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/25">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-10 h-10 text-slate-900" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                />
              </svg>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 tracking-tight">
            Website Suspended
          </h1>
          
          {/* Message */}
          <p className="text-slate-300 text-center text-lg mb-8 leading-relaxed">
            This website has been temporarily suspended due to an{' '}
            <span className="text-amber-400 font-semibold">outstanding payment</span>.
          </p>
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-8" />
          
          {/* Action text */}
          <p className="text-slate-400 text-center text-sm mb-6">
            To restore access, please clear all pending dues.
          </p>
          
        
        </div>
      </div>
    </div>
  )
}