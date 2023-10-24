import React from "react";
import { Image } from "../../../container";
import styles from "./RenderSlide.module.scss";
import { StringToHTML } from "../../../container";
import useHover from "../../../../hook/use-hover";
import { CSSTransition } from "react-transition-group";
import { findImageByType } from "../../../../util";

const renderImage = (type, imgStyle='') => {
  if(type === 'fb') return <Image className={imgStyle} src="/facebook-white-icon.svg" alt="fb-icon" />
  if(type === 'Noron') return <Image className={imgStyle} src="/noron-white-icon.svg" alt="noron-icon" />
  if(type === 'ln') return <Image className={imgStyle} src={'/linkedln-white.svg'} alt='ln'/>
  return null
}

const RenderSlide = ({ name, introduction, url_cover, socials, job_title }) => {
  const { isHover, isHoverHandler, isNotHoverHandler } = useHover(false);
  return (
    <div
      onMouseEnter={isHoverHandler}
      onMouseLeave={isNotHoverHandler}
      className={styles.container}
    >
      <Image className={styles.avatar} src={url_cover} alt="" />
      <div className={`text-center ${styles.infos}`}>
        <p>{job_title}</p>
        <h4>{name}</h4>
        <div
          className={`d-flex justify-content-center align-items-center ${styles.images}`}
        >
          {(socials || [])?.map((item, index) => (
            <React.Fragment key={index}>
              {renderImage(item?.type)}
            </React.Fragment>
          ))}
          {!socials || socials.length === 0 && <div className="bg-transparent"/>}
        </div>
      </div>

      <CSSTransition
        in={isHover}
        unmountOnExit
        mountOnEnter
        classNames="fade"
        timeout={500}
      >
        <div className={styles.flow}>
          <div className={styles.content}>
            <div
              className={`d-flex flex-column justify-content-center align-items-center ${styles.text} h-100`}
            >
              <p className={styles.title}>{job_title}</p>
              <h5>{name}</h5>
              <div className={styles.intro}>
                <StringToHTML string={introduction} />
              </div>
              <div className={`d-flex align-items-center ${styles.social}`}>
                {socials &&
                  socials?.map((item, index) => {
                    if (item.src !== "null" || item.src) {
                      return (
                        <a
                          href={item.src}
                          target="_blank"
                          rel="noreferrer"
                          key={index}
                        >
                          <Image
                            className={`${
                              styles[`logo-${item.type.toLowerCase()}`]
                            }`}
                            src={
                              item.type === "fb"
                                ? "/fb-orange-icon.svg"
                                : item.type === "Noron"
                                ? "/noron-orange-icon.svg"
                                : "/linkedln-icon.svg"
                            }
                            alt=""
                          />
                        </a>
                      );
                    }
                    return "";
                  })}
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default RenderSlide;
