import React from 'react'
import './Intro.css'

const Intro = () => {
  return (
    <div className="intro_container">
      <div className="intro_left">
        <div className="logo_container">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="290"
            height="148"
            viewBox="0 0 102.000000 52.000000"
            preserveAspectRatio="xMidYMid meet"
            className="logo"
          >
            <g
              transform="translate(0.000000,52.000000) scale(0.100000,-0.100000)"
              fill="#000036"
              stroke="none"
            >
              <path
                d="M0 260 l0 -260 510 0 510 0 0 260 0 260 -510 0 -510 0 0 -260z m673
197 c103 -82 209 -116 250 -79 17 15 17 15 8 -12 -14 -35 -14 -36 3 -36 8 0
24 12 35 26 18 23 21 24 21 8 0 -30 -27 -62 -71 -84 -21 -11 -39 -27 -39 -34
0 -8 -15 -32 -34 -55 -19 -22 -36 -46 -38 -52 -3 -8 -14 -10 -30 -6 -23 6 -27
14 -33 59 l-7 52 -16 -38 c-12 -30 -13 -45 -3 -75 6 -21 11 -52 11 -70 0 -24
-4 -31 -20 -31 -15 0 -20 7 -20 28 0 39 -12 52 -61 66 -31 9 -46 20 -51 37 -6
20 -7 19 -5 -8 1 -18 -3 -34 -8 -35 -6 -2 -11 60 -13 164 l-2 168 32 20 c18
11 37 20 41 20 5 0 27 -15 50 -33z m-145 -26 c1 -1 2 -91 2 -201 l0 -200 -55
0 -55 0 0 198 c0 109 3 202 7 206 5 5 79 3 101 -3z m-373 -75 c-10 -14 -25
-26 -35 -26 -45 0 -69 -109 -29 -131 24 -12 69 2 69 21 0 7 20 10 53 8 l52 -3
3 -97 c3 -108 3 -108 -75 -99 -32 3 -33 5 -33 51 0 46 -1 47 -40 59 -50 15
-70 44 -70 102 0 56 31 107 80 131 41 21 47 18 25 -16z m235 -176 l0 -150 -50
0 -50 0 0 143 c0 79 3 147 7 150 3 4 26 7 50 7 l43 0 0 -150z"
              />
              <path
                d="M585 446 c-18 -13 -18 -14 7 -9 18 3 48 -5 89 -26 83 -42 87 -39 12
                9 -68 44 -80 47 -108 26z"
              />
            </g>
          </svg>
        </div>
        <p className="name_info">GAUTHAM VIJAYAKUMAR</p>
        <div className="titles">
          <span>FOUNDER</span>
          <span>TRADER</span>
          <span>MENTOR</span>
        </div>
        <p className="about_author">
          Gautham vijayakumar, NISM (National Institute of Securities Markets)
          and NSE(National Stock Exchange) certified full time equity and
          derivatives trader has now been professionally trading for 4+ years
          and has mentored over 300+ successful traders in past 2 years. This
          idea behind commencing with day traders is for everyone to have a
          mentor, someone who can guide them through their trading careers who
          he himself lacked.
        </p>
      </div>
    </div>
  )
}

export default Intro
