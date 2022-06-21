import { useState } from 'react';
import Heading from '~/components/common/Heading';
import Category from './Category';
import profileThumbnail1 from '~/assets/image/profile_1.png';
import profileThumbnail2 from '~/assets/image/profile_2.png';
import profileThumbnail3 from '~/assets/image/profile_3.png';
import profileThumbnail4 from '~/assets/image/profile_4.png';

import Item from './Item';
import Detail from './Detail';

function Portfolio() {
    const [active, setActive] = useState(0);
    const [current, setCurrent] = useState(0);
    const [show, setShow] = useState(false);
    const types = ['All', 'Html/Css', 'React'];
    const projects = [
        {
            name: 'My profile',
            thumbnail: [profileThumbnail1, profileThumbnail2, profileThumbnail3, profileThumbnail4],
            detail: 'This web page. I finished it as a single page application using HTML, Taiwind CSS, and ReactJS. It summarizes the products that I have worked on so far and the skills that I have acquired.',
            type: '0',
            createdAt: '6/10/2022',
            completedAt: '6/18/2022',
            frontend: 'ReactJs, TaiwindCss',
            backend: 'None',
            demo: '',
        },
    ];

    return (
        <div>
            <Heading title="My" mainTitle="Portfolio" hiddenTitle="Works" />
            <div className="max-w-6xl m-auto">
                <div className="flex justify-center">
                    {types.map((item, i) => {
                        return (
                            <Category
                                key={i}
                                name={item}
                                handle={() => {
                                    setActive(i);
                                }}
                                active={i === active}
                            />
                        );
                    })}
                </div>
                <div className="flex flex-nowrap phone:mt-3">
                    {projects.map((item, i) => {
                        return (
                            <Item
                                key={i}
                                thumbnail={item.thumbnail[0]}
                                name={item.name}
                                handler={() => {
                                    setCurrent(i);
                                    setShow(true);
                                }}
                            />
                        );
                    })}
                    {show && (
                        <Detail
                            close={() => {
                                setShow(false);
                            }}
                            project={projects[current]}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
