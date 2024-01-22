import React from 'react';
import './ForWhom.css';
import useIsDesktop from '../IsDesktop';
import { ReactComponent as TitleLine } from '../../images/svg/mobile/title-line.svg';
import { ReactComponent as TitleLineDesktop } from '../../images/svg/desktop/title-line-desktop.svg';
import { ReactComponent as Stroke } from '../../images/svg/mobile/stroke.svg';
import { ReactComponent as XYellowBig } from '../../images/svg/mobile/x-yellow-big-transparent.svg';
import { ReactComponent as XBlueBig } from '../../images/svg/mobile/x-blue-big.svg';

import Button from '../Button/Button';

export const ForWhom = () => {
  const isDesktop = useIsDesktop();
  return (
    <div className="forwhom">
      <div className="container">
        <h2 className="forwhom_title">Для кого підходить цей урок?</h2>
        {isDesktop ? (
          <TitleLineDesktop></TitleLineDesktop>
        ) : (
          <TitleLine></TitleLine>
        )}

        <p className="forwhom_text">
          На <span>Upwork</span> є широкий спектр професій, від творчих та
          технічних до бізнес-та адміністративних.
        </p>
        <p className="forwhom_text">Ось деякі з найпопулярніших:</p>
        <div className="forwhom_wrapper">
          <div className="forwhom_block">
            <div className="number-circle">
              <span className="number">01</span>
              <Stroke className="stroke"></Stroke>
            </div>

            <p className="text-content_1">Креативні професії:</p>
            <p className="text-content_2">
              письменники, дизайнери, художники, музиканти, відеооператори,
              фотографи, SMM спеціалісти.
            </p>
          </div>
          <div className="forwhom_block block2">
            <div className="number-circle">
              <span className="number">02</span>
              <Stroke className="stroke"></Stroke>
            </div>
            {!isDesktop && <XYellowBig className="x-yellow-big"></XYellowBig>}
            <p className="text-content_1">Технічні професії:</p>
            <p className="text-content_2">
              програмісти, веб-розробники, інженери, дизайнери баз даних та
              аналітики.
            </p>
          </div>
          <div className="forwhom_block block3">
            <div className="number-circle">
              <span className="number">03</span>
              <Stroke className="stroke"></Stroke>
            </div>
            {!isDesktop && <XBlueBig className="x-blue-big"></XBlueBig>}
            <p className="text-content_1">
              Бізнес-та адміністративні професії:
            </p>
            <p className="text-content_2">
              копірайтери, менеджери проектів, маркетологи, бухгалтери та
              юристи.
            </p>
          </div>
        </div>

        <div className="button-container">
          <a
            href="https://shop-18229.e3.co.ua/shop/lektsiya-upwork/"
            target="_blank"
            rel="noreferrer"
          >
            <Button isYellow={true} title="Придбати за $13" />
          </a>
        </div>
      </div>
    </div>
  );
};
