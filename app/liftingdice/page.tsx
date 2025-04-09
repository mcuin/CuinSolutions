"use client";
import React from "react";
import './liftingdicepage.css';
import {default as LiftingDiceIcon} from "../assets/liftingdiceiconv1.svg";
import { default as AppStore } from "../assets/DownloadAppStoreBadge.svg"
import { default as PlayStore } from "../assets/GetItOnGooglePlay.svg"
import { default as iOSQR } from "../assets/liftingDiceiOSQRCode.svg"
import { default as AndroidQR } from "../assets/liftingDicePlayQRCode.svg"
import Image from "next/image";
import LiftingDiceCarousel from "./liftingdicecarousel";

export default function LiftingDice() {

    return(
        <div className="lifting-dice-container">
            <div className="lifting-dice-title-container">
                <Image className="lifting-dice-icon" src={LiftingDiceIcon} alt="Lifting Dice App Icon" />
                <h1 className="lifting-dice-title">Lifting Dice</h1>
            </div>
            <LiftingDiceCarousel />
            <div className="lifting-dice-technologies-container">
                <h3 className="lifting-dice-technologies-title">Technologies Used</h3>
                <ul className="lifting-dice-technologies-list">
                    <li>Kotlin  Multiplatform</li>
                    <li>Jeptack Compose</li>
                    <li>SwiftUI</li>
                    <li>Firebase Real Time Database</li>
                    <li>Koin</li>
                    <li>MVVM</li>
                    <li>Flows</li>
                    <li>Publisher/Subscriber</li>
                    <li>Mutable States</li>
                    <li>Observale States</li>
                </ul>
            </div>
            <div className="lifting-dice-description">
                <p>Switch up your usual routine, start a new one, or discover new lifts you will love. Built with all levels of equipment access in mind everyone will be able to find something worth starting here. Use milk jugs in place of dumbbells if there is no equipment, or enjoy a new workout if there is a full gym. Avaialbe on iOS and Android.</p>
            </div>
                <div className="lifting-dice-app-store">
                <a href="https://apps.apple.com/us/app/lifting-dice/id6743261784">
                    <Image className="lifting-dice-app-store-badge" src={AppStore} alt="Get Lifting Dice on the App Store" />
                </a>
                <Image className="lifting-dice-qr-code" src={iOSQR} alt="Lifting Dice App Store QR code" />
                </div>
                <div className="lifting-dice-play-store">
                <a href="https://play.google.com/store/apps/details?id=com.cuinsolutions.liftingdice.android">
                    <Image className="lifting-dice-play-store-badge" src={PlayStore} alt="Get Lifting Dice on the Play Store" />
                </a>
                <Image className="lifting-dice-qr-code" src={AndroidQR} alt="Lifting Dice Play Store QR code" />
                </div>
        </div>
    )
}