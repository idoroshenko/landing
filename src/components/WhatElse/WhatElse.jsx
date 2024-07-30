import React from 'react';
import './WhatElse.css';
import useIsDesktop from '../IsDesktop';
import { ReactComponent as TitleLine } from '../../images/svg/mobile/title-line.svg';
import { ReactComponent as Subparagraphs } from '../../images/svg/mobile/subparagraphs.svg';
import { ReactComponent as SubparagraphsDesktop } from '../../images/svg/desktop/sub-desktop.svg';
import { ReactComponent as XYellow } from '../../images/svg/mobile/x-yellow.svg';
import { ReactComponent as XWhite } from '../../images/svg/mobile/x-white.svg';
import Button from '../Button/Button';

export const WhatElse = () => {
  const isDesktop = useIsDesktop();
  return (
    <div className="whatElse">
      <div className="container">
        <div className="wrapper">
          <h2 className="whatElse_title">Що ще?</h2>
          <TitleLine></TitleLine>
          <div className="list_wrapper">
            {isDesktop ? (
              <SubparagraphsDesktop className="whatElse_sub_desk"></SubparagraphsDesktop>
            ) : (
              <Subparagraphs className="whatElse_sub"></Subparagraphs>
            )}

            <XYellow className="whatElse_xyellow"></XYellow>
            <XWhite className="whatElse_xwhite"></XWhite>
            <ul className="whatElse_list">
              <li>
                Як заповнити свій профіль, щоб він був привабливим для клієнтів
              </li>
              <li>
                Як написати ефективну презентацію, яка покаже ваші сильні
                сторони
              </li>
              <li>
                Як знайти проекти, які відповідають вашим навичкам і досвіду
              </li>
              <li>
                Як написати лист заявки, який зробить вас найкращим кандидатом
              </li>
              <li>Як виділитися серед інших фрілансерів</li>
            </ul>
          </div>
        </div>

        <div className="button-container">
          <a
            href="https://shop-18229.e3.co.ua/shop/lektsiya-upwork/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <Button isYellow={true} title="Придбати за $30" />
          </a>
        </div>
      </div>
    </div>
  );
};
