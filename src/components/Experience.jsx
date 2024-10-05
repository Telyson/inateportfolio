import React from 'react';

function Experience() {
  return (
    <section>

    <div>
    <h1 className='text-white text-3xl mb-4 font-syne font-bold mt-16'>My Experience</h1>
    </div>

    <div className="flex flex-col min-h-screen mt-10 pb-20 border-b-2 border-neutral-700">
  
      {/* Row 1 */}
      <div className="flex gap-20 mb-20 flex-col sm:flex-row flex-grow">

        {/* Column 1 */}
        <div className="flex-1 bg-slate-800  p-4 border rounded-3xl shadow-slate-400 leadin-7">

          <p className='text-gray-400'><span className='font-semibold'>Name: </span>Cerebrum Dao</p>

          <p className='text-gray-400'><span className='font-semibold'>Project Role: </span>Contributor (Graphic Designer)</p>

          <p className='text-gray-400'><span className='font-semibold'>Year: </span>2024 - Till Present</p>

          <p className='text-gray-400'><span className='font-semibold'>Description: </span>Web3</p>

          <p className='text-gray-400'><span className='font-semibold'>Scope of the project: </span>Monthly Design Projects, Even Announcement Designs, Monthly Report Updates, Token Launch Updates etc.</p>

        </div>

        {/* Column 2 */}
        <div className="flex-1  p-4 border rounded-3xl">
        
        <p className='text-gray-400'><span className='font-semibold'>Name: </span>Cerebrum Dao</p>
        </div>

      </div>

      {/* Row 2 */}
      <div className=" gap-20 flex flex-col sm:flex-row flex-grow">
        {/* Column 1 */}
        <div className="flex-1  p-4 border rounded-3xl">
        <p className='text-white'>paragraph three</p>
        </div>
        {/* Column 2 */}
        <div className="flex-1  p-4 border rounded-3xl">
        <p className='text-white'>paragraph one</p>
        </div>
      </div>

    </div>
    </section>
  );
}

export default Experience;
