import './buy.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function buy() {
    console.log("Buying paper");
}

function Author(name) {
    return (
        <span>{name}</span>
    );
}

function Buy() {
    const { id } = useParams();
    const [author, setAuthor] = useState("Dr. Arjun Khorana");
    const [title, setTitle] = useState("Title");
    const [abstract, setAbstract] = useState("Loreum Ipsum");
    const [price, setPrice] = useState(0.00);

    let navigate = useNavigate()

    useEffect(() => {
        /*
        axios({
            method: 'get',
            url: `https://localhost:5000/paper/id=${id}`,
        }).then( res => { 
            setTitle(res.title);
            setAuthor(res.official_author);
            setAbstract(res.abstract);
            setPrice(res.price);
        }).catch(error => {
            console.log(error);
            navigate("/404");
        })
        */

        setPrice(10.50);
        setTitle("The effect of dielectric environment on the neutral and charged dark excitons in WSe2 monolayer");
        setAuthor("Dr. Arjun \'Bezos Beta\' Khorana");
        setAbstract("Advanced video analytic systems, including scene classification and object detection, have seen widespread success in various domains such as smart cities and autonomous transportation. With an ever-growing number of powerful client devices, there is incentive to move these heavy video analytics workloads from the cloud to mobile devices to achieve low latency and real-time processing and to preserve user privacy. However, most video analytic systems are heavyweight and are trained offline with some pre-defined latency or accuracy requirements. This makes them unable to adapt at runtime in the face of three types of dynamism -- the input video characteristics change, the amount of compute resources available on the node changes due to co-located applications, and the user's latency-accuracy requirements change. In this paper we introduce ApproxDet, an adaptive video object detection framework for mobile devices to meet accuracy-latency requirements in the face of changing content and resource contention scenarios. To achieve this, we introduce a multi-branch object detection kernel (layered on Faster R-CNN), which incorporates a data-driven modeling approach on the performance metrics, and a latency SLA-driven scheduler to pick the best execution branch at runtime. We couple this kernel with approximable video object tracking algorithms to create an end-to-end video object detection system. We evaluate ApproxDet on a large benchmark video dataset and compare quantitatively to AdaScale and YOLOv3. We find that ApproxDet is able to adapt to a wide variety of contention and content characteristics and outshines all baselines, e.g., it achieves 52% lower latency and 11.1% higher accuracy over YOLOv3. ");
    });

    return (
        <div id="buy-background">
            <div id="buy-view"> 
                <div id="buy-title">
                    {title}
                </div>
                <div id="buy-authors">
                    {Author(author)}
                </div>
                <div id="buy-abstract"> 
                    {abstract}
                </div>
                <button id="buy-button" onClick={buy}>BUY ${Number(price).toFixed(2)}</button>
            </div>
        </div>
    );
}

export default Buy;
