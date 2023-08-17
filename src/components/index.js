import Slider from "./leftSlider/Slider";
import { NavBar } from "./navBar/NavBar";
import { GroupSection } from "./sections/Group";
import { GroupCardsSection } from "./sections/GroupCards";
import gstyle from './globle.module.css';
import './Globle.css'
import { ActiveMembersSection } from "./sections/ActiveMembers";

export default function HomePage() {

    const GroupsObject = [
        {
            title: 'Designer Group',
            status: 'Join Group',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hubble_ultra_deep_field.jpg/1200px-Hubble_ultra_deep_field.jpg',
            subimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJJU8QlRYf9RKRQlvy9fM5PMk_FJsYrdfWw&usqp=CAU',
            time: '2 hours ago',
            group: 'Public Group',
            groupmember: 1,

        },
        {
            title: 'Designer Group',
            status: 'Join Group',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hubble_ultra_deep_field.jpg/1200px-Hubble_ultra_deep_field.jpg',
            subimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJJU8QlRYf9RKRQlvy9fM5PMk_FJsYrdfWw&usqp=CAU',
            time: '2 hours ago',
            group: 'Public Group',
            groupmember: 5,

        },
        {
            title: 'Designer Group',
            status: 'Join Group',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hubble_ultra_deep_field.jpg/1200px-Hubble_ultra_deep_field.jpg',
            subimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJJU8QlRYf9RKRQlvy9fM5PMk_FJsYrdfWw&usqp=CAU',
            time: '2 hours ago',
            group: 'Public Group',
            groupmember: 9,

        }
    ]

    return (<>
        <NavBar />
        <div style={{ display: 'flex' }}>

            <Slider />
            <div style={{ width: '75%' }}>
                <GroupSection />
                <div style={{gap: '5px'}} className={gstyle.grp_container}>
                    <div className={gstyle.grp_ct_box2}>
                        <p style={{ color: 'gray' }}>Viewing 1 - 5 of 5 groups</p>
                    </div>
                    <div className="cards">
                        {GroupsObject.map((ele) => <GroupCardsSection group={ele} />)}
                    </div>
                </div>
            </div>
            <ActiveMembersSection />
        </div>
    </>)
}