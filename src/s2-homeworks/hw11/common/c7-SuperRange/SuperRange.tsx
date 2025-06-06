import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            // valueLabelDisplay="auto"
            sx={{ // стили для слайдера // пишет студент
                width: '147px',
                color: 'rgb(0, 204, 34)',
                "& .MuiSlider-thumb": {
                    height: 20,
                    width: 20,
                    backgroundColor: "white",
                    border: "1px solid rgb(0, 204, 34)",
                    "&::before": {
                        content: '""',
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "rgb(0, 204, 34)",
                        boxShadow: "none",
                    },
                    '& .MuiSlider-thumb::after': {
                        display: 'block',
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#00CC22'
                    },
                },
                "& .MuiSlider-rail": {
                    backgroundColor: "rgb(139, 139, 139)",
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
