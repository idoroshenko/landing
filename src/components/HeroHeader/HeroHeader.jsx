import React from 'react';
import useIsDesktop from '../IsDesktop'; // Ensure the path is correct
import { ReactComponent as TitleLine } from '../../images/svg/mobile/title-line.svg';
import { ReactComponent as TitleLineDesktop } from '../../images/svg/desktop/title-line-desktop.svg';
import { ReactComponent as Up } from '../../images/svg/mobile/upwork3.svg';
import { ReactComponent as Work } from '../../images/svg/mobile/upwork2.svg';
import { ReactComponent as XYellow } from '../../images/svg/mobile/x-yellow.svg';
import { ReactComponent as XWhite } from '../../images/svg/mobile/x-white.svg';
import { ReactComponent as Arrow } from '../../images/svg/desktop/path46.svg';
import Button from '../Button/Button';
import './HeroHeader.css';

export const HeroHeader = () => {
  const isDesktop = useIsDesktop();

  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero_title">
          Як почати працювати на{' '}
          <span className="hero_title_span">Upwork </span>і стати фрілансером
        </h1>

        {isDesktop ? (
          <>
            <TitleLineDesktop />
            <div className="content">
              <div className="left_column>">
                <p className="hero_text_1">
                  Чи мрієте ви працювати з
                  <span> будь-якої точки світу</span>?
                </p>
                <div className="button-container">
                  <a
                    href="https://shop-18229.e3.co.ua/shop/lektsiya-upwork/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      className="desktop_button"
                      isYellow={true}
                      title="Придбати за $13"
                    />
                  </a>
                </div>
              </div>
              <div class="middle_column">
                <Arrow class="hero_arrow"></Arrow>
              </div>
              <div className="right_column">
                {' '}
                <p className="hero_text_3">
                  Якщо так, то фріланс платформа
                  <span className="hero_title_span"> Upwork</span> - це
                  ідеальний варіант для вас.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <TitleLine className="title_line" />
            <p className="hero_text_1">
              Чи мрієте ви...
              <Up className="hero_question" />
              <Work className="work"></Work>
              <XYellow className="hero_xyellow" />
            </p>
            <p className="hero_text_2">
              працювати з
              <span className="hero_text_2_span"> будь-якої точки світу</span>
            </p>
            <p className="hero_text_3">
              Якщо так, то фріланс платформа
              <span className="hero_title_span"> Upwork</span> - це ідеальний
              варіант для вас.
              <XWhite className="hero_xwhite" />
            </p>
            <div className="button-container">
              <a
                href="https://shop-18229.e3.co.ua/shop/lektsiya-upwork/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <Button isYellow={true} title="Придбати за $13" />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
