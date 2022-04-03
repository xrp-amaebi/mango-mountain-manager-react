import React from 'react';
import Up from '../Buttons/UpButton';
import Front from '../Buttons/FrontButton';
import Down from '../Buttons/DownButton';
import Back from '../Buttons/BackButton';
import FrontPunch from '../Buttons/FrontPunch';
import BackPunch from '../Buttons/BackPunch';
import BackKick from '../Buttons/BackKick';
import FrontKick from '../Buttons/FrontKick';
import Amplify from '../Buttons/AmplifyButton';
import Block from '../Buttons/BlockButton';
import Stance from '../Buttons/StanceButton';
import Throw from '../Buttons/ThrowButton';
import DownRight from '../Buttons/DownRightButton';

export const displayInputs = (input) => (
    <div className={'view view__special'}>
        <div>
            {
                [...input].map((item, i) => {
                    switch (item.toLowerCase()) {
                        case 'f':
                            return <Front key={i} />;

                        case 'd':
                            return <Down key={i} />;

                        case 'u':
                            return <Up key={i} />;

                        case 'b':
                            return <Back key={i} />;

                        case '1':
                            return <FrontPunch key={i} />;

                        case '2':
                            return <BackPunch key={i} />;

                        case '3':
                            return <FrontKick key={i} />;

                        case '4':
                            return <BackKick key={i} />;

                        case 'a':
                            return <Amplify key={i} />;

                        case 's':
                            return <Stance key={i} />;

                        case 'g':
                            return <Block key={i} />;

                        case 't':
                            return <Throw key={i} />;

                        case 'z':
                            return <DownRight key={i} />;

                        case '+':
                            return <div key={item} ><code>+</code></div>;

                        case ',':
                            return <div key={item}><code>,</code></div>;

                        default:
                            return <div key={item}></div>
                    }
                })
            }
        </div>
    </div>   
);