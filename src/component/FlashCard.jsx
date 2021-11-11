import './FlashCard.css'

function FlashCard({
     data: {
          title,
          description,
          time
     }
}) {
     return (
          <div className="flash-card">
               <h3 className='title'>{title}</h3>
               <p className='description'>{description}</p>
               <h4 className='time'>{time}</h4>
          </div>
     )
}

export default FlashCard;