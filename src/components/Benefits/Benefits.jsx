import React from 'react';
import './Benefits.css';
import useIsDesktop from '../IsDesktop';
import { ReactComponent as TitleLine } from '../../images/svg/mobile/title-line.svg';
import { ReactComponent as CurlItem } from '../../images/svg/mobile/curl-item.svg';
import { ReactComponent as XRingRight } from '../../images/svg/mobile/x-ring-right.svg';
import { ReactComponent as XYellowBig } from '../../images/svg/mobile/x-yellow-big.svg';
import { ReactComponent as Waves } from '../../images/svg/mobile/waves.svg';
import imageSrc from '../../images/photos/benefits.png';
import Button from '../Button/Button';

export const Benefits = () => {
  const isDesktop = useIsDesktop();
  return (
    <div className="benefits">
      {isDesktop ? (
        <div className="container">
          <div className="benefits_wrapper">
            <div className="benefits_left">
              {' '}
              <div className="benefits_image">
                <img
                  className="benefits_image"
                  src={imageSrc}
                  alt="Робота на Upwork"
                />
              </div>
            </div>
            <div className="benefits_right">
              <h2 className="benefits_title">
                Після перегляду уроку ви отримаєте
              </h2>
              <TitleLine></TitleLine>
              <div className="benefits_wrapper"></div>
              <ul className="benefits_list">
                <li className="benefits_item">
                  <CurlItem className="benefits_svg"></CurlItem>
                  <p className="benefits_text">Відео-урок про те, як заповнити профіль,
                  шукати клієнтів та писати ефективні листи-заявки і
                  комунікувати з клієнтами</p>
                </li>
                <li className="benefits_item">
                  <CurlItem className="benefits_svg"></CurlItem>
                  <p className="benefits_text">гайд по Upwork</p>
                </li>
                <li className="benefits_item">
                  <CurlItem className="benefits_svg"></CurlItem>
                  <p className="benefits_text">
                    шаблони листів-заявок (cover letters) для різних
                    спеціалістів, які ви можете легко адаптувати під себе
                  </p>
                </li>

                <li className="benefits_item">
                  <CurlItem className="benefits_svg"></CurlItem>
                  <p className="benefits_text">
                    доступ до чату з іншими учасниками мого міні-курсу, де я
                    буду відповідати на ваші запитання.
                  </p>
                </li>
              </ul>
              <div className="button-container">
                <a
                  href="https://shop-18229.e3.co.ua/shop/lektsiya-upwork/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  <Button isYellow={true} title="Придбати за $13" />
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="benefits_image">
            <XRingRight className="x_ring_right"></XRingRight>
            <img src={imageSrc} alt="Робота на Upwork" />
            <XYellowBig className="x_yellow_big"></XYellowBig>
          </div>
          <div className="container">
            <h2 className="benefits_title">
              Після перегляду уроку ви отримаєте
            </h2>
            <TitleLine></TitleLine>
            <div className="benefits_wrapper"></div>
            <ul className="benefits_list">
                <li className="benefits_item">
                  <CurlItem className="benefits_svg"></CurlItem>
                  <p className="benefits_text">Відео-урок про те, як заповнити профіль,
                  шукати клієнтів та писати ефективні листи-заявки і
                  комунікувати з клієнтами</p>
                </li>
              <li className="benefits_item">
                <CurlItem className="benefits_svg"></CurlItem>
                <p className="benefits_text">гайд по Upwork</p>
              </li>
              <li className="benefits_item">
                <CurlItem className="benefits_svg"></CurlItem>
                <p className="benefits_text">
                  шаблони листів-заявок (cover letters) для різних спеціалістів,
                  які ви можете легко адаптувати під себе
                </p>
              </li>

              <li className="benefits_item">
                <CurlItem className="benefits_svg"></CurlItem>
                <p className="benefits_text">
                  доступ до чату з іншими учасниками мого міні-курсу, де я буду
                  відповідати на ваші запитання.
                </p>
              </li>
            </ul>
            <div className="button-container">
              <a
                href="https://shop-18229.e3.co.ua/shop/lektsiya-upwork/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <Button isYellow={true} title="Придбати за $13" />
              </a>{' '}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
