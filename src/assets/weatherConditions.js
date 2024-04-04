import {FaCloud, FaCloudRain} from "react-icons/fa6";
import { IoSunny, IoThunderstorm } from "react-icons/io5";
import { GiSnowing } from "react-icons/gi";
import { RiMistFill } from "react-icons/ri";

export const weatherConditions = {
    description: {
        '01d': 'Cielo despejado',
        '01n': 'Cielo despejado',
        '02d': 'Nublado',
        '02n': 'Nublado',
        '03d': 'Nublado',
        '03n': 'Nublado',
        '04d': 'Nublado',
        '04n': 'Nublado',
        '09d': 'Lluvioso',
        '09n': 'Lluvioso',
        '10d': 'Lluvioso',
        '10n': 'Lluvioso',
        '11d': 'Tormenta',
        '11n': 'Tormenta',
        '13d': 'Nieve',
        '13n': 'Nieve',
        '50d': 'Niebla',
        '50n': 'Niebla'
    },
    icon: {
        '01d': <IoSunny size={20} />,
        '01n': <IoSunny size={20} />,
        '02d': <FaCloud size={20} />,
        '02n': <FaCloud size={20} />,
        '03d': <FaCloud size={20} />,
        '03n': <FaCloud size={20} />,
        '04d': <FaCloud size={20} />,
        '04n': <FaCloud size={20} />,
        '09d': <FaCloudRain size={20} />,
        '09n': <FaCloudRain size={20} />,
        '10d': <FaCloudRain size={20} />,
        '10n': <FaCloudRain size={20} />,
        '11d': <IoThunderstorm size={20} />,
        '11n': <IoThunderstorm size={20} />,
        '13d': <GiSnowing size={20} />,
        '13n': <GiSnowing size={20} />,
        '50d': <RiMistFill size={20} />,
        '50n': <RiMistFill size={20} />
    }
}