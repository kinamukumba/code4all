'use client';
import { useEffect, useRef } from 'react';
import styles from './FeedbackSlider.module.css';
import Image from 'next/image';
import { FcStart } from 'react-icons/fc';
import { FaStarHalf } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const FeedbackSlider = ({classA}:{classA:string}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const track = trackRef.current;

        if (track && wrapper) {
            // Clona os feedbacks para o loop infinito
            const items = Array.from(track.children) as HTMLElement[];
            items.forEach((el) => {
                const clone = el.cloneNode(true);
                track.appendChild(clone);
            });

            const totalWidth = track.scrollWidth;
            const speed = 50; // pixels por segundo
            const duration = totalWidth / speed;

            track.style.animationDuration = `${duration}s`;

            const handleMouseEnter = () => wrapper.classList.add(styles.paused);
            const handleMouseLeave = () => wrapper.classList.remove(styles.paused);

            wrapper.addEventListener('mouseenter', handleMouseEnter);
            wrapper.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                wrapper.removeEventListener('mouseenter', handleMouseEnter);
                wrapper.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <div className={styles.track + ' ' + classA} ref={trackRef}>
                <div className={styles.item}>
                    <div className={styles.id}>
                        <Image
                            src="/user02.jpeg"
                            alt="Foto do Perfil"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <span className={styles.span}>
                            <p>Virgílio António</p>
                            <p>Front-End Developer</p>
                        </span>
                    </div>
                    <div className={styles.stars}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.id}>
                        <Image
                            src="/user05.jpg"
                            alt="Foto do Perfil"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <span className={styles.span}>
                            <p>Pedro Barbosa</p>
                            <p>Fullstack Developer</p>
                        </span>
                    </div>
                    <div className={styles.stars}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.id}>
                        <Image
                            src="/user06.jpg"
                            alt="Foto do Perfil"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <span className={styles.span}>
                            <p>João Mário</p>
                            <p>Back-End Developer</p>
                        </span>
                    </div>
                    <div className={styles.stars}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.id}>
                        <Image
                            src="/user05.jpg"
                            alt="Foto do Perfil"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <span className={styles.span}>
                            <p>Pedro Barbosa</p>
                            <p>Fullstack Developer</p>
                        </span>
                    </div>
                    <div className={styles.stars}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.id}>
                        <Image
                            src="/user02.jpeg"
                            alt="Foto do Perfil"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <span className={styles.span}>
                            <p>Virgílio António</p>
                            <p>Front-End Developer</p>
                        </span>
                    </div>
                    <div className={styles.stars}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSlider;
