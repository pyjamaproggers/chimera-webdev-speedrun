import React, { useState } from "react";
import './header.css'
import { Squash as Hamburger, Squash } from 'hamburger-react'
import Drawer from '@mui/material/Drawer';
import { MdArrowOutward } from "react-icons/md";

export default function Header() {

    const [showNavbarMenu, setShowNavbarMenu] = useState(false)

    return (
        <>
            <div className="navbar">
                <Squash
                    color="black"
                    toggled={showNavbarMenu}
                    onToggle={toggled => {
                        if (toggled) {
                            // open a menu
                            setShowNavbarMenu(true)
                        } else {
                            setShowNavbarMenu(false)
                        }
                    }}
                />
                <div className="navbar-heading-row">
                    <span className="navbar-heading-text rotate270">
                        Lorem Ispum
                        Lorem Ipsum
                    </span>
                </div>
                <div className="navbar-heading-row">
                    <span className="navbar-heading-text rotate270"
                        style={{
                            marginBottom: '48px'
                        }}>
                        @ 2024
                        { }
                    </span>
                </div>
            </div>
            <Drawer open={showNavbarMenu} onClose={() => { setShowNavbarMenu(false) }}
                style={{
                    width: '100vw',
                }}>
                <div className="navbar-menu">
                    <div className="navbar-menu-toprow">
                        <Squash
                            color="white"
                            toggled={showNavbarMenu}
                            onToggle={toggled => {
                                if (toggled) {
                                    // open a menu
                                    setShowNavbarMenu(true)
                                } else {
                                    setShowNavbarMenu(false)
                                }
                            }}
                        />
                        <span className="navbar-menu-toptext text-white">
                            <span style={{fontStyle: 'italic', fontSize: '14px', marginBottom: '4px'}}>Lorem Ipsum</span>
                            <span> Lorem Ipsum </span>
                        </span>
                        <Squash
                            color="black"
                        />
                    </div>
                    <div className="navbar-menu-items">
                        <h1 className="text-white navbar-menu-item" data-text="Home">
                            Home
                        </h1>
                        <h1 className="text-white navbar-menu-item" data-text="Lorem">
                            Lorem
                        </h1>
                        <h1 className="text-white navbar-menu-item" data-text="Ipsum">
                            Ipsum
                        </h1>
                        <h1 className="text-white navbar-menu-item" data-text="About">
                            About
                        </h1>
                    </div>

                    <div className="navbar-menu-bottomlinks">
                        <div className="navbar-menu-bottom-item">
                            <span className="text-white">Lorem</span>
                            <MdArrowOutward size={24} color="white" className="menu-navbar-bottomicon" />
                        </div>

                        <div className="navbar-menu-bottom-item">
                            <span className="text-white">Ipsum</span>
                            <MdArrowOutward size={24} color="white" className="menu-navbar-bottomicon" />
                        </div>

                        <div className="navbar-menu-bottom-item">
                            <span className="text-white">Data</span>
                            <MdArrowOutward size={24} color="white" className="menu-navbar-bottomicon" />
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    )
}