import gstyle from '../globle.module.css';
import '../Globle.css'


const GroupSection = () => {
    return (<>
        <div className={gstyle.grp_container}>
            <div style={{borderBottom: '1px solid #c9c9c9'}} className={gstyle.grp_ct_box2}>
            <h2>Groups</h2>
            </div>
            <div className={gstyle.grp_ct_box}>
                <h3 style={{margin: '10px', padding: 0}}>Search Groups..</h3>
                <div className={gstyle.grp_ct_box_input_box}>
                    <input className={gstyle.input} type='text' placeholder="Search Groups.." />
                    <button>SEARCH</button>
                </div>
            </div>

            <div className={gstyle.grp_ct_box2}>
                <div className={gstyle.grp_ct_sub_box}>
                    <div>
                        <b className='bold red'>All Groups</b>
                        <span>5</span>
                    </div>
                    <div>
                        <b className='bold'>My Groups</b>
                        <span>3</span>
                    </div>

                </div>
                <div className={gstyle.grp_ct_sub_box2}>
                    <select className={gstyle.select}  aria-label="Default select example">
                        <option selected>Last Active</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>

        </div>
    </>)
}

export { GroupSection };