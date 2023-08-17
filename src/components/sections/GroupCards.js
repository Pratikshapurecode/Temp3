import gstyle from '../globle.module.css';
import '../Globle.css'

const GroupCardsSection = ({ group }) => {

    console.log(group)
    return (<>
        <div className={gstyle.grpcs_container}>
            <div className={gstyle.grpcs_ct_img_box}>
                <img src={group.image} alt='image' />
            </div>
            <div className={gstyle.grpcs_ct2}>
                <div className={gstyle.grpcs_sub_ct2}>
                    <div className={gstyle.grpscs_ct_img_sub_box}>
                        <img src={group.subimage} alt='image' />
                    </div>
                    <h5 style={{color: '#4b62e6'}}>{group.status}</h5>
                </div>
                <div style={{margin: '0 10px'}}>
                    <h3 style={{margin: 0, padding: 0}}>{group.title}</h3>
                    <p style={{margin: '2px', padding: 0}}>{group.time}</p>
                </div>
                <div style={{margin: '0 10px'}}>
                    <p >{group.group + " / " + group.groupmember + (group.groupmember > 1 ? ' members' : ' member')} </p>
                </div>
            </div>
        </div>
    </>)
}

export { GroupCardsSection }