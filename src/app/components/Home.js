import React, { PureComponent } from "react";

export default class Home extends PureComponent {


    componentDidMount() {

    }

    render() {
        console.log("Home render");
        return (


            <div id="home">
                <h2>Home</h2>
                <p>
                    We’re a group of highly ambitious craftsmen. From strategy to technology implementation, Xebia is a one-stop shop for full stack digital transformation.
                    
                    We provide innovative solutions and services to help your organization become a digital winner.
                    
                    We’re organized in specialized centers of excellence all over the world. We are like-minded individuals who aim for authority in our respective fields.
</p><p>
                    Is your release cycle too slow? Are your standard processes prone to errors? Do your deployment tools require hand-scripting?
                    
                    XL Deploy automates your application deployments so releases occur in a repeatable, standardized and efficient way. The end result? Higher quality software delivered faster and at scale.
</p>
                <ul>
                    <li>Accelerate time to market
    </li>
                    <li>Reduce software defects
    </li>
                    <li>Ensure regulatory and audit compliance
    </li>
                    <li>Improve collaboration between teams
    </li>
                    <li>No need to install and maintain deployment agents in each environment
    </li>
                    <li>Model-driven approach simplifies changes: no script or workflow maintenance required.
    </li>
                    <li>Easily roll back deployments
    </li>
                    <li>Recover more quickly from failures
    </li>
                    <li>Release with consistency and high quality
    </li>
                </ul>

            </div>



        )



    }

}