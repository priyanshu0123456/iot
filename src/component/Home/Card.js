import React from 'react'

const Card = ({backroundColor , heading , subheading}) => {
  return (
    <div>
        <div>
             {heading}
        </div> 

        <div>
           {subheading}
        </div>


        <div>
            <p>Beginner</p>

            <p>6 Lesson</p>
        </div>

    </div>
  )
}

export default Card
