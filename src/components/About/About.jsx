import React from 'react';
import './About.css';
import useIsDesktop from '../IsDesktop';
import { ReactComponent as SubtitleLine } from '../../images/svg/mobile/subtitle-line.svg';
import { ReactComponent as BlueRing } from '../../images/svg/mobile/blueRing.svg';
import { ReactComponent as Bulb } from '../../images/svg/mobile/bulb.svg';
import { ReactComponent as XBlue } from '../../images/svg/mobile/x-blue.svg';
import { ReactComponent as Upwork } from '../../images/svg/mobile/upwork1.svg';
import imageSrc from '../../images/photos/about.png';
import Button from '../Button/Button';

export const About = () => {
  const isDesktop = useIsDesktop();
  return (
    <div className="about">
      <div className="container">
        <div className="about_wrapper">
          <p className="about_title">
            ЯК <span className="about_title_span">ЗНАЙТИ</span> РОБОТУ НА
            UPWORK?
          </p>
          {!isDesktop && (
            <>
              <BlueRing className="blue_ring"></BlueRing>
              <Upwork className="upwork"></Upwork>
              <img
                className="about_image"
                src={imageSrc}
                alt="Фріланс на Upwork"
              />
            </>
          )}

          <SubtitleLine></SubtitleLine>
        </div>
        <p className="about_list_title">У цьому уроці ви дізнаєтеся:</p>
        <ul className="about_list">
          <li className="about_item">
            <Bulb className="about_svg"></Bulb>
            <p className="about_text">
              Як створити <span className="about_span">успішний</span> профіль
              на Upwork
            </p>
          </li>
          <li className="about_item">
            {' '}
            <Bulb className="about_svg"></Bulb>
            <p className="about_text">
              <span className="about_span">презентувати себе</span> потенційним
              клієнтам
            </p>
          </li>

          <li className="about_item">
            <Bulb className="about_svg"></Bulb>
            <p className="about_text">
              знаходити проекти та відправляти листи заявки, які
              <span className="about_span"> виділять вас</span> серед інших
              кандидатів.
            </p>
          </li>
        </ul>
        <a
          href="https://shop-18229.e3.co.ua/shop/lektsiya-upwork/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <Button position="relative" isYellow={true} title="Придбати за $30" />
        </a>
        {!isDesktop && <XBlue className="x-blue"></XBlue>}
      </div>
    </div>
  );
};
