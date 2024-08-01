import { useState } from "react";

export default function useTimer( initialTimer = 10, speed = 30) {
    //States
    let Timer = initialTimer;
    let interval;

    const Counting = (e, Funct) => {
        if (e.key !== 'Alt' && e.key !== 'Tab') {
            Timer = initialTimer;
            clearInterval(interval);
        }else{
            return;
        }

        interval = setInterval(() => {
            Timer--
            if (Timer <= 0) {
                Funct(e);
                clearInterval(interval);
            }
        }, speed);
    };

    return { Counting }
}