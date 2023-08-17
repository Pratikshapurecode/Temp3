import gstyle from '../globle.module.css';
import '../Globle.css'

const ActiveMembersSection = () => {

    const activemembers = [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBOgDaJSqCIdnhpNZGX87t26yj8Ezv-RBPGepKAgIIQiPQkssgMRc0W5I_kKrLZCQf8c&usqp=CAU',
            title: 'Golden rukes that will improve your design',
            tag: 'BY JACK BLACK',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOn9shF9kc5vPqgA30DXU0prx5-aYyh28Rw&usqp=CAU',
            title: 'Golden rukes that will improve your design',
            tag: 'BY JACK BLACK',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
            title: 'Golden rukes that will improve your design',
            tag: 'BY JACK BLACK',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI18YcTCOM-vvqaP5TFwE3RGpuAkvC5CeG8Q&usqp=CAU',
            tag: 'BY JACK BLACK',
            title: 'What do you need to know for a succeful startup',
        },

    ]


    return (<>
        <div className={gstyle.act_container}>
            <div className={gstyle.act_sub_ct}>
                <h2 style={{borderBottom: '1px solid #c5c4c4', paddingBottom: '8px'}}>Active Members</h2>
                <div className={gstyle.act_sub_ct2}>
                    {
                        activemembers.map((data)=>(
                            <div className={gstyle.nb_pf_img_box}>
                        <img src={data.image} alt='profile' />
                    </div>
                        ))
                    }
                </div>
                <h5>All View &rarr;</h5>
            </div>

            <div className={gstyle.act_sub_ct}>
                <h2 style={{borderBottom: '1px solid #c5c4c4', paddingBottom: '8px'}}>Recent Topics</h2>
                {
                    activemembers.map((data) => (
                        <div className={gstyle.act_sub_ct2}>
                            <div className={gstyle.act_ct2_img_box}>
                                <img src={data.image} />
                            </div>
                            <div>
                                <h4 style={{ margin: 0, padding: 0 }}>{data.title}</h4>
                                <p style={{ margin: 0, padding: 0 }}>{data.tag}</p>
                            </div>
                        </div>
                    ))
                }



            </div>
        </div>
    </>)
}

export { ActiveMembersSection };