import { useState } from 'react';
// import { useTranslation } from "next-i18next";
import { IconCamera, IconFaceId } from '@tabler/icons-react';
// import { Box, Button, Modal } from '@mantine/core';
import dayjs from 'dayjs';
import Conf from "../../app.config";
import buddhistEra from "dayjs/plugin/buddhistEra";
import weekday from "dayjs/plugin/weekday";
// import { Button } from '@mantine/core';
// import CameraShell from '../camera/CameraShell';
// import { useDisclosure } from '@mantine/hooks';
// import { CameraAndPhoto } from '../camera/CameraAndPhoto';



function Checkin() {
    let defaultValImage: any[] = [];
    // const { t } = useTranslation();
    const [mode, setMode] = useState<string>('log_in');
    // const [opened3, { open: open3, close: close3 }] = useDisclosure(false);
    dayjs.extend(buddhistEra);
    dayjs.extend(weekday);
    
    const dateNow = dayjs(Date.now()).format(Conf.format_date_js_display)
    // const day = dayjs().day()
    const dayInWeek = Conf.dayOfWeek[dayjs().day()];
    const splitDate = dateNow.split('/')
    const date = splitDate[0][0] === '0' ? splitDate[0].slice(-1) : splitDate[0];
    const noOfMonth = splitDate[1];
    const porsor = splitDate[2];

    return (
        <>
            {/* //header */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '25px'}}>check_in_check_out</span>
            </div>

            {/* body */}
            <div>
                {/* switch */}
                <div style={{display: 'flex', width: '100%', backgroundColor: '#F1F3F5', height: '50px', borderRadius: '12px'}}>
                    <div style={{padding: '5px', width: '50%', textAlign: 'center', margin: '7px', backgroundColor: mode ==='log_in'? '#4C6EF5': '', color: mode ==='log_in'? 'white': 'black', borderRadius: '10px'}}
                        onClick={() => setMode('log_in')}>
                        log_in
                    </div>
                    <div style={{padding: '5px', width: '50%', textAlign: 'center', margin: '7px', backgroundColor: mode ==='log_out'? '#4C6EF5': '', color: mode ==='log_out'? 'white': 'black', borderRadius: '10px'}}
                        onClick={() => setMode('log_out')}>
                        log_out
                    </div>

                </div>
            </div>
            {/* photo */}
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
            // onClick={open3}
            >
                <IconFaceId width={'75'} height={'75'} stroke={1.5} style={{marginTop: '25px', marginBottom: '25px'}}/>
                <p style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '10px'}}>{`${(dayInWeek || '')}ที่ ${date} ${noOfMonth} ${porsor}`}</p>
                

                <p>{mode === 'log_in' ? "take_photo_to_log_in": "take_photo_to_log_out"}</p>
                <IconCamera stroke={1} height={'40px'} width={'40px'} style={{marginTop: '20px', marginBottom: '30px'}}/>
                {/* <CameraAndPhoto
                    deletable={true}
                    imgs={defaultValImage}
                    uploadable={true}
                    imgsLimit={3}
                    // watermarkText={watermarkMsg}
                    // imgUpdateCallback={(newImgs) => {
                    //     props.onUpdate(newImgs, activityKey, key);
                    // }}
                ></CameraAndPhoto> */}
                {/* <Button>confirm</Button> */}

                <button style={{border: '2px solid black', width: '100%', borderRadius: '12px', height: '50px'}}>confirm</button>
            </div>
        </>
       
    );
}

export default Checkin;