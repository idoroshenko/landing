import React from 'react';
import './ImageBlock.css';
import useIsDesktop from '../IsDesktop';
// import footerImage from '../../images/photos/footer.png';
import { ReactComponent as HalfRing } from '../../images/svg/mobile/half-ring.svg';
import Button from '../Button/Button';

export const ImageBlock = () => {
  const isDesktop = useIsDesktop();
  return (
    <div className="image_block">
      {/* <img src={footerImage} alt="Робота на Upwork"></img> */}
      <div className="container">
        <div className="image_wrapper">
          <p className="image_text">
            <span>урок від Насті</span> - це ваш шанс змінити своє життя.{' '}
          </p>
          <p className="image_text">
            <span>Приєднуйтесь</span> і почніть працювати на себе вже сьогодні!
          </p>
          {!isDesktop && <HalfRing className="image_svg"></HalfRing>}
          {isDesktop && (
            <div className="image_button">
              <a
                href="https://shop-18229.e3.co.ua/shop/lektsiya-upwork/"
                target="_blank"
                rel="noreferrer"
              >
                <Button isYellow={true} title="Придбати за $30" />
              </a>
            </div>
          )}
        </div>

        {!isDesktop && (
          <div className="image_button">
            <a
              href="https://shop-18229.e3.co.ua/shop/lektsiya-upwork/"
              target="_blank"
              rel="noreferrer"
            >
              <Button isYellow={true} title="Придбати за $30" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
