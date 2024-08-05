import { useRef, useState } from "react";
import { useStore } from "@nanostores/react";
import { MaxNoteStore, DecimalStore, MiniumNoteStore } from "../../context/GlobalContext";

import useTimer from "../../Hooks/useTimer";
import { SaveData } from "../Functions/DataManager";
import { AppInputStore } from "../context/App";

export default function AppConfig() {
    //GlobalStates
    const Decimal = useStore(DecimalStore);

    //Hooks
    const { Counting } = useTimer(9);

    //Functions
    async function setMaxNote(e) {
        let Num = Number(e.target.value);
        if (Num <= 0) {
            e.target.value = '';
        } else if (Num >= 1000) {
            e.target.value = 1000;
        }
        if (Num === 0) {
            Num = 20;
        }

        await new Promise((resolve) => {
            Counting(e, () => {
                MaxNoteStore.set(Num);
                resolve();
            });
        });

        document.querySelectorAll('.app-input-input[use = "yes"').forEach(element => {
            if (element.value && Number(element.value) > Num) {
                element.value = MaxNoteStore.get();
            }
        });

        const Data = SaveData();
        AppInputStore.set(Data);


    };


    const setMiniumNoteAprove = (e) => {
        MiniumNoteStore.set(Number(e.target.value))
    }

    return (
        <>
            <div className='app-drop-config absolute f-col h-100 w-100 br-12'>
                <h4>Configuration</h4>
                <ul className='f-col px-3 mt-3 g-10' >
                    <li className='f-row f-justify-between f-align-center'>
                        <p>Decimals</p>
                        <input type="checkbox" onChange={(e) => DecimalStore.set(e.target.checked)} checked={Decimal} />
                    </li>
                    <li className='f-row f-justify-between f-align-center'>
                        <p>Max Note</p>
                        <input className='p-2 br-6' placeholder='20' maxLength={4} type="text" onChange={setMaxNote} />
                    </li>
                    <li className='f-row f-justify-between f-align-center'>
                        <p>Min Note Aproved</p>
                        <input className='p-2 br-6' placeholder='11.5' maxLength={4} type="text" onChange={setMiniumNoteAprove} />
                    </li>
                </ul>
            </div>
        </>
    )
}