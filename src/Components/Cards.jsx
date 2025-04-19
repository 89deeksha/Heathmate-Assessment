import React from 'react'
import vitalsign from '../assets/image.png'
import trend from '../assets/image copy.png'
import alert from '../assets/image copy 2.png'
import report from '../assets/image copy 3.png'
import img from '../assets/img.png'
function Cards() {
    const cardData=[
        {
            img:vitalsign,
            text:"Check Vital Signs"
            
        },
        {
            img:trend,
            text:"Monitor Health Trendss"
        },
        {
            img:alert,
            text:"Health Alerts"
        },
        {
            img:report,
            text:"Report Analysiss"
        }
    ]
  return (
    <div className='relative flex justify-center gap-8 mt-40 px-4 '>
        {/* Image behind Card 1 */}
      <img
        src={img}
        alt="decorative top"
        className='absolute top-[-90px] left-[8%] w-50 h-35 z-0'
      />

      {/* Image behind Card 4 */}
      <img
        src={img}
        alt="decorative bottom"
        className='absolute bottom-[-90px] right-[7%] w-50 h-35  z-0'
      />

        {cardData.map((data,index)=>{
           return <div className='z-10 relative bg-gray-800 rounded-xl shadow-md p-4 w-64 text-center hover:shadow-lg transition-shadow duration-300' key={index}>
            
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
            <img
              src={data.img}
              alt={`Card ${index + 1}`}
              className="w-23 h-23 object-contain"
            />
          </div>
                <p className="text-white">{data.text}</p>
            </div>
        })}

    </div>
  )
}

export default Cards