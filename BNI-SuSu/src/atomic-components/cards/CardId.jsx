import React from 'react'
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import Img1 from '../../assets/torita.png'
import './cardId.css'


function CardId() {
  return (
    <div className='card-id-container'>
        <article className='card__article'>
            <div className='card__profile'>
                <img src={Img1} alt="img" className='card__profile__img' />
            </div>

            <div className='card__tooltip'>
              <div className="card__content">
                <header className="card__header">
                  <span></span>
                </header>
                <div className="card__data">
                  <div className="card__image">
                    <div className="cart__mask">
                      <img src={Img1} alt="img" className='card__img'/>
                    </div>
                    <span className='card__status'></span>
                  </div>
                  <h2 className="card__name">Toribius Maximus</h2>
                  <h3 className="card__profession">Product Tester Specialist</h3>
                  <button className='card__button'>
                    <DataSaverOnIcon />
                    Mas información 
                  </button>
                </div>
              </div>
            </div>
        </article> 
    </div>
  )
}

export default CardId