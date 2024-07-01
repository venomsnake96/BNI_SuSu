import React from 'react'
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import Img1 from '../../assets/torita.png'
import './cardId.css'


function CardId({img, nameEmpress, nameTitle, spin, about}) {
  return (
        <article className='card__article'>
            <div className='card__profile'>
                <img src={Img1} alt="img" className='card__profile__img' />
            </div>

            <div className='card__tooltip'>
              <div className="card__content">
                <header className="card__header">
                  <h1>Top Cats</h1>
                </header>
                <div className="card__data">
                  <div className="card__image">
                    <div className="card__mask">
                      <img src={Img1} alt="img" className='card__img'/>
                    </div>
                  </div>
                  <h2 className="card__name">Toribius Maximus</h2>
                  <h3 className="card__profession">Product Tester Specialist</h3>
                  <p className='card__pr_info'>Did ypu know how many chemicals have all the kitten meal?. We are specialist food teaster, specialist to offer you products with the better rankeded quality</p>
                  <button className='card__button'>
                    <DataSaverOnIcon sx={{fontSize:[35]}} />
                    Mas información 
                  </button>
                </div>
              </div>
            </div>
        </article> 
  )
}

export default CardId