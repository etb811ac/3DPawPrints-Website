import './hueso.scss'

const Hueso = ({ bgColor, textColor, name, phone }) => {

    return (
        <div className="hueso-container">
            <svg viewBox="0 0 431.96096 291.33344" width="100%">
                <g
                    id="Hueso"
                    transform="translate(-210.13303,-440.906)">
                    <path
                        d="m 574.344,446.656 c -29.273,0 -53.602,25.804 -58.844,50.935 -9.725,3.758 -20.194,2.393 -28.531,2.503 -6.018,0.079 -11.737,0.016 -17.469,-0.032 0.113,-1.231 0.375,-2.426 0.375,-3.687 0,-22.487 -18.347,-40.719 -40.969,-40.719 -22.622,0 -40.968,18.232 -40.968,40.719 0,1.272 0.26,2.477 0.374,3.719 -10.54,1.848 -21.345,6.02 -36.593,0.125 -14.349,-14.272 -21.255,-31.312 -37.907,-42.813 -9.572,-6.611 -21.846,-10.995 -33.437,-10 -14.919,1.28 -30.675,6.426 -41.781,16.469 -11.422,10.328 -18.49,25.761 -21.594,40.844 -2.686,13.051 -0.251,27.41 5,39.656 6.964,16.239 31.24,25.656 30.562,43.313 -1.059,27.612 -33.948,47.484 -35.093,75.093 -0.858,20.659 12.556,42.908 29.719,54.438 16.055,10.786 39.993,11.78 57.874,4.406 17.318,-7.141 17.469,-40.614 36.032,-43.125 56.828,-7.686 114.299,-5.952 171.812,-3.469 5.856,28.763 30.362,50.344 59.719,50.344 33.723,0 61.063,-28.466 61.063,-63.594 0,-16.344 -5.962,-31.202 -15.688,-42.469 -5.608,-12.515 -18.39,-21.519 -18.469,-35.5 -0.054,-9.712 6.859,-18.625 13.313,-27.593 13.883,-12.751 23.5,-29.876 23.5,-45.625 0,-29.976 -28.902,-63.938 -62,-63.938 z"
                        fill={bgColor}
                        fillOpacity="1"
                        fillRule="nonzero"
                        opacity="1"
                        stroke={textColor}
                        strokeLinecap="butt"
                        strokeLinejoin="round"
                        strokeWidth="10"
                    />

                </g>

                <text x="50%" y="130" className="nombre" textAnchor="middle" style={{ fill: textColor }}>{name}</text>
                <text x="50%" y="195" className="telefono" textAnchor="middle" style={{ fill: textColor }}>{phone}</text>
            </svg>
        </div>
    )
};

export default Hueso;